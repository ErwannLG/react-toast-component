import React from 'react'

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
	const [toasts, setToasts] = React.useState([])

	function createToast(message, variant) {
		const newToast = {
			id: crypto.randomUUID(),
			message: message,
			variant: variant,
		}
		const nextToasts = [...toasts, newToast]

		setToasts(nextToasts)
	}

	function dismissToast(id) {
		const nextToasts = toasts.filter((toast) => {
			return toast.id !== id
		})
		setToasts(nextToasts)
	}

	React.useEffect(() => {
		function handleKeyDown(event) {
			if (event.code === 'Escape') {
				setToasts([])
			}
		}
		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [])

	return (
		<ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
			{children}
		</ToastContext.Provider>
	)
}

export default ToastProvider
