import * as THREE from 'three';
import React, {useRef} from 'react';
import { extend, useFrame } from '@react-three/fiber';
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader.js'
import Gentilis from 'three/examples/fonts/gentilis_bold.typeface.json'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'

extend({ TextGeometry })

export default function Text({users}) {
    const font = new FontLoader().parse(Gentilis);
    const textOptions = {
        font,
        size: 4,
        height: 1,
        curveSegments: 100,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.2,
        bevelOffset: 0,
        bevelSegments: 5
    }

    const mesh = useRef();
    const clock1 = new THREE.Clock();

    useFrame(() => {
        let elapsedTime = clock1.getElapsedTime();

        mesh.current.rotation.y = Math.sin(elapsedTime / 10)
        mesh.current.rotation.z = Math.cos(elapsedTime / 10)

    });
    return (
      <mesh ref={mesh}>
         <textGeometry attach='geometry' args={[`${users.length}`, textOptions]} />
         <meshNormalMaterial attach='material'  />
       </mesh>
    )
    
}