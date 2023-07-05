import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {App }from './app/index.tsx'
import { store } from './redux/store/store.ts'
import './scss/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
