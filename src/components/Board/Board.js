import React from "react";

import Guess from "../Guess";

function Board({ guesses }) {
  return (
    <>
      {guesses.map((guess, index) => (
        <div className="guess-results" key={index}>
          <Guess guess={guess} />
        </div>
      ))}
    </>
  );
}

export default Board;
