import { SELECTORS } from '../shared/index.js'
import { addHandlers } from './handlers.js'

const product = document.querySelector(SELECTORS.product)
const productTemplate = document
	.querySelector(SELECTORS.productTemplate)
	.content.querySelector(SELECTORS.productItem)

export function renderProduct(productItem) {
	const productCard = productTemplate.cloneNode(true)

	productCard.dataset.id = productItem.id
	populateProductCard(productItem, productCard)
	addHandlers(productCard)
 
	product.append(productCard)
}

export function populateProductCard(product, cardElement) {
	cardElement.querySelector(SELECTORS.productName).textContent = product.name
	cardElement.querySelector(SELECTORS.productDescription).textContent =
		product.description
	cardElement.querySelector(SELECTORS.productPreview).src = product.image
	cardElement.querySelector(SELECTORS.productPreview).alt = product.name
	cardElement.querySelector(SELECTORS.productPrice).textContent =
		'$' + product.price
	cardElement.querySelector(SELECTORS.productQuantity).textContent =
		product.quantity
}
