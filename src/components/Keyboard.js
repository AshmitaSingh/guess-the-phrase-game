import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import "../styles/Keyboard.css";
import GameWon from "./GameWon";
import bg from "../assets/flat-mountains.svg";
import { v4 as uuid } from "uuid";

function Keyboard({
  arrOfRandomPhrase,
  remainingLives,
  setRemainingLives,
  lostLives,
  setLostLives,
}) {
  const allRows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];

  //Keep a track on the lives - if clicked alphabet is not equal to the required alphabet, break lives
  const [wrongAlphabet, setWrongAlphabet] = useState("");
  const [wrongAlphabetClicked, setWrongAlphabetClicked] = useState(false);

  const [boxValue, setBoxValue] = useState(
    Array(arrOfRandomPhrase.length).fill(null)
  );
  const [isGameWon, setIsGameWon] = useState(false);
  const newBoxVal = boxValue.slice();

  //Function to handle keyboard clicks and update the game state.
  const handleKeyStroke = (e) => {
    // To disable the button on click
    e.currentTarget.disabled = true;
    let clickedAlphabet = e.target.innerText;
    arrOfRandomPhrase.forEach((ele, i) => {
      if (clickedAlphabet === ele) {
        newBoxVal[i] = clickedAlphabet;
        setBoxValue(newBoxVal);
        setWrongAlphabetClicked(false);
      }
    });
    if (!arrOfRandomPhrase.includes(clickedAlphabet)) {
      setRemainingLives(remainingLives - 1);
      setLostLives(lostLives + 1);
      setWrongAlphabet(clickedAlphabet);
      setWrongAlphabetClicked(true);
    }
  };

  useEffect(() => {
    arrOfRandomPhrase.forEach((ele, i) => {
      if (arrOfRandomPhrase[i] === " ") {
        newBoxVal[i] = " ";
        setBoxValue(newBoxVal);
      }
    });
  }, []);

  useEffect(() => {
    if (arrOfRandomPhrase.toString() === newBoxVal.toString()) {
      setIsGameWon(true);
    }
  }, [newBoxVal]);

  return (
    <div className="content">
      <img src={bg} className="zoom" alt="bg" />
      <div className="main-container">
        <h1 className="header">GUESS THE PHRASE</h1>
        <div>
          <div className="blank-spaces">
            {newBoxVal.map((ele, i) => (
              <div
                key={i}
                className={
                  arrOfRandomPhrase[i] !== " " ? "single-space" : "empty-space"
                }
              >
                {ele}
              </div>
            ))}
          </div>
          {arrOfRandomPhrase.toString() === newBoxVal.toString() ? (
            <div className="pop-up-container">
              <GameWon />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="keyboard">
          {allRows.map((row, i) => (
            <div key={i}>
              {row.map((ele) => (
                <button
                  key={ele}
                  onClick={handleKeyStroke}
                  disabled={isGameWon ? true : false}
                  className={
                    wrongAlphabet.toLowerCase() === ele
                      ? "wrong-alphabet"
                      : "rows"
                  }
                >
                  {ele.toUpperCase()}
                </button>
              ))}
            </div>
          ))}
        </div>
        <div className="lives">
          {[...Array(remainingLives)].map(() => (
            <div key={uuid()}>
              <FavoriteIcon htmlColor="rgb(243, 73, 73)" fontSize="large" />
            </div>
          ))}
          {[...Array(lostLives)].map(() => (
            <div key={uuid()}>
              <HeartBrokenIcon
                htmlColor="rgb(243, 73, 73)"
                fontSize="large"
                className={wrongAlphabetClicked ? "lost-live" : ""}
              />
            </div>
          ))}
        </div>
        <button
          className="reset-button"
          onClick={() => window.location.reload(false)}
          disabled={isGameWon ? true : false}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
