'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Sphere, useTexture, Line } from '@react-three/drei';
import { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';

// Constante para a inclinação axial da Terra (23.5° em radianos)
const AXIAL_TILT = 0.41; // ~23.5°

// Terra com textura e rotação
function RotatingEarth() {
  const earthRef = useRef<THREE.Group>(null);
  const earthTexture = useTexture('/textures/earth.jpg');

  useFrame(() => {
    if (earthRef.current) {
      // Rotação contínua no eixo Y (oeste para leste)
      earthRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group rotation={[AXIAL_TILT, 0, 0]}>
      <group ref={earthRef}>
        {/* Terra */}
        <Sphere args={[2, 64, 64]}>
          <meshStandardMaterial
            map={earthTexture}
            roughness={0.7}
            metalness={0.1}
          />
        </Sphere>
        
        {/* Atmosfera (glow sutil) */}
        <Sphere args={[2.05, 64, 64]}>
          <meshBasicMaterial
            color="#87ceeb"
            transparent
            opacity={0.08}
            side={THREE.BackSide}
          />
        </Sphere>
      </group>
      
      {/* Eixo de Rotação (linha visual) */}
      <AxisLine />
    </group>
  );
}

// Linha do eixo de rotação
function AxisLine() {
  const points = useMemo(() => [
    new THREE.Vector3(0, -3.5, 0),
    new THREE.Vector3(0, 3.5, 0),
  ], []);

  return (
    <Line
      points={points}
      color="#f59e0b"
      lineWidth={2}
      opacity={0.8}
      transparent
      dashed
      dashSize={0.2}
      gapSize={0.1}
    />
  );
}

// Marcador do Polo Norte
function NorthPoleMarker() {
  return (
    <group position={[0, 2.8, 0]} rotation={[AXIAL_TILT, 0, 0]}>
      <mesh>
        <coneGeometry args={[0.15, 0.4, 8]} />
        <meshBasicMaterial color="#f59e0b" />
      </mesh>
    </group>
  );
}

// Linha do Equador
function EquatorLine() {
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      pts.push(new THREE.Vector3(
        Math.cos(angle) * 2.02,
        0,
        Math.sin(angle) * 2.02
      ));
    }
    return pts;
  }, []);

  return (
    <group rotation={[AXIAL_TILT, 0, 0]}>
      <Line
        points={points}
        color="#ef4444"
        lineWidth={2}
        opacity={0.6}
        transparent
      />
    </group>
  );
}

// Versão simples (fallback sem textura)
function SimpleRotatingEarth() {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.003;
    }
  });

  return (
    <group rotation={[AXIAL_TILT, 0, 0]}>
      <mesh ref={ref}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
    </group>
  );
}

// Sol (fonte de luz)
function Sun() {
  return (
    <mesh position={[20, 10, -15]}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshBasicMaterial color="#fbbf24" />
    </mesh>
  );
}

// Cena completa
function RotationScene() {
  return (
    <>
      {/* Iluminação */}
      <ambientLight intensity={0.3} />
      <directionalLight 
        position={[10, 5, 5]} 
        intensity={1.8} 
        color="#ffffff"
        castShadow
      />
      <pointLight position={[20, 10, -15]} intensity={0.5} color="#fbbf24" />
      
      {/* Estrelas de fundo */}
      <Stars 
        radius={100} 
        depth={50} 
        count={2000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={0.2}
      />
      
      {/* Controles */}
      <OrbitControls 
        enableZoom={true}
        enablePan={false}
        minDistance={5}
        maxDistance={15}
        autoRotate={false}
      />
      
      {/* Linha do Equador */}
      <EquatorLine />
      
      {/* Terra com rotação */}
      <Suspense fallback={<SimpleRotatingEarth />}>
        <RotatingEarth />
      </Suspense>
      
      {/* Marcador do Polo Norte */}
      <NorthPoleMarker />
      
      {/* Sol */}
      <Sun />
    </>
  );
}

export default function PlanetEarthRotation3D() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-b from-gray-950 via-indigo-950 to-blue-950 border border-slate-700/50">
      {/* Canvas 3D */}
      <Canvas
        camera={{ position: [0, 3, 10], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <RotationScene />
      </Canvas>
      
      {/* Legenda */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-center gap-4 text-xs text-white/80">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span>Terra</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <span>Eixo de Rotação (23,5°)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <span>Linha do Equador</span>
        </div>
      </div>
      
      {/* Instrução de interação */}
      <div className="absolute top-4 right-4 text-white/60 text-xs bg-black/30 px-3 py-1.5 rounded-full">
        🖱️ Arraste para girar a câmera
      </div>
      
      {/* Título decorativo */}
      <div className="absolute top-4 left-4 text-white/80 text-sm font-medium bg-black/30 px-3 py-1.5 rounded-full">
        🌍 Rotação da Terra - Eixo Inclinado 23,5°
      </div>
      
      {/* Indicador de velocidade */}
      <div className="absolute bottom-4 left-4 text-white/60 text-xs bg-black/30 px-3 py-1.5 rounded-full hidden md:block">
        ⚡ Velocidade no Equador: 1.670 km/h
      </div>
    </div>
  );
}
