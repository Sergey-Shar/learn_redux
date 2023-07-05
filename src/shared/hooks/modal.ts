import { RefObject, useCallback, useEffect, useRef } from 'react'

interface IModal {
	ref: RefObject<HTMLDialogElement>
	handleCloseModal: () => void
}
export const useModal = (...args: boolean[]): IModal => {
	const ref = useRef<HTMLDialogElement>(null)

	useEffect(() => {
		if (ref.current) {
			const dialog = ref.current
			dialog.showModal()
			document.body.style.overflow = 'hidden'
			return () => dialog.close()
		}
	}, [args])

	const handleCloseModal = useCallback((): void => {
		ref.current?.close()
		document.body.style.overflow = 'auto'
	}, [])

	return {
		ref,
		handleCloseModal
	}
}
