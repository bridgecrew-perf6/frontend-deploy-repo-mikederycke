import React from 'react';
import { useFBX } from "@react-three/drei";


export default function Fbx(props){
    const fbx = useFBX('GLaDOS.fbx')
    return <primitive object={fbx} scale={0.05} />
}