import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { TextureLoader } from 'three';
import { useLoader , useFrame } from '@react-three/fiber';
export default function Earth(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF('/earth.gltf')

  const texture = useLoader(TextureLoader, '/Earth_Material.jpg');

  // // Apply the texture manually
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
        rotation={[ (-4.6*Math.PI) / 12, 0, (12.8*Math.PI)/12]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/earth.gltf')