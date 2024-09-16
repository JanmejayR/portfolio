import React, { useRef } from 'react'
import { useGLTF  } from '@react-three/drei'
import { useLoader , useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
export default function Moon(props) {
  const groupRef = useRef()
  const { nodes, materials } = useGLTF('/moon.gltf')

  const texture = useLoader(TextureLoader, '/Material.002_diffuse.jpeg');

// Apply the texture manually
materials['Material.002'].map = texture;
materials['Material.002'].needsUpdate = true;


useFrame(()=>{
  if(groupRef.current){
    groupRef.current.rotation.y -= 0.0025;
  }
})
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_Material002_0.geometry}
        material={materials['Material.002']}
        rotation={[-Math.PI / 2, 0, (4*Math.PI)/3]}
        scale={30}
      />
    </group>
  )
}

useGLTF.preload('/moon.gltf')