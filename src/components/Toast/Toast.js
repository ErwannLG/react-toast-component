import React from 'react'
import {
	AlertOctagon,
	AlertTriangle,
	CheckCircle,
	Info,
	X,
} from 'react-feather'

import { ToastContext } from '../ToastProvider/ToastProvider'
import VisuallyHidden from '../VisuallyHidden'

import styles from './Toast.module.css'

const ICONS_BY_VARIANT = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon,
}

function Toast({ children, id, variant }) {
	const { dismissToast } = React.useContext(ToastContext)
	const ToastIcon = ICONS_BY_VARIANT[variant]

	React.useEffect(() => {
		function handleKeyDown(event) {
			if (event.code === 'Escape') {
				dismissToast(id)
			}
		}
		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [dismissToast, id])

	return (
		<div className={`${styles.toast} ${styles[variant]}`}>
			<div className={styles.iconContainer}>
				<ToastIcon size={24} />
			</div>
			<p className={styles.content}>{children}</p>
			<button className={styles.closeButton} onClick={() => dismissToast(id)}>
				<X size={24} />
				<VisuallyHidden>Dismiss message</VisuallyHidden>
			</button>
		</div>
	)
}

export default Toast
