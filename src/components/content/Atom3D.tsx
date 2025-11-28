'use client';

import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, Sphere, Trail, Float, MeshDistortMaterial, GradientTexture, Sparkles, Line } from '@react-three/drei';
import { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';

// Elétron com rastro luminoso (trail)
function Electron({ 
  radius = 2, 
  speed = 1, 
  color = '#00bcd4',
  initialAngle = 0,
  tiltX = 0,
  tiltY = 0,
  tiltZ = 0
}: { 
  radius?: number; 
  speed?: number; 
  color?: string;
  initialAngle?: number;
  tiltX?: number;
  tiltY?: number;
  tiltZ?: number;
}) {
  const ref = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + initialAngle;
    if (ref.current) {
      // Órbita elíptica 3D
      const x = Math.cos(t) * radius;
      const y = Math.sin(t) * radius * 0.3;
      const z = Math.sin(t) * radius;
      
      // Aplicar rotações para inclinar a órbita
      const rotX = new THREE.Matrix4().makeRotationX(tiltX);
      const rotY = new THREE.Matrix4().makeRotationY(tiltY);
      const rotZ = new THREE.Matrix4().makeRotationZ(tiltZ);
      
      const pos = new THREE.Vector3(x, y, z);
      pos.applyMatrix4(rotX).applyMatrix4(rotY).applyMatrix4(rotZ);
      
      ref.current.position.copy(pos);
    }
  });

  return (
    <group ref={ref}>
      <Trail
        width={0.4}
        length={8}
        color={color}
        attenuation={(t) => t * t}
      >
        <mesh>
          <sphereGeometry args={[0.08, 32, 32]} />
          <meshStandardMaterial 
            color={color} 
            emissive={color}
            emissiveIntensity={2}
            toneMapped={false}
          />
        </mesh>
      </Trail>
      {/* Glow do elétron */}
      <mesh>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial 
          color={color}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

// Órbita com gradiente
function OrbitRing({ 
  radius = 2, 
  tiltX = 0,
  tiltY = 0,
  tiltZ = 0,
  color = '#ffffff' 
}: { 
  radius?: number; 
  tiltX?: number;
  tiltY?: number;
  tiltZ?: number;
  color?: string;
}) {
  const points = useMemo(() => {
    const pts = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius * 0.3;
      const z = Math.sin(angle) * radius;
      
      const rotX = new THREE.Matrix4().makeRotationX(tiltX);
      const rotY = new THREE.Matrix4().makeRotationY(tiltY);
      const rotZ = new THREE.Matrix4().makeRotationZ(tiltZ);
      
      const pos = new THREE.Vector3(x, y, z);
      pos.applyMatrix4(rotX).applyMatrix4(rotY).applyMatrix4(rotZ);
      
      pts.push(pos);
    }
    return pts;
  }, [radius, tiltX, tiltY, tiltZ]);

  return (
    <Line 
      points={points}
      color={color}
      lineWidth={1}
      transparent
      opacity={0.2}
    />
  );
}

// Próton realista com material brilhante
function Proton({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime() * 3) * 0.05);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.22, 32, 32]} />
      <MeshDistortMaterial
        color="#ff3333"
        emissive="#ff0000"
        emissiveIntensity={0.8}
        roughness={0.2}
        metalness={0.3}
        distort={0.1}
        speed={2}
      />
    </mesh>
  );
}

// Nêutron realista
function Neutron({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(1 + Math.cos(clock.getElapsedTime() * 2.5) * 0.05);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.22, 32, 32]} />
      <MeshDistortMaterial
        color="#4a90d9"
        emissive="#2563eb"
        emissiveIntensity={0.5}
        roughness={0.3}
        metalness={0.2}
        distort={0.1}
        speed={2}
      />
    </mesh>
  );
}

// Núcleo atômico realista
function Nucleus() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.15;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.15;
    }
  });

  // Posições do núcleo mais compactas e realistas
  const nucleonPositions = useMemo(() => {
    const positions: { type: 'proton' | 'neutron'; pos: [number, number, number] }[] = [];
    const spacing = 0.28;
    
    // Prótons (vermelho) - em posições alternadas
    positions.push({ type: 'proton', pos: [spacing, 0, 0] });
    positions.push({ type: 'proton', pos: [-spacing, 0, 0] });
    positions.push({ type: 'proton', pos: [0, spacing, 0] });
    positions.push({ type: 'proton', pos: [0, -spacing, 0] });
    positions.push({ type: 'proton', pos: [0, 0, spacing] });
    positions.push({ type: 'proton', pos: [0, 0, -spacing] });
    
    // Nêutrons (azul) - intercalados
    positions.push({ type: 'neutron', pos: [spacing * 0.7, spacing * 0.7, 0] });
    positions.push({ type: 'neutron', pos: [-spacing * 0.7, -spacing * 0.7, 0] });
    positions.push({ type: 'neutron', pos: [spacing * 0.7, 0, spacing * 0.7] });
    positions.push({ type: 'neutron', pos: [-spacing * 0.7, 0, -spacing * 0.7] });
    positions.push({ type: 'neutron', pos: [0, spacing * 0.7, spacing * 0.7] });
    positions.push({ type: 'neutron', pos: [0, -spacing * 0.7, -spacing * 0.7] });
    
    return positions;
  }, []);

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef}>
        {nucleonPositions.map((nucleon, i) => 
          nucleon.type === 'proton' 
            ? <Proton key={`p-${i}`} position={nucleon.pos} />
            : <Neutron key={`n-${i}`} position={nucleon.pos} />
        )}
        
        {/* Glow central do núcleo */}
        <mesh>
          <sphereGeometry args={[0.55, 32, 32]} />
          <meshBasicMaterial 
            color="#a855f7"
            transparent
            opacity={0.15}
          />
        </mesh>
        
        {/* Halo de energia */}
        <mesh>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshBasicMaterial 
            color="#c084fc"
            transparent
            opacity={0.08}
          />
        </mesh>
        
        {/* Partículas de energia no núcleo */}
        <Sparkles 
          count={30} 
          scale={1.2} 
          size={1.5} 
          speed={0.4}
          color="#fbbf24"
        />
      </group>
    </Float>
  );
}

// Campo de elétrons (nuvem probabilística)
function ElectronCloud() {
  return (
    <mesh>
      <sphereGeometry args={[3.5, 32, 32]} />
      <meshBasicMaterial 
        color="#06b6d4"
        transparent
        opacity={0.02}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

// Cena 3D do átomo
function AtomScene() {
  // Definir órbitas com diferentes inclinações para efeito 3D realista
  const orbits = useMemo(() => [
    // Camada K - 2 elétrons (órbita horizontal)
    { radius: 1.3, color: '#22d3ee', electrons: [0, Math.PI], tiltX: 0, tiltY: 0, tiltZ: 0, speed: 2.5 },
    // Camada L - 4 elétrons (órbita inclinada 45°)
    { radius: 2, color: '#f472b6', electrons: [0, Math.PI/2, Math.PI, 3*Math.PI/2], tiltX: Math.PI/4, tiltY: 0, tiltZ: Math.PI/6, speed: 1.8 },
    // Camada L - 2 elétrons (órbita perpendicular)
    { radius: 2, color: '#f472b6', electrons: [Math.PI/4, 5*Math.PI/4], tiltX: Math.PI/2, tiltY: Math.PI/3, tiltZ: 0, speed: 1.6 },
    // Camada M - 6 elétrons (órbita externa)
    { radius: 2.8, color: '#a78bfa', electrons: [0, Math.PI/3, 2*Math.PI/3, Math.PI, 4*Math.PI/3, 5*Math.PI/3], tiltX: -Math.PI/5, tiltY: Math.PI/4, tiltZ: Math.PI/8, speed: 1.2 },
  ], []);

  return (
    <>
      {/* Iluminação dramática */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-5, -5, 5]} intensity={0.8} color="#8b5cf6" />
      <pointLight position={[0, -10, 0]} intensity={0.4} color="#06b6d4" />
      
      {/* Controles de órbita */}
      <OrbitControls 
        enableZoom={true}
        enablePan={false}
        minDistance={4}
        maxDistance={12}
        autoRotate
        autoRotateSpeed={0.3}
      />
      
      {/* Nuvem de elétrons (probabilidade) */}
      <ElectronCloud />
      
      {/* Núcleo */}
      <Nucleus />
      
      {/* Órbitas e elétrons */}
      {orbits.map((orbit, orbitIndex) => (
        <group key={orbitIndex}>
          <OrbitRing 
            radius={orbit.radius} 
            tiltX={orbit.tiltX}
            tiltY={orbit.tiltY}
            tiltZ={orbit.tiltZ}
            color={orbit.color} 
          />
          {orbit.electrons.map((angle, electronIndex) => (
            <Electron 
              key={`${orbitIndex}-${electronIndex}`}
              radius={orbit.radius}
              speed={orbit.speed}
              color={orbit.color}
              initialAngle={angle}
              tiltX={orbit.tiltX}
              tiltY={orbit.tiltY}
              tiltZ={orbit.tiltZ}
            />
          ))}
        </group>
      ))}
      
      {/* Partículas de fundo */}
      <Sparkles 
        count={100}
        scale={10}
        size={0.6}
        speed={0.2}
        opacity={0.3}
        color="#ffffff"
      />
    </>
  );
}

export default function Atom3D() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
      {/* Background com gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950">
        {/* Nebulosa de fundo */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500 rounded-full blur-[80px]" />
        </div>
      </div>
      
      {/* Canvas 3D */}
      <Suspense fallback={
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <Canvas
          camera={{ position: [0, 2, 7], fov: 50 }}
          style={{ background: 'transparent' }}
          gl={{ antialias: true, alpha: true }}
        >
          <AtomScene />
        </Canvas>
      </Suspense>
      
      {/* Legenda modernizada */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex flex-wrap justify-center gap-3 text-xs">
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-400 to-red-600 shadow-lg shadow-red-500/50" />
            <span className="text-white/90">Prótons (+)</span>
          </div>
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg shadow-blue-500/50" />
            <span className="text-white/90">Nêutrons (0)</span>
          </div>
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 shadow-lg shadow-cyan-500/50" />
            <span className="text-white/90">Elétrons (-)</span>
          </div>
        </div>
      </div>
      
      {/* Instrução de interação */}
      <div className="absolute top-4 right-4 text-white/70 text-xs bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
        <span className="animate-pulse">🖱️</span>
        <span>Arraste para explorar</span>
      </div>
      
      {/* Nome do átomo */}
      <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg">
        <div className="text-white/60 text-[10px] uppercase tracking-wider">Modelo Atômico</div>
        <div className="text-white font-bold">Carbono-12</div>
        <div className="text-white/50 text-xs">6 prótons • 6 nêutrons • 6 elétrons</div>
      </div>
    </div>
  );
}
