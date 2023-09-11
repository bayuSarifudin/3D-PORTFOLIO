import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn('right', 'spring', 0.2 * index, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
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

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText}`}>Introduction</p>
				<h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
			</motion.div>

			<motion.p
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
				variants={fadeIn('', '', 0.1, 1)}
			>
				I'm Bayu Sarifudin, <br /> an enthusiastic Junior Frontend Developer with 1 year of hands-on experience in web development. Proficient in HTML, CSS, and JavaScript, I have a strong foundation in building user interfaces and creating visually appealing websites.<br /> My year of experience includes collaborating with senior developers to deliver responsive and user-friendly web applications. I am passionate about continuous learning and staying updated with the latest frontend technologies to enhance my skills and contribute effectively to dynamic development teams.
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => {
					return (
						<ServiceCard
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

export default SectionWrapper(About, 'about');
