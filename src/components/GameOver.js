import React from 'react';
import '../styles/GameOver.css';
import bg from "../assets/starry-night-bg-8.jpg";

function GameOver() {
  return (
    <div className="game-over-container">
        <img src={bg} alt="bg" className='bg-img'/>
        <div className="main-content">
            <div className="display-result">😫 Oops!!!! You Lost! 😫</div>
            <button className='game-over-button' onClick={() => window.location.reload(false)}>Try Again?</button>
        </div>
    </div>
  )
}

export default GameOver