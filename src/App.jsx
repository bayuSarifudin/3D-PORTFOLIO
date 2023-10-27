import { BrowserRouter } from 'react-router-dom'

import { Hero, Navbar, About, Tech, Experience, Works, Contact, StarsCanvas, Sosmed } from './components'
import { useEffect, useState } from 'react'
import PopupModal from './components/Modal'

const App = () => {
	const [isModalOpen, setModalOpen] = useState(false)

	useEffect(() => {
		function handleResize() {
			if (window.innerWidth < 768) {
				setModalOpen(true)
			} else {
				setModalOpen(false)
			}
		}

		// Initial check and add event listener
		window.addEventListener('load', handleResize)

		return () => {
			// Clean up the event listener when the component unmounts
			window.removeEventListener('load', handleResize)
		}
	}, [])

	return (
		<BrowserRouter>
			<div className='relative z-0 bg-primary'>
				<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />
				<Tech />
				<Works />
				<Sosmed />

				<div className='relative z-0'>
					<Contact />
					<StarsCanvas />
				</div>
			</div>

			<PopupModal isOpen={isModalOpen} onRequestClose={() => setModalOpen(false)} />
		</BrowserRouter>
	)
}

export default App
