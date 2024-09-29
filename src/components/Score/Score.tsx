import useGameStore from '../../utils/useGameStore';
import './Score.scss';

const Score = () => {
  const { point } = useGameStore();

  return (
    <div className='scoreCon' >
      <h2>Score: {point}</h2>
    </div>
  )
}

export default Score