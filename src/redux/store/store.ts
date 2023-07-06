import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { productReducer } from '../reducers/product.reducer';
import { logsActionMiddleware } from '../middleware/logsActionMiddleware';
import { orderReducer } from '..';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const persistConfig = {
	key: 'root',
	storage
}

const rootState = 	combineReducers({
		products: productReducer,
		order: orderReducer
	})

	const persistedReducer = persistReducer(persistConfig, rootState)

export const store = createStore(
	persistedReducer,
	composeWithDevTools(applyMiddleware(thunkMiddleware, logsActionMiddleware))
)

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootState>

