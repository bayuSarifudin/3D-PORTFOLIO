import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { services, sosmed } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const SosmedCard = ({ index, title, icon, url }) => {
	return (
		<Tilt className="w-full cursor-pointer">
			<motion.div
				variants={fadeIn('right', 'spring', 0.2 * index, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div
          onClick={() =>
            window.open(
              url,
              '_blank'
            )
          }
					className="bg-tertiary rounded-[20px] py-5 px-12 flex justify-evenly items-center m-1 flex-col"
					option={{ max: 45, scale: 1, speed: 450 }}
				>
					<img
						src={icon}
						alt={title}
						className="w-16 aspect-square object-contain"
					/>
					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const Sosmed = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText}`}>Get to know me more</p>
				<h2 className={`${styles.sectionHeadText}`}>Pay a visit.</h2>
			</motion.div>

			<div className="mt-20 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-5 gap-10">
				{sosmed.map((service, index) => {
					return (
						<SosmedCard
							key={service.title}
							index={index}
							{...service}
						/>
					);
				})}
			</div>
		</>
	);
};

export default SectionWrapper(Sosmed, 'socmed');
