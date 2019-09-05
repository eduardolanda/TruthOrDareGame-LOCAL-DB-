import React from "react";
import "./App.css";
import ListCharacters from "./components/ListCharacters";
import Title from "./components/Title";
const App = () => {
  return (
    <div className="App">
      <Title />
      <ListCharacters />
    </div>
  );
};

export default App;
