# Guess the Phrase Game

Welcome to the "**Guess the Phrase**" game! This React application allows you to guess a hidden phrase letter by letter. Be careful with your guesses, as incorrect ones will cost you lives. Try to guess the entire phrase before running out of lives to win the game!

## Screenshots

![Alt text](/src/assets/guess-the-phrase.PNG "Starting Screen")
![Alt text](/src/assets/game-won.PNG.PNG "Game Won Screen")
![Alt text](/src/assets/lives-lost.PNG.PNG "Lives Lost Screen")
![Alt text](/src/assets/game-over.PNG.PNG "Game Over Screen")

## Features

- Interactive keyboard for guessing letters.
- Visual feedback on correct and incorrect guesses.
- Lives system to track your progress and losses.
- Win the game by correctly guessing the entire phrase.

## Getting Started

Follow these steps to get the game up and running on your local machine:

1. Clone the repository:

```
git clone https://github.com/yourusername/guess-the-phrase-game.git
```

2. Navigate to the project directory:

```
cd guess-the-phrase-game
```

3. Install the project dependencies using npm or yarn:

```
npm install
```

or

```
yarn install
```

4. Start the development server:

```
npm start
```

or

```
yarn start
```

5. Open your web browser and visit http://localhost:3000 to play the game.

## How to Play

- You will be presented with a hidden phrase displayed as blank spaces.
- Below the blank spaces, you'll see a keyboard containing the alphabet.
- Click on the letters you think are part of the hidden phrase.
- If you guess a letter correctly, it will fill in the corresponding blank space.
- If you guess a letter incorrectly, you'll lose one life, and the letter will be marked as incorrect.
- You have a limited number of lives represented by heart icons.
- If you run out of lives, the game is over.

## Technologies Used

`React`: A JavaScript library for building user interfaces.

`Material-UI`: A popular React UI framework for designing modern web applications.

`UUID`: A package for generating unique identifiers.

`CSS`: Styling using CSS for layout and design.
