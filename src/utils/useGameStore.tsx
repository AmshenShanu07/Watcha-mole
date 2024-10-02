import { create } from 'zustand';

interface GameStoreI {
  point: number;
  oppPoint: number;
  setPoint: (p: number) => void;
  setOppPoint: (p: number) => void;
  
  gameStart: boolean;
  setGameStart: (val: boolean) => void;
}

const useGameStore = create<GameStoreI>((set) => ({
  point: 0,
  oppPoint: 0,
  gameStart: false,

  setPoint: (p:number) => set(() => ({ point: p })),
  setOppPoint: (p:number) => set(() => ({ oppPoint: p })),
  setGameStart: (val: boolean) => set(() => ({ gameStart: val })),
}));

export default useGameStore;