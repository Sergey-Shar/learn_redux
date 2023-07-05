import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { productReducer } from '../reducers/product.reducer';
import { logsActionMiddleware } from '../middleware/logsActionMiddleware';
import { orderReducer } from '..';

const rootState = 	combineReducers({
		products: productReducer,
		order: orderReducer
	})

export const store = createStore(
	rootState,
	applyMiddleware(thunkMiddleware,logsActionMiddleware)
)

export type RootState = ReturnType<typeof rootState>

