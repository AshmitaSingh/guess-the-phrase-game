import React from 'react';
import '../styles/PopUp.css';

function GameWon() {
  return (
    <div className="pop-up">
        <div><b>🎊Congratulations! You have won🎊</b></div>
        <button className='button' onClick={() => window.location.reload(false)}>PLAY AGAIN?</button>
    </div>
  )
}

export default GameWon;