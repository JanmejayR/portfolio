'use client'
import React from 'react'
import { DisplacementSphere } from '../components/3Dsphere/displacement-sphere.jsx'
import Intro from '../components/Intro/Intro.jsx'
import ThemeSwitch from '../components/ThemeSwitch.jsx'
const HomePage = () => {
  return (
    <main className='relative bg-[var(--background)]'>   
        <div
          className= "  relative transition-opacity duration-400 ease-in-out h-[100vh] lg:h-[130vh] overflow-clip"
          tabIndex={-1}
        >
          <ThemeSwitch/>
          <DisplacementSphere/>

          <div className='flex w-full h-full justify-center items-center lg:block'>
          <Intro/>

          </div>
        </div>
        
    </main>
  )
}

export default HomePage