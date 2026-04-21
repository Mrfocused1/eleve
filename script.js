(function () {
  const LAUNCH_ISO = "2026-04-26T09:00:00+01:00";
  const launch = new Date(LAUNCH_ISO).getTime();

  const pad = (n) => String(n).padStart(2, "0");
  const els = {
    days: document.querySelector('[data-unit="days"]'),
    hours: document.querySelector('[data-unit="hours"]'),
    minutes: document.querySelector('[data-unit="minutes"]'),
    seconds: document.querySelector('[data-unit="seconds"]'),
  };

  function tick() {
    const diff = Math.max(0, launch - Date.now());
    const s = Math.floor(diff / 1000);
    els.days.textContent = pad(Math.floor(s / 86400));
    els.hours.textContent = pad(Math.floor((s % 86400) / 3600));
    els.minutes.textContent = pad(Math.floor((s % 3600) / 60));
    els.seconds.textContent = pad(s % 60);
  }
  tick();
  setInterval(tick, 1000);

  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  const form = document.getElementById("signup");
  const msg = document.getElementById("formMsg");
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    if (!emailRe.test(email)) {
      msg.textContent = "Please enter a valid email address.";
      msg.className = "form-msg err";
      return;
    }
    try {
      const list = JSON.parse(localStorage.getItem("eleve_waitlist") || "[]");
      if (!list.includes(email)) list.push(email);
      localStorage.setItem("eleve_waitlist", JSON.stringify(list));
    } catch (_) {}
    form.reset();
    msg.textContent = "Thank you — you’re on the list.";
    msg.className = "form-msg ok";
  });
})();
