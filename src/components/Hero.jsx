import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { ComputersCanvas } from './canvas'
import { cv } from '../assets'

const Hero = () => {
  return (
    <section
      className='relative w-full h-screen mac-auto'
    >
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-2-7xl max-auto flex flex-row items-start gap-5 `}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>

        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className='text-[#915eff]'>Kundan</span>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop responsive and user-friendly websites<br className='sm:block hidden'/> with a focus on modern technologies and clear code.
            </p>
          </h1>




        </div>


      </div>
      <ComputersCanvas/>

      <div className='absolute xs:bottom-5 bottom-10 w-full flex justify-center items-center gap-2 flex-col'>
        <a href={cv} className='text-white text-bold text-xl '>
          CV
          <div
            className='w-[35px] h-[64px] rounded-3xl border-4 bor4der-secondary flex jsutify-center items-start p-2'
          >
            <motion.div
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration:1.5,
                repeat:Infinity,
                repeatType:'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
            

          </div>
        </a>
        {/* <a
          href={cv}
          download="kundan.pdf"
          className="text-white bg-secondary hover:bg-secondary-dark py-2 px-4 rounded-md"
        >
          Download CV
        </a> */}

      </div>
    </section>
    
  )
}

export default Hero