import React, { useEffect } from 'react'

const PopupModal = ({ isOpen, onRequestClose }) => {
	// Add event listeners to disable scrolling and body interaction when the modal is open
	useEffect(() => {
		const body = document.querySelector('body')

		if (isOpen) {
			body.style.overflow = 'hidden' // Disable scrolling
		} else {
			body.style.overflow = 'auto' // Enable scrolling
		}

		return () => {
			body.style.overflow = 'auto' // Restore scrolling when the modal is closed
		}
	}, [isOpen])

	return (
		<div className={`fixed top-0 left-0 w-full h-full text-white flex items-center justify-center px-4 ${isOpen ? '' : 'hidden'}`}>
			<div className='fixed inset-0 bg-black opacity-50'></div>
			<div
				className='relative z-50 bg-white p-4 flex items-center justify-center flex-col space-y-4 rounded-xl shadow-lg shadow-amber-50 w-full max-w-[480px] bg-primary/90 border-2 border-white'
				onClick={(e) => e.stopPropagation()} // Prevent clicks on the modal from closing the modal
			>
				<div className='mb-4 space-y-4'>
					<h2 className='text-xl font-semibold'>On Your Mobile?</h2>
					<p>You may won't feel the the full feature inside my site</p>
				</div>
				<button className='mt-4 bg-[#915eff] text-white px-4 py-2 w-full rounded-[8px] hover:bg-[#915eff]' onClick={onRequestClose}>
					Okay
				</button>
			</div>
		</div>
	)
}

export default PopupModal
