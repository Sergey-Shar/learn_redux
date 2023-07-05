import styles from './styles.module.scss'
export const CartHeader = () => {
	return (
		<header className={styles.cart__header}>
			<h2 className={styles.cart__title}>My Cart</h2>
		</header>
	)
}
