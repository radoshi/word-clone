import React from "react";
import { GAME_STATES } from "../../constants";

function Banner({ state }) {
  const happyBanner = (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> 3 guesses</strong>.
      </p>
    </div>
  );

  const sadBanner = (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>LEARN</strong>.
      </p>
    </div>
  );

  return (
    <>
      {state === GAME_STATES.won && happyBanner}
      {state === GAME_STATES.lost && sadBanner}
    </>
  );
}

export default Banner;
