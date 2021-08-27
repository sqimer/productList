import React from "react";
import "./App.css";
import Cheapest from "./components/Cheapest/Cheapest";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import { GlobalStyle } from "./global";
import "../src/assets/css/fonts.css";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <ShoppingList />
      <Cheapest />
    </div>
  );
};

export default App;
