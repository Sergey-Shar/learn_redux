import {renderProduct} from './app/index.js'
import { renderCartTotal } from './app/index.js'
import { calcCartTotal } from './app/index.js'
import { PRODUCTS } from './shared/index.js'


PRODUCTS.forEach(renderProduct)
renderCartTotal(calcCartTotal(PRODUCTS))




