import { ProductItem } from '../product-item'
import styles from './styles.module.scss'
import { useAppSelector } from '../../shared/hooks'
import { productsSelector } from '../../redux'

export const Product = () => {
const products = useAppSelector(productsSelector)
	return (
		<div className={styles.product}>
			{products.map((product) => 
			<ProductItem product={product} key={product.id} />
			)}
		</div>
	)
}