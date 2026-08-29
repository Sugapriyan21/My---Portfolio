import { Canvas } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";

function DeveloperShape() {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <mesh>
        <icosahedronGeometry args={[1.8, 2]} />
        <meshStandardMaterial
          color="#00ffff"
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function ThreeBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      <pointLight
        position={[-5, -5, 5]}
        intensity={2}
        color="#8b5cf6"
      />

      <Stars
        radius={50}
        depth={30}
        count={1500}
        factor={3}
        saturation={0}
        fade
        speed={1}
      />

      <DeveloperShape />
    </Canvas>
  );
}