import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {App }from './app/index.tsx'
import { persistor, store } from './redux/store/store.ts'
import { Loader } from './shared'
import './scss/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={<Loader />}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>
)
