/* Shared layout (header/footer), active-link highlighting, mobile drawer,
   newsletter form handler, cart count. Every page imports this. */

import { BUSINESS, NEWSLETTER } from "../data/data.js";
import { cartCount } from "./cart.js";

const NAV = [
  { href: "index.html",     label: "Home" },
  { href: "services.html",  label: "Services" },
  { href: "training.html",  label: "Academy" },
  { href: "shop.html",      label: "Shop" },
  { href: "book.html",      label: "Book" },
  { href: "pricing.html",   label: "Pricing" },
  { href: "therapists.html", label: "Therapists" },
  { href: "about.html",     label: "About" },
  { href: "faqs.html",      label: "FAQs" },
  { href: "contact.html",   label: "Contact" },
];

function currentPath() {
  const p = location.pathname.split("/").pop();
  return p || "index.html";
}

export function renderHeader(mountId = "site-header") {
  const mount = document.getElementById(mountId);
  if (!mount) return;
  const here = currentPath();
  mount.innerHTML = `
    <div class="nav">
      <a href="index.html" class="nav-brand" aria-label="élevé London by Malika">
        <span class="dot" aria-hidden="true"></span>
        <span>ÉLEVÉ LONDON<small>By Malika</small></span>
      </a>
      <nav class="nav-links" aria-label="Primary">
        ${NAV.map(n => `<a href="${n.href}" ${n.href === here ? 'class="is-active" aria-current="page"' : ""}>${n.label}</a>`).join("")}
      </nav>
      <div class="nav-actions">
        <a href="cart.html" class="cart-link" aria-label="Cart">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.4" d="M4 6h16l-1.4 10.5a2 2 0 0 1-2 1.7H7.4a2 2 0 0 1-2-1.7L4 6zm3-2h10"/></svg>
          <span class="cart-count" id="cartCount" hidden>0</span>
        </a>
        <button class="menu-btn" id="menuBtn" aria-label="Open menu" aria-expanded="false">
          <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.4" d="M0 1h18M0 7h18M0 13h18"/></svg>
          <span>Menu</span>
        </button>
      </div>
    </div>
  `;
  const btn = document.getElementById("menuBtn");
  const hdr = document.getElementById(mountId);
  const closeDrawer = () => {
    hdr.classList.remove("nav-drawer", "open");
    btn?.setAttribute("aria-expanded", "false");
  };
  btn?.addEventListener("click", () => {
    const open = hdr.classList.toggle("nav-drawer");
    hdr.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", String(open));
  });
  hdr.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", closeDrawer));
  updateCartBadge();
}

export function updateCartBadge() {
  const el = document.getElementById("cartCount");
  if (!el) return;
  const n = cartCount();
  el.textContent = String(n);
  el.hidden = n === 0;
}

export function renderFooter(mountId = "site-footer") {
  const mount = document.getElementById(mountId);
  if (!mount) return;
  const year = new Date().getFullYear();
  mount.innerHTML = `
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-col">
          <h5>Élevé London</h5>
          <p>${BUSINESS.formerly}. The Élevé Method® — bespoke mapping, drainage and sculpting protocols for natural, visible results.</p>
          <div class="social">
            <a class="ico" href="${BUSINESS.instagram}" aria-label="Instagram" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.4" d="M3.5 7.5a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4z"/><circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor"/></svg>
            </a>
            <a class="ico" href="${BUSINESS.tiktok}" aria-label="TikTok" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M14 3h2.2c.2 1.8 1.3 3.2 3.3 3.5v2.2c-1.3 0-2.5-.3-3.5-.9v6.4a5.3 5.3 0 1 1-5.3-5.3c.3 0 .6 0 .9.1v2.3a3 3 0 1 0 2.1 2.9V3z"/></svg>
            </a>
            <a class="ico" href="${BUSINESS.whatsapp}" aria-label="WhatsApp" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.4" d="M20.5 12a8.5 8.5 0 1 1-3.5-6.9L20 3l-.9 3.4A8.5 8.5 0 0 1 20.5 12zM8 9c0 4 3 7 7 7l2-1-2.5-2-1.5 1-2.5-2.5 1-1.5-2-2.5L8 9z"/></svg>
            </a>
            <a class="ico" href="${BUSINESS.emailHref}" aria-label="Email">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.4" d="M3.5 6.5h17v11h-17zM3.5 7l8.5 6 8.5-6"/></svg>
            </a>
          </div>
        </div>
        <div class="footer-col">
          <h5>Explore</h5>
          <ul>
            <li><a href="services.html">Treatment Menu</a></li>
            <li><a href="usa-services.html">USA Introductory Menu</a></li>
            <li><a href="training.html">Élevé Academy</a></li>
            <li><a href="shop.html">Élevé Store</a></li>
            <li><a href="book.html">Book a Session</a></li>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="therapists.html">Therapists</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Clinic</h5>
          <ul>
            <li><a href="about.html">About Malika</a></li>
            <li><a href="faqs.html">FAQs</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Visit</h5>
          <ul>
            <li>${BUSINESS.location}</li>
            <li>${BUSINESS.hours}</li>
            <li><a href="${BUSINESS.phoneHref}">${BUSINESS.phone}</a></li>
            <li><a href="${BUSINESS.emailHref}">${BUSINESS.email}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-copy">
        <span>© ${year} Élevé London by Malika</span>
        <span><a href="#">Privacy Policy</a> · <a href="#">Terms</a></span>
      </div>
    </div>
  `;
}

export function wireNewsletter(formId = "signup") {
  const form = document.getElementById(formId);
  if (!form) return;
  const msg = form.querySelector(".form-msg");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = new FormData(form).get("email")?.toString().trim();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      msg.textContent = "Please enter a valid email.";
      msg.className = "form-msg err";
      return;
    }
    msg.textContent = "Adding you to the list…";
    msg.className = "form-msg";
    try {
      if (NEWSLETTER.endpoint) {
        const r = await fetch(NEWSLETTER.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ email }),
        });
        if (!r.ok) throw new Error("server");
      } else {
        // Demo mode: store locally.
        const list = JSON.parse(localStorage.getItem("eleve.newsletter") || "[]");
        if (!list.includes(email)) list.push(email);
        localStorage.setItem("eleve.newsletter", JSON.stringify(list));
        await new Promise(r => setTimeout(r, 400));
      }
      msg.textContent = "Welcome — check your inbox for your 10% code.";
      msg.className = "form-msg ok";
      form.reset();
    } catch {
      msg.textContent = "Something went wrong. Please try again.";
      msg.className = "form-msg err";
    }
  });
}

export function toast(message) {
  let el = document.getElementById("toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "toast";
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove("show"), 2400);
}

export function init({ header = true, footer = true, newsletter = "signup" } = {}) {
  if (header) renderHeader();
  if (footer) renderFooter();
  if (newsletter) wireNewsletter(newsletter);
}
