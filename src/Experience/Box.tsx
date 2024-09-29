import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { Mesh } from 'three';
import useGameStore from '../utils/useGameStore';

interface BoxProps {
  position: any
}

const Box = ({ position }: BoxProps) => {
  const boxRef = useRef<Mesh | null>(null);
  const capsuleRef = useRef<Mesh | null>(null);

  const { point, setPoint } = useGameStore();

  const [isHit, setIsHit] = useState<boolean>(false);

  const moleUp = () => {
    if(!boxRef.current || !capsuleRef.current) return;

    const duration = 0.3

    gsap.to(
      capsuleRef.current.position,
      {
        duration,
        y: 0.5,
        onStart: () => setIsHit(false),
      }
    )
    
    gsap.to(
      capsuleRef.current.position,
      {
        delay: duration,
        duration,
        y: -0.05
      }
    )
  };

  const onHitMole = () => {
    
    if(isHit) return;

    setIsHit(true);
    setPoint(point + 1);
  }

  useEffect(() => {
    function triggerRandomly() {
      const randomDelay = Math.random() * 6000 + 1000; // Random delay between 1 and 2 seconds
      return setTimeout(() => {
        moleUp();
        triggerRandomly();
      }, randomDelay);
    }

    const id = triggerRandomly(); // Start the initial call

    // Optional: cleanup on component unmount
    return () => clearTimeout(id);
  }, []);

  return (
    <>
      <mesh 
        ref={capsuleRef} 
        position={[position.x, position.y - 0.05, position.z]}
        onClick={onHitMole}
      >
        <capsuleGeometry args={[0.2, 0.5, 12, 12]} />
        <meshBasicMaterial color='red' />
      </mesh>
      <mesh 
        position={[position.x, position.y + 0.25, position.z]} 
        ref={boxRef}
      >
        <boxGeometry args={[1, 0.3, 1]} />
        <meshBasicMaterial color='cyan' />
      </mesh>
    </>
  );
};

export default Box;
