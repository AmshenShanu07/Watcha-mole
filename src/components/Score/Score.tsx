import './Score.scss';

import useGameStore from '../../utils/useGameStore';

const Score = () => {
  const { point, oppPoint, gameStart, setGameStart } = useGameStore();

  const onClickBtn = () => setGameStart(!gameStart);

  return (
    <>
      <div className='scoreCon' >
        <h2>Opponent: {oppPoint}</h2>
        <h2>Score: {point}</h2>
      </div>
      <div className="startBtnCon">
        <button onClick={onClickBtn} >
          {gameStart?'Stop':'Start'}
        </button>
      </div>
    </>
  )
}

export default Score;