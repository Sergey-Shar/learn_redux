import { ProductItem } from '../product-item'
import { IProducts  } from '../../__data__/products'
import styles from './styles.module.scss'
import { memo } from 'react'

interface ProductProps {
	products: IProducts[]
	decreaseQuantity: (id: string) => void
	increaseQuantity: (id: string) => void
}
export const Product = ({products, decreaseQuantity, increaseQuantity}: ProductProps) => {
	return (
		<div className={styles.product}>
			{products.map((product) => (
				<ProductItem
				decreaseQuantity={decreaseQuantity}
				increaseQuantity={increaseQuantity}
				product={product}
     key={product.id}
				/>
			))}
		</div>
	)
}