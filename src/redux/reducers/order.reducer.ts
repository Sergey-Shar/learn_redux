import {
	CREATE_ERROR_ACTION,
	CREATE_ORDER_ACTION,
	CREATE_ORDER_RESET_ACTION,
	CREATE_ORDER_SUCCESS_ACTION
} from '..'
import { IOrder } from '../../shared/types/order.types'
import { ProjectActions } from '../actions/typesActions'

const orderState : IOrder = {
	isLoading: false,
	isConfirmed: false,
	isError: false,
	errorMessage: ''
}

export function orderReducer(state = orderState, action: ProjectActions):IOrder {
	switch (action.type) {
		case CREATE_ORDER_ACTION:
			return {
				...state,
				isLoading: true,
				isConfirmed: false,
				isError: false,
				errorMessage: ''
			}
		case CREATE_ORDER_SUCCESS_ACTION:
			return {
				...state,
				isLoading: false,
				isConfirmed: true,
				isError: false,
				errorMessage: ''
			}
		case CREATE_ERROR_ACTION:
			return {
				...state,
				isLoading: false,
				isConfirmed: false,
				isError: true,
				errorMessage: action.payload || 'Something went wrong'
			}
		case CREATE_ORDER_RESET_ACTION:
			return {
				...state,
				isLoading: false,
				isConfirmed: false,
				isError: false,
				errorMessage: ''
			}
		default:
			return state
	}
}
