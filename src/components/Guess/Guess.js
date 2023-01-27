import React from "react";

function Guess({ setGuess: setGameGuess }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (guess.length === 5) {
      console.info("Submitting guess", guess);
      setGameGuess(guess);
      setGuess("");
    }
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          event.target.value.length <= 5 && setGuess(event.target.value);
        }}
      />
    </form>
  );
}

export default Guess;
