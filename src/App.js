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
  const arrOfRandomPhrase = sentences[randomNumber].toUpperCase().split(""); //randomPhrase.split(' ').join('').split('')
  const [remainingLives, setRemainingLives] = useState(5);
  const [lostLives, setLostLives] = useState(0);
  // const [boxValue, setBoxValue] = useState(
  //   Array(arrOfRandomPhrase.length).fill(null)
  // );
  // const newBoxVal = boxValue.slice();

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


// 1. Game Won logic
// 2. Blocking keypress so that it disables the button when it is clicked once -- completed 
// 3. Make Red color alphabet when wrong letter is clicked -- half done!!