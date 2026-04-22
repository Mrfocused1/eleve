/* Booking system with per-therapist diaries backed by localStorage.
   Swap the DiaryStore for a real API (Cal.com, Acuity, bespoke) in production. */

import { BOOKING_CONFIG } from "../data/data.js";

const KEY = "eleve.bookings.v1";

export const DiaryStore = {
  all() {
    try { return JSON.parse(localStorage.getItem(KEY) || "[]"); }
    catch { return []; }
  },
  forTherapistOnDate(therapistId, ymd) {
    return this.all().filter(b => b.therapistId === therapistId && b.date === ymd);
  },
  add(booking) {
    const list = this.all();
    list.push(booking);
    localStorage.setItem(KEY, JSON.stringify(list));
  },
};

export function pad(n) { return String(n).padStart(2, "0"); }
export function ymd(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}
export function fromYMD(s) {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function isOpenDay(date) {
  return BOOKING_CONFIG.openDays.includes(date.getDay());
}

export function isBookable(date) {
  const now = new Date();
  const earliest = new Date(now.getTime() + BOOKING_CONFIG.leadHours * 3600 * 1000);
  const latest = new Date(now.getTime() + BOOKING_CONFIG.maxAdvanceDays * 86400 * 1000);
  if (date < new Date(earliest.getFullYear(), earliest.getMonth(), earliest.getDate())) return false;
  if (date > latest) return false;
  return isOpenDay(date);
}

/* Build slots for one day given a service duration and existing bookings. */
export function buildSlots(date, durationMin, existing = []) {
  const { openHour, closeHour, slotMinutes, leadHours } = BOOKING_CONFIG;
  const slots = [];
  const start = new Date(date); start.setHours(openHour, 0, 0, 0);
  const end = new Date(date); end.setHours(closeHour, 0, 0, 0);
  const leadCutoff = new Date(Date.now() + leadHours * 3600 * 1000);

  for (let t = new Date(start); t.getTime() + durationMin * 60000 <= end.getTime(); t = new Date(t.getTime() + slotMinutes * 60000)) {
    const slotStart = new Date(t);
    const slotEnd = new Date(t.getTime() + durationMin * 60000);
    const clashes = existing.some(b => {
      const bStart = new Date(`${b.date}T${b.time}`);
      const bEnd = new Date(bStart.getTime() + b.durationMin * 60000);
      return slotStart < bEnd && bStart < slotEnd;
    });
    const tooSoon = slotStart < leadCutoff;
    slots.push({
      time: `${pad(slotStart.getHours())}:${pad(slotStart.getMinutes())}`,
      available: !clashes && !tooSoon,
    });
  }
  return slots;
}

export function therapistEligible(therapist, service) {
  if (therapist.eligibleFor === "all") return true;
  return therapist.eligibleFor.includes(service.category);
}
