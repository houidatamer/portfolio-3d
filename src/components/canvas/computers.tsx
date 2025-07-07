import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

import CanvasLoader from "../loader";

type ComputersProps = {
  isMobile: boolean;
};

// Computers
const Computers = ({ isMobile }: ComputersProps) => {
  // Import scene
  const computer = useGLTF("./PC_donut/Untitled.glb");

  return (
    // Mesh
    <mesh>
      {/* Ambient and Soft Lighting */}
      <ambientLight intensity={0.6} />
      <hemisphereLight intensity={0.4} groundColor="black" skyColor="#ffffff" />
      
      {/* Soft fill lights to illuminate the whole object */}
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, 10, -10]} intensity={0.6} color="#ffffff" />
      <pointLight position={[0, 15, 0]} intensity={0.4} color="#ffffff" />
      
      {/* Reduced spotlight for subtle highlights */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={0.8}
        castShadow
        shadow-mapSize={1024}
      />
      
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Computer Canvas
const ComputersCanvas = () => {
  // state to check mobile
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is Mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    // handle screen size change
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event?.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
    >
      {/* Canvas Loader show on fallback */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Show Model */}
        <Computers isMobile={isMobile} />
      </Suspense>

      {/* Preload all */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
