export function calcCartTotal(cartProducts) {
	const subtotal = cartProducts.reduce((acc, product) => {
		return acc + product.price * product.quantity
	}, 0)
	const tax = subtotal * 0.13
	const total = subtotal + tax

	return { subtotal, tax, total }
}
