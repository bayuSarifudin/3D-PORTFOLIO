import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { rightArrow } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../style';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  // State for screen size
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Listen for screen size changes
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check size on initial load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      animate={{ opacity: isMobile ? 1 : 1 }} // Explicitly set opacity
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div
          onClick={() => {
            if (!source_code_link) return;
            return window.open(source_code_link, '_blank');
          }}
          className="cursor-pointer"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">
              {description}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => {
              return (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              );
            })}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
	// State for screen size
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Listen for screen size changes
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check size on initial load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()} animate={{ opacity: isMobile ? 1 : 1 }}>
        <p className={`${styles.sectionSubText}`}>My Works</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
					animate={{ opacity: isMobile ? 1 : 1 }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects showcase my skills and experience through real-world examples of my work.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'work');
