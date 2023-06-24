import { renderProduct } from './app/index.js'
import { renderCartTotal } from './app/index.js'
import { calcCartTotal } from './app/index.js'
import { store } from './redux/index.js'

store.subscribe(() => store.getState().products.forEach(renderProduct))
store.subscribe(() => renderCartTotal(calcCartTotal(store.getState().products)))

// trigger the render
store.dispatch({ type: 'INIT' })
