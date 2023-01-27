import React from "react";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput";
import Board from "../Board";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(
    range(NUM_OF_GUESSES_ALLOWED).map(() => "     ")
  );

  const [nextGuess, setNextGuess] = React.useState(0);

  const addGuess = (guess) => {
    if (nextGuess >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }
    const tmpGuesses = [...guesses];
    tmpGuesses[nextGuess] = guess;
    setGuesses(tmpGuesses);
    setNextGuess(nextGuess + 1);
  };

  return (
    <>
      <Board guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
