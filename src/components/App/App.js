import React from "react";
import Game from "../Game";
import Header from "../Header";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <React.StrictMode>
          <Game />
        </React.StrictMode>
      </div>
    </div>
  );
}

export default App;
