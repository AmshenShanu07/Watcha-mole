import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Box from './Box'


const World = () => {
  return (
    <Canvas camera={{ position: [0,0,5], rotation: [0,0,0], fov: 60 }}  >
      <color args={['#adc178']} attach='background' />
      <OrbitControls enableDamping />
      <Box/>
    </Canvas>
  )
}

export default World