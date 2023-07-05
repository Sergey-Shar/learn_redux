import styles from './styles.module.scss'
import { useAppSelector } from '../../shared/hooks'
import { totalsSelector } from '../../redux'
export const CartTotal = () => {
const total = useAppSelector(totalsSelector)
	return (
		<table className={styles.bill}>
			<tbody>
				<tr className={styles.bill__subtotal}>
					<td className={styles.bill__label}>Subtotal:</td>
					<td className={styles.bill__value}>{total.subtotal}</td>
				</tr>
				<tr className={styles.bill__tax}>
					<td className={styles.bill__label}>Sales tax:</td>
					<td className={styles.bill__value}>{total.tax}</td>
				</tr>
				<tr className={styles.bill__total}>
					<td className={styles.bill__label}>Total:</td>
					<td className={styles.bill__value}>{total.total}</td>
				</tr>
			</tbody>
		</table>
	)
}
