import { useEffect } from "react";
import { OnChange } from "rune-sdk";


import Score from "./components/Score";
import World from "./Experience/World";
import { GameAction, GameState } from "./logic";
import useGameStore from "./utils/useGameStore";

function App() {
  const { setPoint, setOppPoint } = useGameStore();

  const runeClientInit = () => {
    const onChange: OnChange<GameState, GameAction, false> = (data) => {
      
      const {
        yourPlayerId,
        game: { points },
      } = data;

      Object.keys(points).forEach((id) => {

        if (yourPlayerId == id) setPoint(points[id]);
        else setOppPoint(points[id]);

      });
    };

    Rune.initClient({ onChange });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => runeClientInit(), []);

  return (
    <>
      <Score />
      <World />
    </>
  );
}

export default App;
