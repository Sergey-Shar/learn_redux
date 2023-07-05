import { createSelector } from "reselect"
import { productsSelector } from ".."
import { round } from "../../shared"

export const subtotalSelector = createSelector(productsSelector, (products): number => {
	const subtotal = products.reduce(
		(acc: number, product) => acc + product.price * product.quantity,
		0
	)
	return round(subtotal)
})

export const taxSelector = createSelector(subtotalSelector, (subtotal): number =>
	round(subtotal * 0.13)
)

export const totalSelector = createSelector(
	subtotalSelector,
	taxSelector,
	(subtotal, tax) => round(subtotal + tax)
)

export const totalsSelector = createSelector(
	[subtotalSelector, taxSelector, totalSelector],
	(subtotal, tax, total): { subtotal: number; tax: number; total: number } => {
		return { subtotal, tax, total }
	}
)
