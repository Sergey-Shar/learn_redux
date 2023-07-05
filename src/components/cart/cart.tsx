import { CartTotal } from '../cart-total'
import { CartHeader } from '../cart-header'
import { Product } from '../product'
import styles from './styles.module.scss'
import {
	BaseButton,
	BaseModal,
	useAppDispatch,
	useAppSelector
} from '../../shared'
import {
	confirmedSelector,
	createOrderAction,
	isErrorSelector,
	errorMessageSelector
} from '../../redux'
import { useModal } from '../../shared/hooks/modal'

export const Cart = () => {
	const showModalSuccess = useAppSelector(confirmedSelector)
	const showModalError = useAppSelector(isErrorSelector)
	const errorMessage = useAppSelector(errorMessageSelector)
	const dispatch = useAppDispatch()
 const { ref, handleCloseModal } = useModal(showModalSuccess, showModalError)

	const handleBuyClick = ():void => {
		dispatch(createOrderAction())
	}

	return (
		<section className={styles.cart}>
			{showModalSuccess && (
				<BaseModal
					ref={ref}
					title="Success!"
					titleModification="modal__titleSuccess"
					onCloseModal={handleCloseModal}
				>
					Order confirmed!
				</BaseModal>
			)}
			{showModalError && (
				<BaseModal
					ref={ref}
					title="Error!"
					titleModification="modal__titleError"
					onCloseModal={handleCloseModal}
				>
					{errorMessage}
				</BaseModal>
			)}
			<CartHeader />
			<Product />
			<CartTotal />
			<BaseButton onClickBtn={handleBuyClick}>Buy</BaseButton>
		</section>
	)
}
