import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { Mesh } from 'three';
import useGameStore from '../utils/useGameStore';

interface BoxProps {
  position: any
}

type MoleType = 'mole' | 'coin' | 'bomb';


const Box = ({ position }: BoxProps) => {
  const boxRef = useRef<Mesh | null>(null);
  const capsuleRef = useRef<Mesh | null>(null);

  const { point, setPoint } = useGameStore();

  const [isHit, setIsHit] = useState<boolean>(false);
  const [moleType, setMoleType] = useState<MoleType>('mole')

  const getRandomMole = () => {
    const arr:MoleType[] = ['mole','bomb', 'mole', 'coin', 'mole', 'mole', 'mole'];
    const random = arr[Math.floor( Math.random() * arr.length )];
    setMoleType(random)
  };

  const getTypeColor = (type:MoleType): string => {
    if(type == 'bomb') return '#000000'
    else if ( type === 'coin') return '#ffd900'
    else return '#9c5102'
  };

  const getPonts = (type:MoleType): number => {
    if(type == 'bomb') return -2
    else if ( type === 'coin') return 2 
    else return 1
  }

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
    const hitPoint = getPonts(moleType);
    setPoint(point + hitPoint);
  }

  useEffect(() => {
    function triggerRandomly() {
      getRandomMole();
      const randomDelay = Math.random() * 6000 + 1000;
      return setTimeout(() => {
        moleUp();
        triggerRandomly();
      }, randomDelay);
    }

    const id = triggerRandomly();

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
        <meshBasicMaterial color={getTypeColor(moleType)} />
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
