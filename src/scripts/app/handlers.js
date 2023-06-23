import { SELECTORS } from '../shared/index.js'
import { PRODUCTS } from '../shared/index.js'
import { populateProductCard } from './render.products.js'
import { renderCartTotal } from './render.total.js'
import { calcCartTotal } from './calc.total.js'

export function addHandlers(card) {
	card
		.querySelector(SELECTORS.increaseQuantityButton)
		.addEventListener('click', handleIncreaseQuantity)
	card
		.querySelector(SELECTORS.decreaseQuantityButton)
		.addEventListener('click', handleDecreaseQuantity)
}

function handleIncreaseQuantity(event) {
	const card = event.target.closest(SELECTORS.productItem)
	const id = card.dataset.id
	const product = PRODUCTS.find((product) => product.id === id)
	if (!product) {
		return
	}

	product.quantity += 1
	populateProductCard(product, card)
	renderCartTotal(calcCartTotal(PRODUCTS))
}

function handleDecreaseQuantity(event) {
	const card = event.target.closest(SELECTORS.productItem)
	const id = card.dataset.id
	const product = PRODUCTS.find((product) => product.id === id)

	if (product && product.quantity === 0) {
		return
	}

	product.quantity -= 1
	populateProductCard(product, card)
	renderCartTotal(calcCartTotal(PRODUCTS))
}
