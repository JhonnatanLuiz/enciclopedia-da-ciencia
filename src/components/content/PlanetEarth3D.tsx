'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Line, Sphere, useTexture } from '@react-three/drei';
import { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';

// Terra com textura
function Earth() {
  const earthRef = useRef<THREE.Group>(null);
  const earthTexture = useTexture('/textures/earth.jpg');

  useFrame(({ clock }) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={earthRef}>
      <Sphere args={[1.5, 64, 64]}>
        <meshStandardMaterial
          map={earthTexture}
          roughness={0.8}
          metalness={0.1}
        />
      </Sphere>
      
      {/* Atmosfera */}
      <Sphere args={[1.55, 64, 64]}>
        <meshBasicMaterial
          color="#87ceeb"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
}

// Lua com textura
function Moon() {
  const moonGroupRef = useRef<THREE.Group>(null);
  const moonRef = useRef<THREE.Mesh>(null);
  const moonTexture = useTexture('/textures/moon.jpg');

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (moonGroupRef.current) {
      moonGroupRef.current.position.x = Math.cos(t * 0.25) * 4;
      moonGroupRef.current.position.z = Math.sin(t * 0.25) * 4;
      moonGroupRef.current.position.y = Math.sin(t * 0.25) * 0.3;
    }
    if (moonRef.current) {
      moonRef.current.rotation.y = t * 0.1;
    }
  });

  return (
    <group ref={moonGroupRef}>
      <mesh ref={moonRef}>
        <sphereGeometry args={[0.4, 48, 48]} />
        <meshStandardMaterial
          map={moonTexture}
          roughness={0.9}
          metalness={0}
        />
      </mesh>
    </group>
  );
}

// Versões simples (sem textura) como fallback
function SimpleEarth() {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="#3b82f6" />
    </mesh>
  );
}

function SimpleMoon() {
  const ref = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.position.x = Math.cos(t * 0.25) * 4;
      ref.current.position.z = Math.sin(t * 0.25) * 4;
      ref.current.position.y = Math.sin(t * 0.25) * 0.3;
    }
  });

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#9ca3af" />
      </mesh>
    </group>
  );
}

// Linha da órbita lunar usando Line do drei
function MoonOrbit() {
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      pts.push(new THREE.Vector3(
        Math.cos(angle) * 4,
        Math.sin(angle) * 0.5,
        Math.sin(angle) * 4
      ));
    }
    return pts;
  }, []);

  return (
    <Line
      points={points}
      color="#6b7280"
      lineWidth={1}
      opacity={0.3}
      transparent
    />
  );
}

// Sol (fonte de luz distante)
function Sun() {
  return (
    <mesh position={[15, 8, -10]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshBasicMaterial color="#fbbf24" />
    </mesh>
  );
}

// Cena completa
function EarthScene() {
  return (
    <>
      {/* Iluminação */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 5, 5]} intensity={1.5} color="#ffffff" />
      
      {/* Estrelas de fundo */}
      <Stars 
        radius={100} 
        depth={50} 
        count={1500} 
        factor={4} 
        saturation={0} 
        fade 
        speed={0.3}
      />
      
      {/* Controles */}
      <OrbitControls 
        enableZoom={true}
        enablePan={false}
        minDistance={4}
        maxDistance={12}
        autoRotate
        autoRotateSpeed={0.2}
      />
      
      {/* Órbita lunar */}
      <MoonOrbit />
      
      {/* Terra */}
      <Suspense fallback={<SimpleEarth />}>
        <Earth />
      </Suspense>
      
      {/* Lua */}
      <Suspense fallback={<SimpleMoon />}>
        <Moon />
      </Suspense>
      
      {/* Sol */}
      <Sun />
    </>
  );
}

export default function PlanetEarth3D() {
  return (
    <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden bg-gradient-to-b from-gray-950 via-indigo-950 to-blue-950">
      {/* Canvas 3D */}
      <Canvas
        camera={{ position: [0, 2, 8], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <EarthScene />
      </Canvas>
      
      {/* Legenda */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-center gap-4 text-xs text-white/80">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span>Terra</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-gray-400" />
          <span>Lua</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <span>Sol</span>
        </div>
      </div>
      
      {/* Instrução de interação */}
      <div className="absolute top-4 right-4 text-white/60 text-xs bg-black/30 px-3 py-1.5 rounded-full">
        🖱️ Arraste para girar
      </div>
      
      {/* Título decorativo */}
      <div className="absolute top-4 left-4 text-white/80 text-sm font-medium bg-black/30 px-3 py-1.5 rounded-full">
        🌍 Sistema Terra-Lua
      </div>
    </div>
  );
}
