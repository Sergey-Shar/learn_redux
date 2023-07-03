import { CartTotal } from '../cart-total'
import { CartHeader } from '../cart-header'
import { Product } from '../product'
import styles from './styles.module.scss'
import { IProducts, PRODUCTS } from '../../__data__/products'
import { useCallback, useMemo, useState } from 'react'
import { round } from '../../shared/utils/round'
import { Total } from '../../types/total.types'

export const Cart = () => {
	const [products, setProducts] = useState<IProducts[]>(PRODUCTS)

	const increaseQuantity = useCallback((id: string) => {
		setProducts((products) =>
			products.map((product) => {
				if (product.id === id) {
					return {
						...product,
						quantity: product.quantity + 1
					}
				}

				return product
			})
		)
	}, [])

	const decreaseQuantity = useCallback((id: string) => {
		setProducts((products) =>
			products.map((product) => {
				if (product.id === id && product.quantity > 1) {
					return {
						...product,
						quantity: product.quantity - 1
					}
				}

				return product
			})
		)
	}, [])

		const total: Total = useMemo(() => {
			const subtotal = products.reduce(
				(acc, product) => acc + product.price * product.quantity,
				0
			)
			const taxRate = 0.13
			const tax = subtotal * taxRate
			const total = subtotal + tax

			return { subtotal: round(subtotal), tax: round(tax), total: round(total) }
		}, [products])

	return (
		<section className={styles.cart}>
			<CartHeader />
			<Product
				increaseQuantity={increaseQuantity}
				decreaseQuantity={decreaseQuantity}
				products={products}
			/>
			<CartTotal total={total} />
		</section>
	)
}
