import React from 'react'

import Button from '../Button'

import styles from './ToastPlayground.module.css'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastPlayground() {
	// const [toast, setToast] = React.useState({
	// 	message: '',
	// 	variant: '',
	// })
	const [toastMessage, setToastMessage] = React.useState('')
	const [toastVariant, setToastVariant] = React.useState(VARIANT_OPTIONS[0])

	console.log({ toastMessage, toastVariant })

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt='Cute toast mascot' src='/toast.png' />
				<h1>Toast Playground</h1>
			</header>

			<div className={styles.controlsWrapper}>
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
						{VARIANT_OPTIONS.map((option, index) => (
							<label key={index} htmlFor='variant-notice'>
								<input
									id='variant-notice'
									type='radio'
									name='variant'
									value={option}
									checked={toastVariant === option}
									onChange={(event) => {
										setToastVariant(event.target.value)
									}}
								/>
								{option}
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
			</div>
		</div>
	)
}

export default ToastPlayground
