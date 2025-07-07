import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useMemo } from "react";
import { MeshPhysicalMaterial, Mesh, Color, Scene } from "three";

import CanvasLoader from "../loader";

const Earth = () => {
  const earth = useGLTF("./planet/0_8.gltf");
  const { scene } = useThree();

  // OUTER: Transparent glass-like material
  const outerMaterial = new MeshPhysicalMaterial({
    transmission: 1, // makes it transparent like glass
    thickness: 2, // how thick the glass is (for refraction)
    roughness: 0.05,
    metalness: 0,
    clearcoat: 1,
    clearcoatRoughness: 0.02,
    ior: 2.4, // index of refraction
    reflectivity: 1,
    specularIntensity: 1,
    envMapIntensity: 2,
  });

  // INNER: Dark purple material
  const innerMaterial = new MeshPhysicalMaterial({
    color: "#4B0082",
    roughness: 0.1,
    metalness: 0.9,
    emissive: "#000000",
    emissiveIntensity: 0,
    transparent: false,
    opacity: 1.0,
    sheenColor: new Color(0x4B0082),
    sheenRoughness: 0.2,
    clearcoat: 0.8,
    clearcoatRoughness: 0.1,
    reflectivity: 1.0,
    specularIntensity: 1.0,
    envMapIntensity: 1.5,
    ior: 1.6,
  });

  const sceneClone = useMemo(() => {
    const clone = earth.scene.clone();
    clone.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh;
        if (
          mesh.name.toLowerCase().includes("outer") ||
          mesh.name.toLowerCase().includes("sphere") ||
          mesh.name === ""
        ) {
          mesh.material = outerMaterial;
        } else {
          mesh.material = innerMaterial;
        }
        mesh.material.needsUpdate = true;
      }
    });
    return clone;
  }, [earth.scene]);

  // MANUAL ENV MAP ASSIGNMENT when environment is ready
  useEffect(() => {
    const sceneWithEnv = scene as Scene & { environment?: any };
    if (sceneWithEnv.environment) {
      sceneClone.traverse((child) => {
        if ((child as Mesh).isMesh) {
          const mesh = child as Mesh;
          const material = mesh.material as MeshPhysicalMaterial;
          material.envMap = sceneWithEnv.environment;
          material.needsUpdate = true;
        }
      });
    }
  }, [scene.environment]);

  return (
    <primitive object={sceneClone} scale={1.5} position-y={-0.5} rotation-y={0} />
  );
};

// Earth Canvas
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* ✨ Add environment lighting for glass reflections */}
        {/* For optimisation we should not render the environment*/}
        {/* <Environment 
          files="/textures/HDR_galactic_plane_hazy_nebulae.hdr"
          background={false}
          key="galactic-hdr"
        /> */}

        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={0.8}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -5]} intensity={1.2} color="#0066ff" />
        <pointLight position={[5, -5, 10]} intensity={1.0} color="#ff6600" />
        <pointLight position={[0, 15, 0]} intensity={0.6} color="#ffffff" />

        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
