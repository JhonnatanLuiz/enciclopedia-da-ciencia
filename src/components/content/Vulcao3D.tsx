import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Center, Float } from '@react-three/drei';
import * as THREE from 'three';

// --- Dados das Etiquetas ---
// Typed explicitly to avoid tuple errors
const LABELS: { text: string; position: [number, number, number]; description: string }[] = [
    { text: "Cinzas", position: [2.5, 5, 0], description: "Nuvens de material vulcânico pulverizado" },
    { text: "Cratera", position: [0.8, 3.2, 0.5], description: "Abertura principal por onde sai o magma" },
    { text: "Lava", position: [-1.8, 1.5, 0.8], description: "Magma que atingiu a superfície" },
    { text: "Chaminé principal", position: [0.8, 1.5, 0], description: "Canal central de subida do magma" },
    { text: "Chaminé secundária", position: [2.5, 0.5, 0], description: "Canal lateral" },
    { text: "Magma", position: [-3, 0.5, 0], description: "Rocha fundida no interior da Terra" },
    { text: "Câmara magmática", position: [0, -2.5, 0], description: "Reservatório de magma subterrâneo" },
    { text: "Camadas de cinzas", position: [-2.5, -1.5, 0], description: "Estratos de erupções anteriores" },
];

interface AnnotationProps {
    text: string;
    position: [number, number, number];
    description: string;
}

const Annotation = ({ text, position, description }: AnnotationProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Html position={position} center distanceFactor={10} zIndexRange={[100, 0]}>
            <div
                className="group relative cursor-pointer"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* Linha conectora (SVG simples ou CSS) */}
                <div className={`text-[#0f172a] font-bold text-sm bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-lg border-l-4 border-blue-600 transition-transform ${hovered ? 'scale-110' : 'scale-100'}`}>
                    {text}
                </div>

                {/* Tooltip Hover */}
                {hovered && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 p-2 bg-slate-800 text-white text-xs rounded shadow-xl z-50 pointer-events-none">
                        {description}
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
                    </div>
                )}
            </div>
        </Html>
    );
};

// --- Geometria do Vulcão em Corte ---
const CrossSectionVolcano = () => {
    return (
        <group rotation={[0, -Math.PI / 2, 0]}> {/* Rotacionado para mostrar o corte de frente */}

            {/* 1. Cone Principal (Cortado) */}
            <mesh position={[0, -0.5, 0]}>
                {/* radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength */}
                {/* thetaLength=PI faz meio cone */}
                <cylinderGeometry args={[0.8, 4, 5, 32, 1, false, 0, Math.PI]} />
                <meshStandardMaterial color="#5D4037" flatShading side={THREE.DoubleSide} />
            </mesh>

            {/* 2. Face do Corte (Interior) */}
            <mesh position={[0, -0.5, 0]} rotation={[0, Math.PI / 2, 0]}>
                <planeGeometry args={[8, 5]} />
                <meshStandardMaterial color="#3E2723" />
            </mesh>

            {/* Camadas Geológicas (Visualização Estilizada no Corte) */}
            <mesh position={[0, -0.5, 0.05]} rotation={[0, Math.PI / 2, 0]}>
                <planeGeometry args={[7.8, 4.8]} />
                <meshBasicMaterial color="#4E342E" /> {/* Camada interna ligeiramente diferente */}
            </mesh>

            {/* 3. Chaminé Principal (Cilindro de Magma Central) */}
            <mesh position={[0, -0.5, 0.1]} rotation={[0, 0, 0]}>
                <cylinderGeometry args={[0.3, 0.5, 5.2, 16]} />
                <meshStandardMaterial color="#FF4500" emissive="#FF4500" emissiveIntensity={0.5} />
            </mesh>

            {/* 4. Chaminé Secundária (Braço lateral) - Ajustado visualmente */}
            <mesh position={[1.5, -0.5, 0.1]} rotation={[0, 0, -Math.PI / 4]}>
                <cylinderGeometry args={[0.15, 0.2, 2.5, 16]} />
                <meshStandardMaterial color="#FF4500" emissive="#FF4500" emissiveIntensity={0.5} />
            </mesh>

            {/* 5. Câmara Magmática (Base) */}
            <mesh position={[0, -3, 0.1]}>
                <sphereGeometry args={[1.5, 32, 16, 0, Math.PI]} /> {/* Meia esfera */}
                <meshStandardMaterial color="#FF4500" emissive="#FF0000" emissiveIntensity={0.8} />
            </mesh>

            {/* "Sopa" de Magma na base */}
            <mesh position={[0, -3, 0.1]} rotation={[0, 0, 0]}>
                <circleGeometry args={[1.5, 32]} />
                <meshBasicMaterial color="#FF6600" />
            </mesh>

            {/* 6. Cratera (Topo) */}
            <mesh position={[0, 2, 0.]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.8, 0.2, 16, 32, Math.PI]} />
                <meshStandardMaterial color="#3E2723" />
            </mesh>


            {/* 7. Lava Escorrendo (Lateral Externa) */}
            <mesh position={[0.5, 1.0, 1.8]} rotation={[-0.2, 0.2, -0.2]}>
                <tubeGeometry args={[
                    useMemo(() => new THREE.CatmullRomCurve3([
                        new THREE.Vector3(-0.5, 1, -0.5),
                        new THREE.Vector3(-0.8, 0, 0),
                        new THREE.Vector3(-1.5, -1.5, 0.5)
                    ]), []),
                    20, 0.2, 8, false
                ]} />
                <meshStandardMaterial color="#FF4500" />
            </mesh>

        </group>
    );
}

// Nuvem estilo Cartoon
const CloudCartoon = ({ position }: { position: [number, number, number] }) => {
    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <group position={position}>
                <mesh position={[0, 0, 0]}>
                    <dodecahedronGeometry args={[0.8, 0]} />
                    <meshStandardMaterial color="#A0A0A0" flatShading />
                </mesh>
                <mesh position={[0.8, 0.5, 0]}>
                    <dodecahedronGeometry args={[0.6, 0]} />
                    <meshStandardMaterial color="#B0B0B0" flatShading />
                </mesh>
                <mesh position={[-0.7, 0.6, 0.2]}>
                    <dodecahedronGeometry args={[0.7, 0]} />
                    <meshStandardMaterial color="#909090" flatShading />
                </mesh>
                <mesh position={[0.2, 1.0, -0.2]}>
                    <dodecahedronGeometry args={[0.9, 0]} />
                    <meshStandardMaterial color="#D3D3D3" flatShading />
                </mesh>
            </group>
        </Float>
    )
}

const Vulcao3D = () => {
    return (
        <div className="w-full h-[500px] relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-300 shadow-xl">
            <Canvas shadows camera={{ position: [0, 2, 12], fov: 40 }} dpr={[1, 2]}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
                <OrbitControls enableZoom={true} minDistance={8} maxDistance={20} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} />

                <Center>
                    <group position={[0, -1, 0]}>
                        <CrossSectionVolcano />
                        <CloudCartoon position={[0, 4.5, 0]} />

                        {LABELS.map((label, idx) => (
                            <Annotation key={idx} {...label} />
                        ))}
                    </group>
                </Center>

                {/* Vegetação da base */}
                <mesh position={[-3, -2.5, 2]} scale={[0.5, 0.5, 0.5]}>
                    <dodecahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial color="#4CAF50" />
                </mesh>
                <mesh position={[3, -2.5, 2]} scale={[0.6, 0.4, 0.6]}>
                    <dodecahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial color="#4CAF50" />
                </mesh>

            </Canvas>

            <div className="absolute bottom-4 right-4 pointer-events-none">
                <div className="bg-white/80 p-2 rounded shadow text-xs text-slate-600">
                    🔍 Arraste para girar • Passe o mouse nos nomes
                </div>
            </div>
        </div>
    );
};

export default Vulcao3D;
