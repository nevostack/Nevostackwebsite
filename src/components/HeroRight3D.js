import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, PresentationControls } from '@react-three/drei';
import { motion } from 'framer-motion';

// Fallback laptop component when no 3D model is available
const FallbackLaptop = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  return (
    <group>
      {/* Base of laptop */}
      <mesh ref={meshRef} position={[0, -0.1, 0]} castShadow>
        <boxGeometry args={[2, 0.1, 1.4]} />
        <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Screen of laptop */}
      <group position={[0, 0.6, -0.6]} rotation={[Math.PI / 6, 0, 0]}>
        <mesh castShadow>
          <boxGeometry args={[2, 1.2, 0.05]} />
          <meshStandardMaterial color="#222" metalness={0.5} roughness={0.2} />
        </mesh>
        
        {/* Screen content */}
        <mesh position={[0, 0, 0.03]}>
          <planeGeometry args={[1.9, 1.1]} />
          <meshBasicMaterial color="#0a84ff" />
        </mesh>
      </group>
    </group>
  );
};

// Load the GLTF model
const Model = ({ url }) => {
  const { scene } = useGLTF(url);
  
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [scene]);

  return <primitive object={scene} scale={1.5} />;
};

// Main laptop model component
const LaptopModel = () => {
  // Try to load a realistic laptop model
  const laptopUrl = 'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/macbook/model.gltf';
  
  return (
    <PresentationControls
      global
      rotation={[0.13, 0.1, 0]}
      polar={[-0.4, 0.2]}
      azimuth={[-0.5, 0.5]}
      config={{ mass: 2, tension: 400 }}
      snap={{ mass: 4, tension: 400 }}
    >
      <group position={[0, -1, 0]} scale={1}>
        <Suspense fallback={<FallbackLaptop />}>
          <Model url={laptopUrl} />
        </Suspense>
      </group>
    </PresentationControls>
  );
};

// Main component
const HeroRight3D = () => {
  return (
    <motion.div 
      className="w-full h-[500px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={null}>
          <LaptopModel />
          <Environment preset="city" />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </motion.div>
  );
};

export default HeroRight3D; 