import { useState } from "react";
import "./App.css";
import GameOver from "./components/GameOver";
import Keyboard from "./components/Keyboard";
import './styles/PopUp.css';

function App() {
  const sentences = [
    "Shot in the dark",
    "Break the ice",
    "On the same boat",
    "Man of few words",
    "My cup of tea",
  ];

  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * sentences.length)
  );
  const arrOfRandomPhrase = sentences[randomNumber].toUpperCase().split(""); 
  const [remainingLives, setRemainingLives] = useState(5);
  const [lostLives, setLostLives] = useState(0);

  return (
    <div className="App">
      {remainingLives === 0 && lostLives === 5 ? (
          <GameOver />
      ) : (
        <Keyboard
          arrOfRandomPhrase={arrOfRandomPhrase}
          remainingLives={remainingLives}
          lostLives={lostLives}
          setLostLives={setLostLives}
          setRemainingLives={setRemainingLives}
        />
      )}
    </div>
  );
}

export default App;
