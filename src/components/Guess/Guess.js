import React from "react";
import { range } from "../../utils";

function Guess({ checkedGuess }) {
  if (!checkedGuess) {
    return (
      <p className="guess">
        {range(5).map((_, index) => (
          <span className="cell" key={index}>
            {" "}
          </span>
        ))}
      </p>
    );
  }

  return (
    <p className="guess">
      {checkedGuess.map(({ letter, status }, index) => (
        <span className={`cell ${status}`} key={index}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
