import React from "react";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED, GAME_STATES } from "../../constants";
import { checkGuess } from "../../game-helpers";

import Banner from "../Banner";
import GuessInput from "../GuessInput";
import Guess from "../Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(
    range(NUM_OF_GUESSES_ALLOWED).map(() => "     ")
  );

  const [nextGuess, setNextGuess] = React.useState(0);

  const [state, setState] = React.useState(GAME_STATES.active);

  const addGuess = (guess) => {
    const tmpGuesses = [...guesses];
    tmpGuesses[nextGuess] = guess;
    setGuesses(tmpGuesses);
    setNextGuess(nextGuess + 1);
    console.log(`Checking ${guess} against ${answer}`);
    if (guess.toUpperCase() === answer) {
      console.log("You won!");
      setState(GAME_STATES.won);
    } else if (nextGuess + 1 === NUM_OF_GUESSES_ALLOWED) {
      // End the game
      setState(GAME_STATES.lost);
    }
  };

  return (
    <>
      <Banner state={state} />

      {guesses.slice(0, nextGuess).map((guess, index) => (
        <div className="guess-results" key={index}>
          <Guess checkedGuess={checkGuess(guess, answer)} />
        </div>
      ))}

      {range(nextGuess, NUM_OF_GUESSES_ALLOWED).map((i) => (
        <div className="guess-results" key={i}>
          <Guess />
        </div>
      ))}

      <GuessInput addGuess={addGuess} state={state} />
    </>
  );
}

export default Game;
