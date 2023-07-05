import { PRODUCTS } from '../../__data__/products'
import { IProduct } from '../../shared/types/product.types'
import {
	DECREASE_QUANTITY_ACTION,
	INCREASE_QUANTITY_ACTION
} from '../actions/productActions'
import { ProjectActions } from '../actions/typesActions'

export function productReducer(
	state = PRODUCTS,
	action: ProjectActions
): IProduct[] {
	switch (action.type) {
		case INCREASE_QUANTITY_ACTION:
			return state.map((product) => {
				if (product.id === action.payload.id) {
					return { ...product, quantity: product.quantity + 1 }
				}
				return product
			})
		case DECREASE_QUANTITY_ACTION:
			return state.map((product) => {
				if (product.id === action.payload.id && product.quantity > 1) {
					return { ...product, quantity: product.quantity - 1 }
				}
				return product
			})
		default:
			return state
	}
}
