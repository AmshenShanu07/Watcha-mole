import { PlayerId, RuneClient } from 'rune-sdk';

export interface GameState {
  level: number;
  points: any,
  playerIds: PlayerId[];
};

export type GameAction = {
  onPointChange: (point: number) => void
};

declare global {
  const Rune: RuneClient<GameState, GameAction>
};

Rune.initLogic({
  minPlayers:2,
  maxPlayers: 2,
  setup: (ids) => {
    return {
      level:0,
      playerIds: ids,
      points: {}
    }
  },
  actions: {
    onPointChange: (points,data) => {
      data.game.points[data.playerId] = points;
    }
  }
})