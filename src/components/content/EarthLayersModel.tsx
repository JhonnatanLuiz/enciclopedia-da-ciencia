"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import { useRef, useState, Suspense, useMemo } from "react";
import * as THREE from "three";

// Dados científicos das camadas
const layersData = [
  {
    id: "crosta",
    nome: "Crosta Terrestre",
    nomeEn: "Crust",
    espessura: "5-70 km",
    temperatura: "0°C a 400°C",
    composicao: "Silício, Alumínio, Oxigênio",
    densidade: "2.7-3.0 g/cm³",
    cor: "#8B7355",
    corSecundaria: "#6B5344",
    emissive: "#3D2817",
    icon: "🏔️",
    raioExterno: 2.0,
    raioInterno: 1.92,
  },
  {
    id: "manto",
    nome: "Manto",
    nomeEn: "Mantle",
    espessura: "~2.900 km",
    temperatura: "500°C a 4.000°C",
    composicao: "Silicatos de Ferro e Magnésio",
    densidade: "3.4-5.6 g/cm³",
    cor: "#E85D04",
    corSecundaria: "#C44D00",
    emissive: "#6D2800",
    icon: "🔥",
    raioExterno: 1.92,
    raioInterno: 1.1,
  },
  {
    id: "nucleoExterno",
    nome: "Núcleo Externo",
    nomeEn: "Outer Core",
    espessura: "~2.200 km",
    temperatura: "4.000°C a 5.000°C",
    composicao: "Ferro e Níquel líquidos",
    densidade: "9.9-12.2 g/cm³",
    cor: "#DC2626",
    corSecundaria: "#B91C1C",
    emissive: "#7F1D1D",
    icon: "🌋",
    raioExterno: 1.1,
    raioInterno: 0.55,
  },
  {
    id: "nucleoInterno",
    nome: "Núcleo Interno",
    nomeEn: "Inner Core",
    espessura: "~1.220 km (raio)",
    temperatura: "~5.400°C",
    composicao: "Ferro e Níquel sólidos",
    densidade: "12.8-13.1 g/cm³",
    cor: "#FBBF24",
    corSecundaria: "#F59E0B",
    emissive: "#92400E",
    icon: "☀️",
    raioExterno: 0.55,
    raioInterno: 0,
  },
];

type LayerId = typeof layersData[number]["id"];

// Componente de uma camada individual - versão refinada
function EarthLayer({
  layer,
  isSelected,
  isHovered,
  isAnySelected,
  onHover,
  onClick,
}: {
  layer: typeof layersData[number];
  isSelected: boolean;
  isHovered: boolean;
  isAnySelected: boolean;
  onHover: (id: LayerId | null) => void;
  onClick: (id: LayerId) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);

  // Opacidade dinâmica
  const opacity = isAnySelected
    ? isSelected ? 1 : 0.2
    : isHovered ? 1 : 0.95;

  // Escala dinâmica
  const scale = (isHovered || isSelected) ? 1.02 : 1;

  // Ângulo de corte - mostra 3/4 da esfera
  const thetaStart = 0;
  const thetaLength = Math.PI * 1.5; // 270 graus
  const phiStart = 0;
  const phiLength = Math.PI; // Hemisfério completo

  // Materiais com gradiente
  const mainMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: layer.cor,
    transparent: true,
    opacity: opacity,
    roughness: 0.6,
    metalness: 0.15,
    side: THREE.DoubleSide,
    emissive: isSelected || isHovered ? layer.emissive : "#000000",
    emissiveIntensity: isSelected ? 0.4 : isHovered ? 0.2 : 0,
  }), [layer.cor, layer.emissive, opacity, isSelected, isHovered]);

  const cutMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: layer.corSecundaria,
    transparent: true,
    opacity: opacity,
    roughness: 0.4,
    metalness: 0.2,
    side: THREE.DoubleSide,
    emissive: isSelected || isHovered ? layer.emissive : "#000000",
    emissiveIntensity: isSelected ? 0.5 : isHovered ? 0.25 : 0,
  }), [layer.corSecundaria, layer.emissive, opacity, isSelected, isHovered]);

  // Geometria do arco de corte (anel na face cortada)
  const cutRingGeometry = useMemo(() => {
    return new THREE.RingGeometry(
      layer.raioInterno || 0.001,
      layer.raioExterno,
      64,
      1,
      0,
      Math.PI
    );
  }, [layer.raioInterno, layer.raioExterno]);

  return (
    <group ref={groupRef} scale={[scale, scale, scale]}>
      {/* Superfície externa principal - esfera parcial */}
      <mesh
        onPointerOver={(e) => { e.stopPropagation(); onHover(layer.id); }}
        onPointerOut={(e) => { e.stopPropagation(); onHover(null); }}
        onClick={(e) => { e.stopPropagation(); onClick(layer.id); }}
      >
        <sphereGeometry args={[
          layer.raioExterno, 
          128, 
          64, 
          thetaStart, 
          thetaLength, 
          phiStart, 
          phiLength
        ]} />
        <primitive object={mainMaterial} attach="material" />
      </mesh>

      {/* Superfície interna (se houver raio interno) */}
      {layer.raioInterno > 0 && (
        <mesh
          onPointerOver={(e) => { e.stopPropagation(); onHover(layer.id); }}
          onPointerOut={(e) => { e.stopPropagation(); onHover(null); }}
          onClick={(e) => { e.stopPropagation(); onClick(layer.id); }}
        >
          <sphereGeometry args={[
            layer.raioInterno, 
            128, 
            64, 
            thetaStart, 
            thetaLength, 
            phiStart, 
            phiLength
          ]} />
          <meshStandardMaterial
            color={layer.corSecundaria}
            transparent
            opacity={opacity * 0.9}
            roughness={0.5}
            metalness={0.1}
            side={THREE.BackSide}
          />
        </mesh>
      )}

      {/* Face de corte 1 - plano vertical frontal */}
      <mesh
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        onPointerOver={(e) => { e.stopPropagation(); onHover(layer.id); }}
        onPointerOut={(e) => { e.stopPropagation(); onHover(null); }}
        onClick={(e) => { e.stopPropagation(); onClick(layer.id); }}
      >
        <primitive object={cutRingGeometry} attach="geometry" />
        <primitive object={cutMaterial} attach="material" />
      </mesh>

      {/* Face de corte 2 - plano vertical lateral */}
      <mesh
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        position={[0, 0, 0]}
        onPointerOver={(e) => { e.stopPropagation(); onHover(layer.id); }}
        onPointerOut={(e) => { e.stopPropagation(); onHover(null); }}
        onClick={(e) => { e.stopPropagation(); onClick(layer.id); }}
      >
        <primitive object={cutRingGeometry} attach="geometry" />
        <primitive object={cutMaterial} attach="material" />
      </mesh>

      {/* Borda suave nas faces de corte */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[layer.raioExterno - 0.01, layer.raioExterno + 0.005, 64, 1, 0, Math.PI]} />
        <meshBasicMaterial color={layer.cor} transparent opacity={opacity * 0.5} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[Math.PI / 2, Math.PI / 2, 0]}>
        <ringGeometry args={[layer.raioExterno - 0.01, layer.raioExterno + 0.005, 64, 1, 0, Math.PI]} />
        <meshBasicMaterial color={layer.cor} transparent opacity={opacity * 0.5} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

// Tooltip flutuante - versão compacta
function LayerTooltip({ layer }: { layer: typeof layersData[number] }) {
  return (
    <Html
      position={[2.8, 0.5, 0]}
      center
      style={{ pointerEvents: "none" }}
      zIndexRange={[100, 0]}
    >
      <div className="bg-slate-900/98 backdrop-blur-xl border border-cyan-400/30 rounded-xl p-3 min-w-[200px] max-w-[220px] shadow-2xl shadow-cyan-900/30 transform-gpu">
        {/* Header compacto */}
        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-700/50">
          <div 
            className="w-9 h-9 rounded-lg flex items-center justify-center text-xl shadow-md"
            style={{ 
              background: `linear-gradient(135deg, ${layer.cor}, ${layer.corSecundaria})`,
            }}
          >
            {layer.icon}
          </div>
          <div>
            <h3 className="text-white font-bold text-sm leading-tight">{layer.nome}</h3>
            <p className="text-cyan-400/80 text-[10px] italic">{layer.nomeEn}</p>
          </div>
        </div>

        {/* Dados em lista compacta */}
        <div className="space-y-1.5 text-[11px]">
          <div className="flex justify-between items-center">
            <span className="text-amber-400">📏 Espessura</span>
            <span className="text-white font-semibold">{layer.espessura}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-orange-400">🌡️ Temp.</span>
            <span className="text-white font-semibold text-right text-[10px]">{layer.temperatura}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-emerald-400">🧪 Comp.</span>
            <span className="text-white font-medium text-right text-[10px] max-w-[100px] truncate" title={layer.composicao}>{layer.composicao}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-purple-400">⚖️ Dens.</span>
            <span className="text-white font-medium">{layer.densidade}</span>
          </div>
        </div>

        {/* Barra de cor */}
        <div 
          className="mt-2 h-1 rounded-full"
          style={{ background: `linear-gradient(90deg, ${layer.cor}, ${layer.corSecundaria})` }}
        />
      </div>
    </Html>
  );
}

// Modelo completo da Terra - versão refinada
function EarthModel({
  selectedLayer,
  hoveredLayer,
  onSelectLayer,
  onHoverLayer,
}: {
  selectedLayer: LayerId | null;
  hoveredLayer: LayerId | null;
  onSelectLayer: (id: LayerId | null) => void;
  onHoverLayer: (id: LayerId | null) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);

  // Rotação automática suave
  useFrame(({ clock }) => {
    if (groupRef.current && !selectedLayer && !hoveredLayer) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.08;
    }
  });

  const handleClick = (id: LayerId) => {
    onSelectLayer(selectedLayer === id ? null : id);
  };

  const handleHover = (id: LayerId | null) => {
    onHoverLayer(id);
    document.body.style.cursor = id ? "pointer" : "default";
  };

  const isAnySelected = selectedLayer !== null;
  const activeLayer = selectedLayer || hoveredLayer;
  const activeLayerData = activeLayer
    ? layersData.find((l) => l.id === activeLayer)
    : null;

  return (
    <group ref={groupRef} rotation={[0.15, 0.3, 0]}>
      {/* Renderizar camadas de fora para dentro */}
      {layersData.map((layer) => (
        <EarthLayer
          key={layer.id}
          layer={layer}
          isSelected={selectedLayer === layer.id}
          isHovered={hoveredLayer === layer.id}
          isAnySelected={isAnySelected}
          onHover={handleHover}
          onClick={handleClick}
        />
      ))}

      {/* Brilho central do núcleo - mais elaborado */}
      <mesh>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshBasicMaterial color="#FEF3C7" transparent opacity={0.95} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshBasicMaterial color="#FCD34D" transparent opacity={0.4} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial color="#F59E0B" transparent opacity={0.15} />
      </mesh>

      {/* Tooltip da camada ativa */}
      {activeLayerData && <LayerTooltip layer={activeLayerData} />}
    </group>
  );
}

// Cena 3D completa - versão refinada com iluminação melhorada
function Scene({
  selectedLayer,
  hoveredLayer,
  onSelectLayer,
  onHoverLayer,
}: {
  selectedLayer: LayerId | null;
  hoveredLayer: LayerId | null;
  onSelectLayer: (id: LayerId | null) => void;
  onHoverLayer: (id: LayerId | null) => void;
}) {
  return (
    <>
      {/* Iluminação ambiente suave */}
      <ambientLight intensity={0.4} color="#e0f0ff" />
      
      {/* Luz principal - simula o Sol */}
      <directionalLight 
        position={[8, 6, 4]} 
        intensity={1.4} 
        color="#ffffff"
        castShadow
      />
      
      {/* Luz de preenchimento */}
      <directionalLight 
        position={[-6, -4, -4]} 
        intensity={0.3} 
        color="#ffa066" 
      />
      
      {/* Luz de borda para destacar contornos */}
      <directionalLight 
        position={[0, 8, -6]} 
        intensity={0.5} 
        color="#88ccff" 
      />
      
      {/* Luz pontual no centro - simula calor do núcleo */}
      <pointLight 
        position={[0, 0, 0]} 
        intensity={3} 
        color="#ffaa00" 
        distance={3} 
        decay={2} 
      />
      
      {/* Luz hemisférica para iluminação natural */}
      <hemisphereLight 
        args={["#87ceeb", "#444422", 0.4]} 
      />

      {/* Estrelas de fundo - mais densas e sutis */}
      <Stars 
        radius={250} 
        depth={100} 
        count={6000} 
        factor={3} 
        saturation={0.2} 
        fade 
        speed={0.3} 
      />

      {/* Modelo da Terra */}
      <EarthModel
        selectedLayer={selectedLayer}
        hoveredLayer={hoveredLayer}
        onSelectLayer={onSelectLayer}
        onHoverLayer={onHoverLayer}
      />

      {/* Controles de câmera */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        minDistance={3.5}
        maxDistance={9}
        autoRotate={!selectedLayer && !hoveredLayer}
        autoRotateSpeed={0.4}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.6}
      />
    </>
  );
}

// Legenda lateral - versão refinada e responsiva
function Legend({
  selectedLayer,
  hoveredLayer,
  onSelectLayer,
  onHoverLayer,
}: {
  selectedLayer: LayerId | null;
  hoveredLayer: LayerId | null;
  onSelectLayer: (id: LayerId | null) => void;
  onHoverLayer: (id: LayerId | null) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Versão Desktop */}
      <div className="hidden md:block absolute top-4 right-4 bg-slate-900/98 backdrop-blur-xl rounded-2xl p-4 border border-slate-700/50 shadow-2xl z-20 min-w-[220px]">
        <h4 className="text-white font-bold text-sm mb-3 pb-2 border-b border-slate-700/50 flex items-center gap-2">
          <span className="text-lg">🌍</span> 
          <span>Camadas da Terra</span>
        </h4>
        <div className="space-y-1.5">
          {layersData.map((layer) => {
            const isSelected = selectedLayer === layer.id;
            const isHovered = hoveredLayer === layer.id;
            return (
              <button
                key={layer.id}
                onClick={() => onSelectLayer(isSelected ? null : layer.id)}
                onMouseEnter={() => onHoverLayer(layer.id)}
                onMouseLeave={() => onHoverLayer(null)}
                className={`
                  w-full flex items-center gap-2 px-2.5 py-2 rounded-lg transition-all duration-200
                  ${isSelected
                    ? "bg-gradient-to-r from-cyan-600/30 to-blue-600/20 ring-1 ring-cyan-400/50"
                    : isHovered
                      ? "bg-slate-800/80"
                      : "hover:bg-slate-800/50"
                  }
                `}
              >
                <span className="text-lg">{layer.icon}</span>
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${layer.cor}, ${layer.corSecundaria})`,
                  }}
                />
                <span className={`text-xs flex-1 text-left transition-colors ${
                  isSelected ? "text-white font-semibold" : "text-slate-300"
                }`}>
                  {layer.nome}
                </span>
                <span className={`text-[10px] font-mono ${
                  isSelected ? "text-cyan-400" : "text-slate-500"
                }`}>
                  {layer.espessura}
                </span>
              </button>
            );
          })}
        </div>

        {selectedLayer && (
          <button
            onClick={() => onSelectLayer(null)}
            className="w-full mt-3 pt-2 border-t border-slate-700/50 text-xs text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center gap-1"
          >
            <span>✕</span>
            <span>Limpar seleção</span>
          </button>
        )}
      </div>

      {/* Versão Mobile - Menu colapsável */}
      <div className="md:hidden absolute top-14 right-2 z-20">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-slate-900/95 backdrop-blur-xl rounded-xl px-3 py-2 border border-slate-700/50 shadow-xl flex items-center gap-2"
        >
          <span className="text-base">🌍</span>
          <span className="text-xs text-white font-medium">Camadas</span>
          <span className={`text-xs text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}>▼</span>
        </button>

        {isExpanded && (
          <div className="absolute top-full right-0 mt-2 bg-slate-900/98 backdrop-blur-xl rounded-xl p-3 border border-slate-700/50 shadow-2xl min-w-[180px]">
            <div className="space-y-1">
              {layersData.map((layer) => {
                const isSelected = selectedLayer === layer.id;
                return (
                  <button
                    key={layer.id}
                    onClick={() => {
                      onSelectLayer(isSelected ? null : layer.id);
                      setIsExpanded(false);
                    }}
                    className={`
                      w-full flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all
                      ${isSelected
                        ? "bg-cyan-600/30 ring-1 ring-cyan-400/50"
                        : "hover:bg-slate-800/50"
                      }
                    `}
                  >
                    <span className="text-base">{layer.icon}</span>
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: layer.cor }}
                    />
                    <span className={`text-xs flex-1 text-left ${
                      isSelected ? "text-white font-semibold" : "text-slate-300"
                    }`}>
                      {layer.nome}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// Toggle de visualização - responsivo
function ViewModeToggle({
  mode,
  onChangeMode,
}: {
  mode: "3d" | "diagram";
  onChangeMode: (mode: "3d" | "diagram") => void;
}) {
  return (
    <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-slate-900/95 backdrop-blur-lg rounded-lg md:rounded-xl border border-slate-700/60 shadow-xl z-20 flex overflow-hidden">
      <button
        onClick={() => onChangeMode("3d")}
        className={`px-2.5 md:px-4 py-2 md:py-2.5 text-[10px] md:text-xs font-medium transition-all ${
          mode === "3d"
            ? "bg-cyan-600 text-white"
            : "text-slate-400 hover:text-white hover:bg-slate-800"
        }`}
      >
        🌐 <span className="hidden sm:inline">Modelo </span>3D
      </button>
      <button
        onClick={() => onChangeMode("diagram")}
        className={`px-2.5 md:px-4 py-2 md:py-2.5 text-[10px] md:text-xs font-medium transition-all ${
          mode === "diagram"
            ? "bg-cyan-600 text-white"
            : "text-slate-400 hover:text-white hover:bg-slate-800"
        }`}
      >
        📊 Diagrama
      </button>
    </div>
  );
}

// Diagrama 2D alternativo - versão refinada
function DiagramView({ 
  selectedLayer,
  onSelectLayer 
}: { 
  selectedLayer: LayerId | null;
  onSelectLayer: (id: LayerId | null) => void;
}) {
  const selectedData = selectedLayer 
    ? layersData.find(l => l.id === selectedLayer) 
    : null;

  return (
    <div className="w-full h-full bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center gap-8">
        {/* Círculos concêntricos */}
        <div className="relative w-80 h-80 flex-shrink-0">
          {/* Crosta */}
          <div 
            className={`absolute inset-0 rounded-full cursor-pointer transition-all duration-300 ${
              selectedLayer === "crosta" ? "ring-4 ring-cyan-400 scale-105" : "hover:scale-[1.02]"
            }`}
            style={{ background: `linear-gradient(135deg, #8B7355, #6B5344)` }}
            onClick={() => onSelectLayer(selectedLayer === "crosta" ? null : "crosta")}
          />
          {/* Manto */}
          <div 
            className={`absolute inset-[4%] rounded-full cursor-pointer transition-all duration-300 ${
              selectedLayer === "manto" ? "ring-4 ring-cyan-400 scale-105" : "hover:scale-[1.02]"
            }`}
            style={{ background: `linear-gradient(135deg, #E85D04, #C44D00)` }}
            onClick={() => onSelectLayer(selectedLayer === "manto" ? null : "manto")}
          />
          {/* Núcleo Externo */}
          <div 
            className={`absolute inset-[24%] rounded-full cursor-pointer transition-all duration-300 ${
              selectedLayer === "nucleoExterno" ? "ring-4 ring-cyan-400 scale-105" : "hover:scale-[1.02]"
            }`}
            style={{ background: `linear-gradient(135deg, #DC2626, #B91C1C)` }}
            onClick={() => onSelectLayer(selectedLayer === "nucleoExterno" ? null : "nucleoExterno")}
          />
          {/* Núcleo Interno */}
          <div 
            className={`absolute inset-[45%] rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center ${
              selectedLayer === "nucleoInterno" ? "ring-4 ring-cyan-400 scale-110" : "hover:scale-105"
            }`}
            style={{ 
              background: `linear-gradient(135deg, #FBBF24, #F59E0B)`,
              boxShadow: '0 0 40px rgba(251, 191, 36, 0.5)'
            }}
            onClick={() => onSelectLayer(selectedLayer === "nucleoInterno" ? null : "nucleoInterno")}
          >
            <span className="text-white text-[10px] font-bold text-center leading-tight drop-shadow-lg">
              Núcleo<br/>Interno
            </span>
          </div>

          {/* Linhas de medição */}
          <div className="absolute top-1/2 left-full ml-2 h-px w-8 bg-slate-600" />
          <div className="absolute top-1/2 left-[calc(100%+40px)] text-slate-400 text-xs whitespace-nowrap">
            6.371 km
          </div>
        </div>

        {/* Painel de informação */}
        <div className="flex-1 max-w-md">
          {selectedData ? (
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-4xl shadow-lg"
                  style={{ 
                    background: `linear-gradient(135deg, ${selectedData.cor}, ${selectedData.corSecundaria})`,
                    boxShadow: `0 8px 24px ${selectedData.cor}40`
                  }}
                >
                  {selectedData.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-2xl">{selectedData.nome}</h3>
                  <p className="text-cyan-400 text-sm italic">{selectedData.nomeEn}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-slate-700/50">
                  <span className="text-slate-400">📏 Espessura</span>
                  <span className="text-white font-semibold">{selectedData.espessura}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-700/50">
                  <span className="text-slate-400">🌡️ Temperatura</span>
                  <span className="text-white font-semibold">{selectedData.temperatura}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-700/50">
                  <span className="text-slate-400">🧪 Composição</span>
                  <span className="text-white font-semibold text-right text-sm">{selectedData.composicao}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">⚖️ Densidade</span>
                  <span className="text-white font-semibold">{selectedData.densidade}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                🌍 Estrutura Interna da Terra
              </h3>
              <p className="text-slate-400 mb-6">
                Clique em uma camada para ver informações detalhadas
              </p>
              <div className="grid grid-cols-2 gap-3">
                {layersData.map((layer) => (
                  <button
                    key={layer.id}
                    onClick={() => onSelectLayer(layer.id)}
                    className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700/30"
                  >
                    <div 
                      className="w-4 h-4 rounded-full shadow-md" 
                      style={{ background: `linear-gradient(135deg, ${layer.cor}, ${layer.corSecundaria})` }} 
                    />
                    <div className="text-left">
                      <p className="text-white text-sm font-medium">{layer.nome}</p>
                      <p className="text-slate-500 text-xs">{layer.espessura}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Componente principal exportado
export default function EarthLayersModel() {
  const [selectedLayer, setSelectedLayer] = useState<LayerId | null>(null);
  const [hoveredLayer, setHoveredLayer] = useState<LayerId | null>(null);
  const [viewMode, setViewMode] = useState<"3d" | "diagram">("3d");

  return (
    <div className="relative w-full h-[550px] md:h-[650px] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950/80 to-slate-950 border border-slate-700/50 shadow-2xl">
      
      {viewMode === "3d" ? (
        <Canvas
          camera={{ position: [4, 2, 4], fov: 48 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
            <Scene
              selectedLayer={selectedLayer}
              hoveredLayer={hoveredLayer}
              onSelectLayer={setSelectedLayer}
              onHoverLayer={setHoveredLayer}
            />
          </Suspense>
        </Canvas>
      ) : (
        <DiagramView 
          selectedLayer={selectedLayer}
          onSelectLayer={setSelectedLayer} 
        />
      )}

      {/* Toggle de visualização */}
      <ViewModeToggle mode={viewMode} onChangeMode={setViewMode} />

      {/* Legenda (apenas no modo 3D) */}
      {viewMode === "3d" && (
        <Legend 
          selectedLayer={selectedLayer} 
          hoveredLayer={hoveredLayer}
          onSelectLayer={setSelectedLayer}
          onHoverLayer={setHoveredLayer}
        />
      )}

      {/* Instruções - responsivo */}
      <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-slate-900/95 backdrop-blur-xl rounded-lg md:rounded-xl px-2 md:px-4 py-1.5 md:py-3 border border-slate-700/40 z-10 shadow-xl">
        <div className="flex items-center gap-2 md:gap-5 text-[10px] md:text-xs text-slate-400">
          {viewMode === "3d" ? (
            <>
              <span className="flex items-center gap-1">
                <span className="text-sm md:text-base">🖱️</span>
                <span className="text-slate-300 font-medium hidden sm:inline">Clique</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="text-sm md:text-base">↔️</span>
                <span className="text-slate-300 font-medium hidden sm:inline">Arraste</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="text-sm md:text-base">🔍</span>
                <span className="text-slate-300 font-medium hidden sm:inline">Zoom</span>
              </span>
            </>
          ) : (
            <span>Toque para ver detalhes</span>
          )}
        </div>
      </div>

      {/* Profundidade total - responsivo */}
      <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 bg-slate-900/95 backdrop-blur-xl rounded-lg md:rounded-xl px-2.5 md:px-5 py-1.5 md:py-3 border border-slate-700/40 z-10 text-right shadow-xl">
        <p className="text-[8px] md:text-[10px] text-slate-400 uppercase tracking-wider font-medium">Profundidade</p>
        <p className="text-white font-bold text-lg md:text-2xl">
          6.371 <span className="text-[10px] md:text-sm text-slate-400 font-normal">km</span>
        </p>
      </div>
    </div>
  );
}
