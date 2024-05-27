import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';

import Islands from '../models/Islands';
import Sky from '../models/Sky';
import Bird from '../models/Bird'
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';
import Loading1 from '../components/Loading1';

const Home = () => {

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const adjustIslandForScreenSize = () => {
    let screenScale;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0]

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    }
    else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;


    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0]
    }
    else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4]
    }
    return [screenScale, screenPosition]
  }

  const [IslandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [])
  
 
  return (
    <div>
      { isLoading ? (
        <Loading1/>
      ) : (
    <section className='w-full h-screen relative'>

      <div className='absolute top-20 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={1.7} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000"
            intensity={1} />

          <Bird />
          <Sky isRotating={isRotating} />
          <Islands
            position={islandPosition}
            scale={IslandScale}
            rotation={islandRotation}
            setCurrentStage={setCurrentStage}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
          <Plane
            scale={planeScale}
            isRotating={isRotating}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
      )}
    </div>
  )
}

export default Home