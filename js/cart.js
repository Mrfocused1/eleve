/* localStorage-backed cart. Single source of truth across pages.
   Items: [{ kind: 'product'|'service', id, name, price, qty, variant, meta }] */

import { PAYMENT } from "../data/data.js";

const KEY = "eleve.cart.v1";

function read() {
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); }
  catch { return []; }
}
function write(items) {
  localStorage.setItem(KEY, JSON.stringify(items));
  document.dispatchEvent(new CustomEvent("cart:change", { detail: items }));
}

export function getCart() { return read(); }

export function cartCount() {
  return read().reduce((n, it) => n + (it.qty || 1), 0);
}

export function cartSubtotal() {
  return read().reduce((n, it) => n + (Number(it.price) * (it.qty || 1)), 0);
}

function keyFor(item) {
  return `${item.kind}:${item.id}:${item.variant || ""}`;
}

export function addToCart(item) {
  const items = read();
  const k = keyFor(item);
  const existing = items.find((x) => keyFor(x) === k);
  if (existing) existing.qty = (existing.qty || 1) + (item.qty || 1);
  else items.push({ ...item, qty: item.qty || 1 });
  write(items);
}

export function setQty(k, qty) {
  const items = read();
  const it = items.find((x) => keyFor(x) === k);
  if (!it) return;
  it.qty = Math.max(1, qty | 0);
  write(items);
}

export function removeFromCart(k) {
  const items = read().filter((x) => keyFor(x) !== k);
  write(items);
}

export function clearCart() { write([]); }

export function currency(n) {
  return `${PAYMENT.currencySymbol}${Number(n).toFixed(2)}`;
}

export { keyFor };
