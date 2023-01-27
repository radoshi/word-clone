import React from "react";

function Guess({ guess }) {
  return (
    <p className="guess">
      {guess.split("").map((letter, index) => (
        <span className="cell" key={index}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
