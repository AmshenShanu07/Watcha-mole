import { Canvas } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'

import Box from './Box'



const World = () => {
  return (
    <Canvas 
      camera={{ 
        position: [0, 4, 4], 
        rotation: [Math.PI * -0.25, 0, 0],
        fov: 60,
      }}  
    >
      <color args={['#adc173']} attach='background' />
      <ambientLight intensity={2} />
      {/* <OrbitControls enableDamping /> */}
      {[-1, 0, 1].map((d,i) => (
        <Box key={i} position={{ x:d, y:0, z: -1 }} />
      ))}
      {[-1, 0, 1].map((d,i) => (
        <Box key={i} position={{ x:d, y:0, z: 0 }} />
      ))}
      {[-1, 0, 1].map((d,i) => (
        <Box key={i} position={{ x:d, y:0, z: 1 }} />
      ))}
      {[-1, 0, 1].map((d,i) => (
        <Box key={i} position={{ x:d, y:0, z: 2 }} />
      ))}
    </Canvas>
  )
}

export default World