import React, {Suspense} from 'react';
import MainScene from './Scenes/MainScene.component';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useFBX } from '@react-three/drei';
import Model from './Assets/MetaMike'; /* highlight-line */
import './Styles/main.css';
import Fbx from './Components/Fbx.component';

export default class App extends React.Component{
  render(){

    
    return(
      //Regular Main scene
    // <> <MainScene loading={true}/> </> 

    //Test Metaverse Character
    
      <Canvas
         camera={{ position: [2, 0, 12.25], fov: 15 }}
         style={{
            backgroundColor: '#111a21',
            width: '100vw',
            height: '100vh',
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         
         <Suspense fallback={null}>
            // your model here
            <Model position={[0.025, -0.9, 0]} />
            {/* <Fbx /> */}
         </Suspense>
         <OrbitControls />
      </Canvas>
   
    
    )
  }
}