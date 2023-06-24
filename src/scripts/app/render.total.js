import { SELECTORS } from "../shared/index.js"
import { round } from "../shared/index.js"

const cartSubtotal = document.querySelector(SELECTORS.subtotal)
const cartTax = document.querySelector(SELECTORS.salesTax)
const cartTotal = document.querySelector(SELECTORS.total)

/**
 * This function takes in an object containing the subtotal, tax, and total cart amount and
 * uses them to update the corresponding HTML elements with their rounded values.
 *
 * @param {Object} total - An object containing the subtotal, tax, and total cart amount
 */
export function renderCartTotal(total) {
  // Destructure the subtotal, tax, and total cart amount from the total object
  const { subtotal, tax, total: cartTotalSum } = total;

  // Update the corresponding HTML elements with their rounded values
  cartSubtotal.textContent = round(subtotal);
  cartTax.textContent = round(tax);
  cartTotal.textContent = round(cartTotalSum);
}
