import { create } from 'zustand';

interface GameStoreI {
  point: number;
  setPoint: (p: number) => void; 
}

const useGameStore = create<GameStoreI>((set) => ({
  point: 0,
  setPoint: (p:number) => set(() => ({ point: p })),
}));

export default useGameStore;