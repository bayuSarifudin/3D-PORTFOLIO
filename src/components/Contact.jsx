import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

import { contactMail, world } from '../assets';

import { styles } from '../style';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';

import { slideIn } from '../utils/motion';

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {};
	const handleSubmit = (e) => {};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>Contact.</h3>

				<div
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8 justify-center items-center"
				>
					<div className="w-full h-[200px] flex justify-center items-center">
						<img
							src={contactMail}
							className="w-1/2 aspect-[3/4] object-contain"
							alt="icon"
						/>
					</div>
					<button
						onClick={() =>
							window.open(
								'mailto:bayusarifudin@gmail.com',
								'_blank'
							)
						}
						className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary active:scale-95 rounded-xl"
					>
						Mail me
					</button>
				</div>
			</motion.div>

			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] hidden md:block"
			>
				<EarthCanvas />
			</motion.div>

			<div className='block md:hidden'>
						<img src={world} alt="" />
			</div>
		</div>
	);
};

export default SectionWrapper(Contact, 'contact');
