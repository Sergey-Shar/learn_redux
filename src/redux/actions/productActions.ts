import { IProduct } from "../../shared/types/product.types"

export const INCREASE_QUANTITY_ACTION = 'INCREASE_QUANTITY_ACTION'
export const DECREASE_QUANTITY_ACTION = 'DECREASE_QUANTITY_ACTION'


export interface IncreaseQuantityAction {
	type: typeof INCREASE_QUANTITY_ACTION
	payload: { id: IProduct['id'] }
}

export interface DecreaseQuantityAction {
	type: typeof DECREASE_QUANTITY_ACTION
	payload: { id: IProduct['id']}
}

export function increaseQuantityActionCreator(id:IProduct['id']): IncreaseQuantityAction {
	return {
		type: INCREASE_QUANTITY_ACTION,
		payload: { id }
	}
}

export function decreaseQuantityActionCreator(id:IProduct['id']): DecreaseQuantityAction {
	return {
		type: DECREASE_QUANTITY_ACTION,
		payload: { id }
	}
}



