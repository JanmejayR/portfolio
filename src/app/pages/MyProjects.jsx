import React , { useContext } from 'react'
import ProjectCard from '../components/ProjectCard'
import projects from '../utils/projects.js'
import { LampContainer } from '../components/Lamp'
import { motion } from 'framer-motion'
import { ThemeContext } from '../store/ThemeProvider'
import { Element } from 'react-scroll'

const MyProjects = ({windowSize}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Element id="PROJECTS" name='PROJECTS' className='w-full  bg-[var(--background)]  '>

    {windowSize.width >=768 ? <LampContainer key={theme} >
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="  mt-96  bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-[var(--MyProjects)] md:text-7xl">
        My Projects
      </motion.h1>
    </LampContainer> : null}

    {windowSize.width <768 ? <motion.h1
        initial={{ opacity: 0, y: 100 }}
        viewport={{ once: true, amount: 0.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="  pt-32  bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-[var(--MyProjects)] md:text-7xl">
        My Projects
      </motion.h1> : null}

    
        <section className='flex flex-col items-center w-full  px-24'>
          {projects.map(project=>{
            return <ProjectCard key={project.id} imageSrc={project.projectImage.imageSrc} imageAlt={project.projectImage.imageAlt} width={project.projectImage.imageWidth} height={project.projectImage.imageHeight} title={project.title} description={project.description} githubLink={project.github} liveLink={project.live} />
          })}          
        </section>

    </Element>
  )
}

export default MyProjects