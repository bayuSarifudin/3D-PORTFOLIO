import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../style';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ exp }) => {
	return (
		<VerticalTimelineElement
			date={exp.date}
			iconStyle={{ background: exp.iconBg }}
			contentArrowStyle={{ borderRight: '7px solid #232631' }}
			contentStyle={{ background: '#1d1836', color: '#fff' }}
			icon={
				<div className="w-full h-full flex justify-center items-center">
					<img
						src={exp.icon}
						alt={exp.company_name}
						className="w-[60%] aspect-square object-contain"
					/>
				</div>
			}
		>
			<div>
				<h3 className="text-white text-[24px]">{exp.title}</h3>
				<p className="text-secondary text-[16px] font-semibold">
					{exp.company_name}
				</p>
			</div>

			<ul className="mt-5 list-disc ml-5 space-y-2 ">
				{exp.points.map((point, index) => {
					return (
						<li
							key={`experience-point-${index}`}
							className="text-white text-[14px] pl-1 tracking-wider"
						>
							{point}
						</li>
					);
				})}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText}`}>
					What I have done so far
				</p>
				<h2 className={`${styles.sectionHeadText}`}>Experience.</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((exp, index) => {
						return <ExperienceCard key={index} exp={exp} />;
					})}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, 'work');
