import React from "react";
import "../styles/GameOver.css";
import skull from "../assets/skull.png";
import lose from "../assets/lose.png";

function GameOver() {
  return (
    <div className="game-over-container">
      <div className="bg-icons">
        <img src={skull} alt="game lost skull" className="skull" />
        <img src={lose} alt="game lose" className="lose" />
      </div>
      <button
        className="game-over-button"
        onClick={() => window.location.reload(false)}
      >
        Try Again?
      </button>
    </div>
  );
}

export default GameOver;
