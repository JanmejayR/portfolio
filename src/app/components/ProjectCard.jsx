import React from 'react'
import Image from 'next/image'
import LiveLinkButton from './LiveLinkButton'
import { Lens } from './Lens'
import { motion } from 'framer-motion'
const ProjectCard = ({imageSrc, imageAlt, width, height, title , description , githubLink='' , liveLink='' }) => {

  const githubSvg = (
    <a
      target="_blank"
      href={githubLink}
      className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 text-[var(--textBody)] rounded-full hover:text-[var(--iconHover)] hover:scale-110 transition duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="80"
        height="80"
        viewBox="0 0 256 256"
      >
        <g
          className="fill-current"
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray=""
          strokeDashoffset="0"
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
          style={{ mixBlendMode: 'normal' }}
        >
          <g transform="scale(8.53333, 8.53333)">
            <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path>
          </g>
        </g>
      </svg>
    </a>
  );
  
  return (

    <motion.div
          className=" w-96  md:w-[50rem]  xl:w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
    <main className='  flex flex-col xl:flex-row p-4 md:p-10 my-10 mx-4 md:mx-20  md:gap-20  border-[3px] border-transparent hover:border-[var(--textBody)]  hover:bg-gray-500 rounded-2xl hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-md hover:bg-opacity-10 hover:-translate-y-2 transition-all duration-300 ease-in-out  '>
        
       
     
        <div className='w-full flex justify-center'>
        <Lens>
        <Image
        className=' w-[20rem] h-[10rem] sm:w-[25rem] sm:h-[12.5rem] md:w-[30rem] md:h-[15rem]  xl:w-[40rem] xl:h-[20rem] rounded-2xl cursor-crosshair '
        src={imageSrc}
        alt={imageAlt}
        width={+width}
        height={+height}
        />
        </Lens>
        </div>
      
        {/* <Link /> */}
        
       <div>
       <h1 className=' text-2xl  sm:text-4xl lg:text-5xl pt-4  text-[var(--AboutText)] '>{title}</h1>
       <h2 className='pt-4 text-sm sm:text-xl lg:text-2xl text-[var(--textBody)] md:w-[32rem] '>{description}</h2>

       <div className='flex items-center  gap-10 mt-2 sm:mt-8'>
       {githubLink === '' ? null : githubSvg}
       {liveLink === '' ? null : <LiveLinkButton link={liveLink} />}
       </div>
       
       </div>
        

    </main>
    </motion.div>
  )
}

export default ProjectCard