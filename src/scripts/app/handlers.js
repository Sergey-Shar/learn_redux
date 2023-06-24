import { SELECTORS } from '../shared/index.js'
import { store, increaseQuantityActionCreator, decreaseQuantityActionCreator } from '../redux/index.js'

export const addHandlers = (card) => {
	const increaseBtn = card.querySelector(SELECTORS.increaseQuantityButton)
	const decreaseBtn = card.querySelector(SELECTORS.decreaseQuantityButton)

	increaseBtn.addEventListener('click', handleIncreaseQuantity)
	decreaseBtn.addEventListener('click', handleDecreaseQuantity)
}

function handleIncreaseQuantity(event) {
	const productCard = event.target.closest(SELECTORS.productItem)
	const productId = productCard.dataset.id
	store.dispatch(increaseQuantityActionCreator(productId))
}

function handleDecreaseQuantity(event) {
	const productCard = event.target.closest(SELECTORS.productItem)
	const productId = productCard.dataset.id
	store.dispatch(decreaseQuantityActionCreator(productId))
}
