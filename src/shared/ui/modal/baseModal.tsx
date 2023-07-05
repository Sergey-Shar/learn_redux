import { forwardRef } from 'react'
import styles from './styles.module.scss'

type TitleModification =
	| 'modal__titleInfo'
	| 'modal__titleSuccess'
	| 'modal__titleError'

interface BaseModalProps {
	title?: string
	titleModification?: TitleModification
	children: React.ReactNode
	onCloseModal: () => void
}
export const BaseModal = forwardRef<HTMLDialogElement, BaseModalProps>(
	(
		{
			title,
			titleModification = 'modal__titleInfo',
			children,
			onCloseModal
		}: BaseModalProps,
		ref
	) => {
		return (
			<dialog className={styles.modal} ref={ref}>
				<header className={styles.modal__header}>
					<h2 className={`${styles.modal__title} ${styles[titleModification]}`}>
						{title}
					</h2>
					<button className={styles.modal__close} onClick={onCloseModal}>
						×
					</button>
				</header>
				<div className={styles.modal__content}>{children}</div>
			</dialog>
		)
	}
)
