"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Html, Ring } from "@react-three/drei";
import { useRef, useState, Suspense, useMemo } from "react";
import * as THREE from "three";

// Dados dos planetas do Sistema Solar
const planetsData = [
  {
    name: "Mercúrio",
    distance: 4,
    size: 0.15,
    speed: 1.6,
    color: "#8c8c8c",
    info: {
      diameter: "4.879 km",
      distanceFromSun: "57,9 milhões km",
      orbitalPeriod: "88 dias",
      moons: 0,
    },
  },
  {
    name: "Vênus",
    distance: 5.5,
    size: 0.35,
    speed: 1.2,
    color: "#e6c87a",
    info: {
      diameter: "12.104 km",
      distanceFromSun: "108,2 milhões km",
      orbitalPeriod: "225 dias",
      moons: 0,
    },
  },
  {
    name: "Terra",
    distance: 7,
    size: 0.38,
    speed: 1.0,
    color: "#6b93d6",
    info: {
      diameter: "12.742 km",
      distanceFromSun: "149,6 milhões km",
      orbitalPeriod: "365 dias",
      moons: 1,
    },
  },
  {
    name: "Marte",
    distance: 8.5,
    size: 0.2,
    speed: 0.8,
    color: "#c1440e",
    info: {
      diameter: "6.779 km",
      distanceFromSun: "227,9 milhões km",
      orbitalPeriod: "687 dias",
      moons: 2,
    },
  },
  {
    name: "Júpiter",
    distance: 12,
    size: 1.0,
    speed: 0.4,
    color: "#d8ca9d",
    info: {
      diameter: "139.820 km",
      distanceFromSun: "778,5 milhões km",
      orbitalPeriod: "12 anos",
      moons: 95,
    },
  },
  {
    name: "Saturno",
    distance: 16,
    size: 0.85,
    speed: 0.3,
    color: "#f4d59e",
    hasRings: true,
    info: {
      diameter: "116.460 km",
      distanceFromSun: "1,4 bilhões km",
      orbitalPeriod: "29 anos",
      moons: 146,
    },
  },
  {
    name: "Urano",
    distance: 20,
    size: 0.5,
    speed: 0.2,
    color: "#d1e7e7",
    info: {
      diameter: "50.724 km",
      distanceFromSun: "2,9 bilhões km",
      orbitalPeriod: "84 anos",
      moons: 28,
    },
  },
  {
    name: "Netuno",
    distance: 24,
    size: 0.48,
    speed: 0.15,
    color: "#5b5ddf",
    info: {
      diameter: "49.244 km",
      distanceFromSun: "4,5 bilhões km",
      orbitalPeriod: "165 anos",
      moons: 16,
    },
  },
];

interface PlanetInfo {
  diameter: string;
  distanceFromSun: string;
  orbitalPeriod: string;
  moons: number;
}

interface PlanetProps {
  name: string;
  distance: number;
  size: number;
  speed: number;
  color: string;
  hasRings?: boolean;
  info: PlanetInfo;
}

function Planet({ name, distance, size, speed, color, hasRings, info }: PlanetProps) {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed * 0.2;
    if (ref.current) {
      ref.current.position.x = Math.sin(t) * distance;
      ref.current.position.z = Math.cos(t) * distance;
    }
  });

  return (
    <group ref={ref}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>

      {/* Anéis de Saturno */}
      {hasRings && (
        <Ring args={[size * 1.4, size * 2.2, 64]} rotation={[Math.PI / 2.5, 0, 0]}>
          <meshStandardMaterial
            color="#c9b896"
            side={THREE.DoubleSide}
            transparent
            opacity={0.7}
          />
        </Ring>
      )}

      {/* Tooltip com informações */}
      {hovered && (
        <Html distanceFactor={15}>
          <div className="bg-slate-900/95 border border-cyan-500/30 rounded-lg p-3 min-w-[180px] text-white shadow-xl backdrop-blur-sm">
            <h3 className="font-bold text-cyan-400 text-sm mb-2">{name}</h3>
            <div className="text-xs space-y-1 text-gray-300">
              <p><span className="text-gray-400">Diâmetro:</span> {info.diameter}</p>
              <p><span className="text-gray-400">Distância do Sol:</span> {info.distanceFromSun}</p>
              <p><span className="text-gray-400">Período Orbital:</span> {info.orbitalPeriod}</p>
              <p><span className="text-gray-400">Luas:</span> {info.moons}</p>
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}

// Órbitas visuais
function Orbit({ radius }: { radius: number }) {
  const points = [];
  for (let i = 0; i <= 64; i++) {
    const angle = (i / 64) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
  }
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <primitive object={new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.15, transparent: true }))} />
  );
}

// Sol com brilho
function Sun() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial
        emissive="#ffa500"
        emissiveIntensity={2}
        color="#ffcc00"
        toneMapped={false}
      />
      <pointLight color="#ffcc00" intensity={100} distance={50} decay={2} />
    </mesh>
  );
}

// Cinturão de Asteroides
function AsteroidBelt() {
  const asteroids = useRef<THREE.InstancedMesh>(null);
  const count = 200;

  // Pre-generate deterministic positions using a seeded approach
  const positions = useMemo(() => {
    // Seed offsets to generate independent random sequences for different properties
    const SEED_OFFSET_DISTANCE = 1000;
    const SEED_OFFSET_Y = 2000;
    const SEED_OFFSET_SCALE = 3000;

    // Simple deterministic pseudo-random function using sine-based algorithm
    // Magic numbers (12.9898, 78.233, 43758.5453) are standard GLSL random constants
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
      return x - Math.floor(x);
    };
    
    return Array.from({ length: count }, (_, i) => {
      const angle = seededRandom(i) * Math.PI * 2;
      const distance = 9.5 + seededRandom(i + SEED_OFFSET_DISTANCE) * 1.5;
      return {
        x: Math.cos(angle) * distance,
        z: Math.sin(angle) * distance,
        y: (seededRandom(i + SEED_OFFSET_Y) - 0.5) * 0.5,
        scale: 0.02 + seededRandom(i + SEED_OFFSET_SCALE) * 0.04,
      };
    });
  }, [count]);

  useFrame(({ clock }) => {
    if (asteroids.current) {
      const time = clock.getElapsedTime() * 0.02;
      const matrix = new THREE.Matrix4();

      for (let i = 0; i < count; i++) {
        const { x, z, y, scale } = positions[i];
        const angle = time + (i * Math.PI * 2) / count;
        const distance = Math.sqrt(x * x + z * z);

        matrix.setPosition(
          Math.cos(angle + Math.atan2(z, x)) * distance,
          y,
          Math.sin(angle + Math.atan2(z, x)) * distance
        );
        matrix.scale(new THREE.Vector3(scale, scale, scale));
        asteroids.current.setMatrixAt(i, matrix);
      }
      asteroids.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={asteroids} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial color="#888888" roughness={1} />
    </instancedMesh>
  );
}

function SolarSystemScene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      {/* Sol */}
      <Sun />

      {/* Órbitas */}
      {planetsData.map((planet) => (
        <Orbit key={`orbit-${planet.name}`} radius={planet.distance} />
      ))}

      {/* Planetas */}
      {planetsData.map((planet) => (
        <Planet key={planet.name} {...planet} />
      ))}

      {/* Cinturão de Asteroides (entre Marte e Júpiter) */}
      <AsteroidBelt />

      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={5}
        maxDistance={60}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </>
  );
}

export default function SolarSystem3D() {
  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-black border border-slate-700/50">
      <Canvas
        camera={{ position: [0, 20, 35], fov: 60 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <SolarSystemScene />
        </Suspense>
      </Canvas>

      {/* Legenda */}
      <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm rounded-lg p-3 border border-slate-700/50">
        <p className="text-xs text-gray-400 mb-2">🖱️ Arraste para rotacionar • Scroll para zoom</p>
        <p className="text-xs text-cyan-400">Passe o mouse sobre um planeta para ver detalhes</p>
      </div>

      {/* Título */}
      <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700/50">
        <h3 className="text-white font-semibold flex items-center gap-2">
          <span className="text-2xl">☀️</span> Sistema Solar
        </h3>
      </div>
    </div>
  );
}
