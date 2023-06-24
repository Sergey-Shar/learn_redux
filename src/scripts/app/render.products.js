import { SELECTORS } from '../shared/index.js'
import { addHandlers } from './handlers.js'

const product = document.querySelector(SELECTORS.product)
const productTemplate = document
	.querySelector(SELECTORS.productTemplate)
	.content.querySelector(SELECTORS.productItem)

/**
 * This function renders a product item on the page.
 * If the product item already exists on the page, it updates the existing element.
 * If the product item does not exist on the page, it creates a new element from the template and adds it to the page.
 * @param {Object} productItem - The product item to be rendered.
 */
export function renderProduct(productItem) {
	// Check if there is an existing product item with the same id on the page
	const existingProduct = product.querySelector(
		`${SELECTORS.productItem}[data-id="${productItem.id}"]`
	)

	// Create a new product card using the template if there is no existing product item
	const productCard = existingProduct || productTemplate.cloneNode(true)

	// Set the id of the product card to the id of the product item
	productCard.dataset.id = productItem.id

	// Populate the product card with data from the product item
	populateProductCard(productItem, productCard)

	// Add event handlers to the product card
	addHandlers(productCard)

	// Add the product card to the page
	product.append(productCard)
}

/**
 * This function populates a product card with information about a given product.
 * @param {Object} product - The product to display information about.
 * @param {HTMLElement} cardElement - The HTML element corresponding to the product card.
 */
export function populateProductCard(product, cardElement) {
	// Destructure the properties of the product object.
	const { name, description, image, price, quantity } = product

	// Destructure the selectors for the various elements within the product card.
	const {
		productName,
		productDescription,
		productPreview,
		productPrice,
		productQuantity
	} = SELECTORS

	// Update the text and attributes of the various elements within the product card.
	cardElement.querySelector(productName).textContent = name
	cardElement.querySelector(productDescription).textContent = description
	cardElement.querySelector(productPreview).src = image
	cardElement.querySelector(productPreview).alt = name
	cardElement.querySelector(productPrice).textContent = `$ ${price}`
	cardElement.querySelector(productQuantity).textContent = quantity
}
