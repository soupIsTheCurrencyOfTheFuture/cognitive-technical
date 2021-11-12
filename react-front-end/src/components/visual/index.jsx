import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'

import Text from './text'
import Orbits from './orbits';

export default function Visual({users, orbits}) {

    return (
        <Canvas camera={{position: [5,5,5]}}>
            <ambientLight />
            <Text users={users} />
            {orbits}
            <OrbitControls />
        </Canvas>
    )
}