import React , { useState }from 'react'
import { Canvas, useFrame , useThree } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'
import { useRef , useContext } from 'react'
import { ThemeContext } from '../store/ThemeProvider'
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
  const [earthScale, setEarthScale] = useState(0.027);
  const [moonScale, setMoonScale] = useState(0.09);
  const { theme } = useContext(ThemeContext);

  return (
    <Canvas >
        <OrbitControls enableZoom={false}  enablePan enableRotate/>
        <FollowCameraLight />
        {/* <ambientLight intensity={0.5} /> */}
        {theme === 'dark' ? <Moon scale={0.09}/> : <Earth scale={0.027}/>}
        

        {/* <directionalLight intensity={5} position={[1, 1, 1]} /> */}
    
      </Canvas>
  )
}

export default ContactModel