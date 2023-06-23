import { SELECTORS } from "../shared/index.js"
import { round } from "../shared/index.js"

const cartSubtotal = document.querySelector(SELECTORS.subtotal)
const cartTax = document.querySelector(SELECTORS.salesTax)
const cartTotal = document.querySelector(SELECTORS.total)

export function renderCartTotal(total) {
	cartSubtotal.textContent = '$ ' + round(total.subtotal)
	cartTax.textContent = '$ ' + round(total.tax)
	cartTotal.textContent = '$ ' + round(total.total)
}
