import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import NavBar from "./NavBar";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import ItemForm from "./ItemForm";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [games, setGames] = useState([]);

  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }

  function handleAddItem(newGame) {
    setGames([...games, newGame]);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Searchgame" element={<ShoppingList />} />
        <Route
          path="/Addgame"
          element={<ItemForm onAddItem={handleAddItem} games={games} />}
        />
      </Routes>
    </div>
  );
}

export default App;
