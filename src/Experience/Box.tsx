import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

interface BoxProps {
  position: any
}

const Box = ({ position }: BoxProps) => {
  const boxRef = useRef<Mesh | null>(null);
  const capsuleRef = useRef<Mesh | null>(null);


  useFrame(({clock}) => {
    if(!boxRef.current || !capsuleRef.current) return;
    
    const elapsedTime = clock.getElapsedTime();

    capsuleRef.current.position.y = Math.sin(elapsedTime * 5) * 0.4;

    // boxRef.current.rotation.x = elapsedTime;
    // boxRef.current.rotation.y = elapsedTime;

  })

  return (
    <>
      <mesh ref={capsuleRef} position={[position.x, position.y, position.z]} >
        <capsuleGeometry args={[0.2, 0.5, 12, 12]} />
        <meshBasicMaterial color='red' />
      </mesh>
      <mesh position={[position.x, position.y + 0.25, position.z]} ref={boxRef} >
        <boxGeometry args={[1, 0.3, 1]} />
        <meshBasicMaterial color='cyan' />
      </mesh>
    </>
  );
};

export default Box;
