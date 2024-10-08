'use client'
import React , { useState , useEffect , useContext} from 'react'
import config from './config.json'
import { useInterval } from '../../hooks/useInterval.js'
import { DecoderText } from './decoder-text/DecoderText'
import { ThemeContext } from '../../store/ThemeProvider'
import { Transition } from '../3Dsphere/transition'
import { cssProps } from '../../utils/style'
const Intro = () => {
  const {theme} = useContext(ThemeContext);


  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const [rolesIndex, setRolesIndex] = useState(0);
  const [tickCount, setTickCount] = useState(0);

  // const currentDiscipline = ;
  // const currentRole = ;

  useInterval(
    () => {
      setTickCount((prevTick) => prevTick + 1);

      const newDisciplineIndex = (disciplineIndex + 1) % config.disciplines.length;
      setDisciplineIndex(newDisciplineIndex);

      if ((tickCount + 1) % 2 === 0) {
        const newRolesIndex = (rolesIndex + 1) % config.roles.length;
        setRolesIndex(newRolesIndex);
      }
    },
    5000,
    theme
  );

  useEffect(() => { 
      setDisciplineIndex(0);
      setRolesIndex(0);
      setTickCount(0);
  }, [theme]);

  return (
    <section className='absolute left-2 lg:top-[14rem] h-[20rem] lg:left-[26rem] '>
        <h2 className=' Intro-name sm:block text-sm sm:text-2xl lg:text-[27px] font-gotham    mb-4 lg:mb-4 '>
            <DecoderText text={config.name} delay={500} key={theme} />
        </h2>

        <div className='flex items-center pl-8 sm:pl-16'>
        <div className="Intro-row text-[48px]  sm:text-[80px] lg:text-[100px] font-gotham font-medium">
                  {config.roles.map(item => (
                    <Transition
                      unmount
                      in={item === config.roles[rolesIndex]}
                      timeout={{ enter: 3000, exit: 2000 }}
                      key={`${item}-${theme}`}
                    >
                      {({ status, nodeRef }) => (
                        <span
                          aria-hidden
                          ref={nodeRef}
                          className="Intro-word"
                          data-plus={false}
                          data-hidden={true}
                          data-status={status}
                          style={cssProps({ delay: "600ms" })}
                        >
                          {item}
                        </span>
                      )}
                    </Transition>
                  ))}
                </div>
          <div key={theme} className=" hidden lg:block lg:bg-[var(--textLight)]  lg:absolute  lg:h-[2px] lg:animate-grow lg:ml-[31rem] "></div>

        </div>
        <div className=" pl-8 sm:pl-16 Intro-row text-[48px]  sm:text-[80px] lg:text-[100px] font-gotham font-medium">
                  {config.disciplines.map(item => (
                    <Transition
                      unmount
                      in={item === config.disciplines[disciplineIndex]}
                      timeout={{ enter: 3000, exit: 2000 }}
                      key={`${item}-${theme}`}
                    >
                      {({ status, nodeRef }) => (
                        
                        <span
                          aria-hidden
                          ref={nodeRef}
                          className="Intro-word"
                          data-plus={true}
                          data-hidden={true}
                          data-status={status}
                          style={cssProps({ delay: "600ms" })}
                        >
                          {item}
                        </span>
                      )}
                    </Transition>
                  ))}
                </div>    
    </section>
  )
}

export default Intro

