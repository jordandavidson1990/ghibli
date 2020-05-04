import React from "react";
import MainContainer from "./containers/MainContainer";
import "./App.css";

function App() {
  const images = ["no-face", "totoro", "full-team"];
  function randomImage() {
    return images[Math.floor(Math.random() * images.length)];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={`${randomImage()}.png`} className="App-logo" alt="logo" />
        <p>Studio Ghibli</p>
        <MainContainer />
      </header>
    </div>
  );
}

export default App;
