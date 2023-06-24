import { PRODUCTS } from "../shared/index.js";
import { INCREASE_QUANTITY_ACTION, DECREASE_QUANTITY_ACTION } from "./actions.js";

export function productReducer (state = PRODUCTS, action) {
	console.log('productReducer');
 switch (action.type) {
		case INCREASE_QUANTITY_ACTION:
			return state.map((product) => {
    const copyProduct = { ...product }
				if (copyProduct.id === action.payload.id) {
					return { ...copyProduct, quantity: copyProduct.quantity + 1 }
				}
				return product
			})
		case DECREASE_QUANTITY_ACTION:
			return state.map((product) => {
    const copyProduct = { ...product }
				if (copyProduct.id === action.payload.id && copyProduct.quantity > 1) {
					return { ...copyProduct, quantity: copyProduct.quantity - 1 }
				}
				return product
			})
		default:
			return state
	}
}