import React from 'react'
import {Tilt} from 'react-tilt'
import {motion } from 'framer-motion'

import {styles} from '../styles'
import { services } from '../constants'
import {fadeIn,textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { cv } from '../assets'

const ServiceCard = ({title,description,index,icon}) => {
  return(
      <Tilt className='xs:w-[250px] w-full'>
        <motion.div
          variants={fadeIn("right","spring",0.5*index,0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div
            options={{
              max:45,
              scale:1,
              speed:450
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title} className='w-16 h-16 object-contain '/>
            <h3 className='text-whit text-[20px] font-bold text-center'>
            {title}
          </h3>
          </div>
          
        </motion.div>
      </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Overview
        </h2>
      </motion.div>
      {/* <a href={cv} download="optional-filename.pdf">Download File</a> */}
      <motion.p 
        variants={fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled Full Stack Developer with experiecne in JavaScript and  experties in frameworks like 
        React,Node.js, and Express.js. I have a passion for coding and love to learn new things. I'm a quick learner and a team player. I have a strong foundation in computer science and I'm always looking to improve my skills.
      </motion.p>
      {/* <div>
        <a href={cv} download="kundan_cv.pdf">Download File</a>
      </div> */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index)=>(
            <ServiceCard key={service.title} index={index}{...service}/>
        ))}
      </div>
    </>
  )
}



export default SectionWrapper(About,"about")






// Material.074_30_baseColor.png