import styles from './styles.module.scss'

interface BaseButtonProps {
	children: React.ReactNode
	typeBtn?: 'button' | 'submit' | 'reset'
	onClickBtn: () => void
}

export const BaseButton = ({
	children,
	typeBtn = 'button',
	onClickBtn
}: BaseButtonProps) => {
	return (
		<button className={styles.button} onClick={onClickBtn} type={typeBtn}>
			{children}
		</button>
	)
}
