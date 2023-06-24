export function calcCartTotal(cartProducts) {
	// calculate subtotal
	const subtotal = cartProducts.reduce(
		(acc, product) => acc + product.price * product.quantity,
		0
	)

	// calculate tax and total
	const taxRate = 0.13
	const tax = subtotal * taxRate
	const total = subtotal + tax

	// return object with all three values
	return { subtotal, tax, total }
}