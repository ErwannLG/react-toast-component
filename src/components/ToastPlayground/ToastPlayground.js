import React from 'react'

import { ToastContext } from '../ToastProvider/ToastProvider'
import Button from '../Button'
import ToastShelf from '../ToastShelf/ToastShelf'

import styles from './ToastPlayground.module.css'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastPlayground() {
	const { createToast } = React.useContext(ToastContext)

	const [toastMessage, setToastMessage] = React.useState('')
	const [toastVariant, setToastVariant] = React.useState(VARIANT_OPTIONS[0])

	function handleSubmit(event) {
		event.preventDefault()

		createToast(toastMessage, toastVariant)
		setToastMessage('')
	}

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt='Cute toast mascot' src='/toast.png' />
				<h1>Toast Playground</h1>
			</header>
			<ToastShelf />
			<form onSubmit={handleSubmit} className={styles.controlsWrapper}>
				<div className={styles.row}>
					<label
						htmlFor='message'
						className={styles.label}
						style={{ alignSelf: 'baseline' }}
					>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id='message'
							className={styles.messageInput}
							value={toastMessage}
							onChange={(event) => setToastMessage(event.target.value)}
						/>
					</div>
				</div>
				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						{VARIANT_OPTIONS.map((variant, index) => (
							<label key={index} htmlFor={`variant-${variant}`}>
								<input
									id={`variant-${variant}`}
									type='radio'
									name='variant'
									value={variant}
									checked={toastVariant === variant}
									onChange={(event) => {
										setToastVariant(event.target.value)
									}}
								/>
								{variant}
							</label>
						))}
					</div>
				</div>
				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button>Pop Toast!</Button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default ToastPlayground
