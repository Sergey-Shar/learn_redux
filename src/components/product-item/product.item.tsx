import { memo } from 'react'
import { IProducts } from '../../__data__/products'
import styles from './styles.module.scss'

interface ProductItemProps {
 product: IProducts
	decreaseQuantity: (id: string) => void
	increaseQuantity: (id: string) => void
}
export const ProductItem = memo(({ product, decreaseQuantity, increaseQuantity}: ProductItemProps) => {

	return (
		<div className={styles.product__item}>
			<img
				src={product.image}
				className={styles.product__itemImage}
				alt={product.name}
			/>
			<h3 className={styles.product__itemName}>{product.name}</h3>
			<p className={styles.product__itemDescription}>{product.description}</p>
			<span className={styles.product__itemPrice}>{product.price}</span>
			<div className={styles.product__quantitySelector}>
				<button
					onClick={decreaseQuantity.bind(null, product.id)}
					className={`${styles.product__itemButton} ${styles.product__itemButtonMinus}`}
				>
					<svg
						className={styles.product__itemButtonIcon}
						width="24"
						height="24"
						viewBox="0 0 100 10"
					>
						<rect x="0" y="4.5" width="100" height="10" />
					</svg>
				</button>
				<span className={styles.product__quantityValue}>{product.quantity}</span>
				<button
					onClick={increaseQuantity.bind(null, product.id)}
					className={`${styles.product__itemButton} ${styles.product__itemButtonPlus}`}
				>
					<svg
						className={styles.product__itemButtonIcon}
						width="24"
						height="24"
						viewBox="0 0 100 100"
					>
						<rect x="0" y="45" width="100" height="10" />
						<rect x="45" y="0" width="10" height="100" />
					</svg>
				</button>
			</div>
		</div>
	)
})