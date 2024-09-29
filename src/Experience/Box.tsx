import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';


const Box = () => {
  const boxRef = useRef<Mesh | null>(null);


  useFrame(({clock}) => {
    if(!boxRef.current) return;
    
    const elapsedTime = clock.getElapsedTime();

    boxRef.current.rotation.x = elapsedTime;
    boxRef.current.rotation.y = elapsedTime;

  })

  return (
    <>
      <mesh position={[0, 0, 0]} ref={boxRef} >
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

export default Box;
