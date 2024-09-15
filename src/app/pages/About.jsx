import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { DecoderText } from '../components/Intro/decoder-text/DecoderText'
import { useState , useContext } from 'react'
import Image from 'next/image'
import { ThemeContext } from '../store/ThemeProvider'
import { Transition } from '../components/3Dsphere/transition'
import { cssProps } from '../utils/style'
import { Element } from 'react-scroll'
const About = () => {

    const [start , setStart] = useState(false);
    const [divIsVisible , setDivIsVisible] = useState(false);
    const [profilePicVisible , setProfilePicVisible] = useState(false);
    const {theme} = useContext(ThemeContext);
    const profilePicSrc =  theme === 'dark' ? "/profilePic2.png" : "/profilePic3.png";


  
  return (
    <Element id="ABOUT" name='ABOUT' className='w-full h-full md:h-screen bg-[var(--background)] md:pl-16 lg:pl-48'>

 
      <motion.h1
        className=' text-5xl text-center pt-8 md:pt-0 md:text-6xl  text-[var(--AboutText)] mb-4 md:mb-12 md:text-left'
        initial={{ opacity: 0 }} // Initial state (hidden)
        whileInView={{ opacity: 1 }} // Animate to visible when in view
        transition={{ duration: 1 }} // Transition for the animation
        onViewportEnter={() => setStart(true)} // Set `start` to true when in view
      >
      
        <DecoderText text="About Me" delay={500} start={start} />
      </motion.h1>

      

      <div className='flex flex-col items-center md:flex-row md:justify-between '>
        
        <motion.div
          className=" order-2 md:order-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        <p className=' md:text-[25px] md:w-[24rem]   lg:text-[27px] xl:text-3xl mb-2 leading-normal text-[var(--textBody)] lg:w-[28rem] xl:w-[34rem] '> Hey! This is Janmejay,</p>
        <p className='text-[15px] w-80   md:text-[20px] md:w-[24rem]  lg:text-[22px] xl:text-2xl leading-normal text-[var(--textBody)] lg:w-[28rem] '> A Full Stack Developer that loves to explore all sorts of Tech and Frameworks hanging around the internet.  I aspire to build enterprise level softwares that satisfy the need of current software industrial standards. My current projects revolve around the MERN stack with a pinch of Nextjs. I am exploring more frameworks and trying to learn how to write and bring together best pieces of code to build something meaningful or perhaps silly,<br/> just for fun. </p>
        </motion.div>


        <motion.div
        className=' md:mr-8  lg:mr-16   xl:mr-48 '
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1 }} 
        onViewportEnter={() => setProfilePicVisible(true)} 
      >
                   {profilePicVisible ? (<Transition
                      unmount
                      in={true}
                      timeout={{ enter: 3000, exit: 2000 }}
                      key={1}
                    >
                      {({ status, nodeRef }) => (
                        <span
                          aria-hidden
                          ref={nodeRef}
                          className="Intro-word "
                          data-plus={false}
                          data-status={status}
                          style={cssProps({ delay: "600ms" })}
                        >
                           <Image
        className='order-first md:order-none w-[200px] h-[250px] sm:w-[250px] sm:h-[312.5px] md:w-[300px] md:h-[375px] lg:w-[400px] lg:h-[500px] rounded-xl my-8 md:my-0'
          src= {profilePicSrc}
          alt='profile pic'
          width={1165}
          height={1458}
          />
                        </span>
                      )}
                    </Transition>): null}
                    </motion.div>

                  </div>

        <motion.div 
          className=' mt-4 lg:mt-8 text-center md:text-left '
          initial= {{opacity:0}}
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 1 }} 
          onViewportEnter={() => setDivIsVisible(true)}
          >
            
            <p className=' pr-24 md:pr-0  md:text-[20px] lg:text-[22px] xl:text-2xl text-[var(--AboutText)]'>
                <DecoderText text="The Art of crafting a problem" delay={50} start={divIsVisible} />
            </p>
            
            <div className='pl-4  md:pl-0 flex items-center    justify-start  '>
            
            <div className='hidden lg:block pt-3'>
            <motion.p
            className="h-[2px]   bg-[var(--AboutText)]"
            initial={{ width: 0 }} // Start with width 0
            viewport={{ once: true, amount: 0.5 }}
            whileInView={{ width: "128px" }} // Animate to full width when in view
            transition={{ duration: 0.5 }} // Adjust the duration as needed
          />
           {/* <p className='h-[2px] animate-quoteLineGrow max-w-[128px] bg-[var(--accent)]'></p> */}
           </div>
            
         
           <p  className=' md:text-[20px] lg:text-[22px] xl:text-2xl inline text-[var(--AboutText)] sm:mt-2 pl-2'>
                <DecoderText text="is as potent as finding its solution " delay={50} start={divIsVisible} />    
            </p>        
           
           <div className=' sm:pt-3'>
           <p className='h-[2px] w-[30px] bg-[var(--textBody)]'></p>
           </div>
            <p className='sm:pt-2  pl-2 text-lg sm:text-2xl text-[var(--textBody)]'>IDK</p>

            </div>
           
            
        </motion.div>
        
        
    </Element>
  )
}

export default About