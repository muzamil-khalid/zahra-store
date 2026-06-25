import { SITE, formatPKR } from "./site";
import { unitPrice, type CartItem } from "@/context/CartContext";

export function waLink(message?: string): string {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export interface OrderCustomer {
  name?: string; phone?: string; city?: string; address?: string; notes?: string;
}

// Build a full order message from the cart for the "Order on WhatsApp" button.
export function buildOrderMessage(items: CartItem[], customer?: OrderCustomer): string {
  const lines: string[] = [];
  lines.push(`*New Order — ${SITE.name}*`);
  lines.push("");
  items.forEach((i, idx) => {
    const opt = i.stitched ? `Stitched${i.size !== "—" ? `, Size ${i.size}` : ""}` : "Unstitched";
    const line = `${idx + 1}. ${i.name}\n   ${opt} | Qty: ${i.qty} | ${formatPKR(unitPrice(i) * i.qty)}`;
    lines.push(line);
  });
  const subtotal = items.reduce((s, i) => s + unitPrice(i) * i.qty, 0);
  lines.push("");
  lines.push(`*Subtotal: ${formatPKR(subtotal)}*`);
  lines.push("_(Shipping & final total confirm karein)_");

  if (customer && (customer.name || customer.phone || customer.address)) {
    lines.push("");
    lines.push("*Delivery details*");
    if (customer.name) lines.push(`Name: ${customer.name}`);
    if (customer.phone) lines.push(`Phone: ${customer.phone}`);
    if (customer.city) lines.push(`City: ${customer.city}`);
    if (customer.address) lines.push(`Address: ${customer.address}`);
    if (customer.notes) lines.push(`Notes: ${customer.notes}`);
  }
  return lines.join("\n");
}
