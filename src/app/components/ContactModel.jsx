import React, { Suspense } from 'react'
import { Canvas, useFrame , useThree } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'
import { useRef , useContext } from 'react'
import { ThemeContext } from '../store/ThemeProvider'
import CanvasLoader from './CanvasLoader'
import Moon from '../../../public/Moon'

import Earth from  '../../../public/Earth'
function FollowCameraLight() {

    const lightRef = useRef();
    const { camera } = useThree();
  
    useFrame(() => {
      lightRef.current.position.copy(camera.position);
    });
  
    return <directionalLight ref={lightRef} intensity={5} />;
  }

const ContactModel = () => {
  
  const { theme } = useContext(ThemeContext);

  return (
    <Canvas >
      <Suspense fallback={<CanvasLoader />}>
      <OrbitControls enableZoom={false}  enablePan enableRotate/>
        <FollowCameraLight />
        {/* <ambientLight intensity={0.5} /> */}
        {theme === 'dark' ? <Moon scale={0.09}/> : <Earth scale={0.027}/>}
        

        {/* <directionalLight intensity={5} position={[1, 1, 1]} /> */}
      </Suspense>
      </Canvas>
  )
}

export default ContactModel