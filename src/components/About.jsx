import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className='xs:w-[250px] w-full'>
			<motion.div variants={fadeIn('right', 'spring', 0.2 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
				<div
					className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
					option={{ max: 45, scale: 1, speed: 450 }}>
					<img src={icon} alt={title} className='w-16 aspect-square object-contain' />
					<h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
				</div>
			</motion.div>
		</Tilt>
	)
}

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText}`}>Introduction</p>
				<h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
			</motion.div>

			<motion.p className='mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]' variants={fadeIn('', '', 0.1, 1)}>
				I'm Bayu Sarifudin, <br /> I'm a passionate frontend developer who loves turning designs into captivating web experiences. With a year of
				experience, I'm dedicated to creating responsive and user-friendly interfaces. I thrive on solving challenges, collaborating with diverse
				teams, and staying at the forefront of web development trends. Beyond coding, you'll find me staying active and keeping fit through sports and
				exercise. Ready for the next exciting project!
			</motion.p>

			<div className='mt-20 flex flex-wrap gap-10'>
				{services.map((service, index) => {
					return <ServiceCard key={service.title} index={index} {...service} />
				})}
			</div>
		</>
	)
}

export default SectionWrapper(About, 'about')
