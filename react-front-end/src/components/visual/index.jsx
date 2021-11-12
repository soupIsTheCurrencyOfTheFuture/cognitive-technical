import React from 'react';
import { Canvas } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'

import Text from './text'

export default function Visual({users}) {
    return (
        <Canvas camera={{position: [5,5,5]}}>
            <ambientLight />
            <Text users={users} />
            <OrbitControls />
        </Canvas>
    )
}