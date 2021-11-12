import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'

export default function Orbits({users}) {

    const mesh = useRef()
    const randomPoint = Math.floor(Math.random() * (5 - 3 + 1) + 3)
 
    const clock1 = new THREE.Clock();

    useFrame(() => {
        const elapsedTime = clock1.getElapsedTime()

        mesh.current.position.x = Math.cos(randomPoint * Math.PI * elapsedTime / 8) * Math.cos(randomPoint * Math.PI /8) * randomPoint;
        mesh.current.position.y = Math.cos(randomPoint * Math.PI * elapsedTime / 8) * Math.sin(randomPoint * Math.PI /8) * randomPoint;
        mesh.current.position.z = Math.sin(randomPoint * Math.PI * elapsedTime / 8) * randomPoint;
    })

    return (
        <mesh ref={mesh}>
            <sphereBufferGeometry args={[0.3, 32, 32]}/>
            <meshNormalMaterial />
        </mesh>
    )
}