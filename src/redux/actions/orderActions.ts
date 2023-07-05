import { ThunkAction } from 'redux-thunk'
import { IOrder } from '../../shared/types/order.types'
import { ProjectActions, RootState } from '..'
import { Dispatch } from 'redux'

export const CREATE_ORDER_ACTION = 'CREATE_ORDER_ACTION'
export const CREATE_ORDER_SUCCESS_ACTION = 'CREATE_ORDER_SUCCESS_ACTION'
export const CREATE_ERROR_ACTION = 'CREATE_ERROR_ACTION'
export const CREATE_ORDER_RESET_ACTION = 'CREATE_ORDER_RESET_ACTION'

const ULR = 'https://mocki.io/v1/6ce1f90f-c072-4565-b6cf-8ed1d17007a3'

interface IResponse {
	success: boolean
}

export interface CreateOrderAction {
	type: typeof CREATE_ORDER_ACTION
}

export interface CreateOrderSuccessAction {
	type: typeof CREATE_ORDER_SUCCESS_ACTION
}

export interface CreateErrorAction {
	type: typeof CREATE_ERROR_ACTION
	payload: IOrder['errorMessage']
}

export interface CreateOrderResetAction {
	type: typeof CREATE_ORDER_RESET_ACTION
}

export const createOrderAction = (): ThunkAction<
	void,
	RootState,
	void,
	ProjectActions
> => {
	return async (dispatch: Dispatch<ProjectActions>) => {
		dispatch({
			type: CREATE_ORDER_ACTION
		})
		try {
			const res = await fetch(ULR)
			const data: IResponse = await res.json()
			if (data.success) {
				dispatch({
					type: CREATE_ORDER_SUCCESS_ACTION
				})
			} else {
				dispatch({
					type: CREATE_ORDER_RESET_ACTION
				})
			}
		} catch (error) {
			const err = error as Error
			dispatch({
				type: CREATE_ERROR_ACTION,
				payload: err.message
			})
		}
	}
}
