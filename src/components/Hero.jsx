import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';
import { hello } from '../assets';

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 aspect-square rounded-full bg-[#915eff]" />
					<div className="w-1 sm:h-80 h-40 violet-gradient " />
				</div>

				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi, I'm &nbsp;{' '}
						<span className="text-[#915eff]">Bayu</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						High Level experience in{' '}
						<br className="sm:block hidden" /> web Frontend
						Development knowledge
					</p>
				</div>
			</div>
			
			<ComputersCanvas />

			<div className='md:hidden absolute top-[400px] '>
				<img src={hello} alt="" />
			</div>

			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{
								y: [0, 24, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className="w-3 aspect-square rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
