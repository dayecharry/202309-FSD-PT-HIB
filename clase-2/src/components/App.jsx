import { useEffect } from "react";
import { useState } from "react";
import ListDrinks from "./ListDrinks";
import Menu from "./Menu";
import { Route, Routes } from "react-router-dom";

function App() {
  // useState --> hook
  //www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
  const [drinks, setDrinks] = useState([]);
  const [searchDrink, setSearchDrink] = useState("ron");
  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchDrink}`
    )
      .then((response) => response.json())
      .then((data) => {
        setDrinks(data.drinks);
      });
  }, [searchDrink]);

  const handleDrinks = (event) => {
    setSearchDrink(event.target.value);
  };
  return (
    <div>
      <Menu />
      <form>
        <input
          type="text"
          placeholder="dime la bebida"
          onChange={handleDrinks}
        />
      </form>
      <Routes>
        <Route path="/" element={<h1>UseEfect</h1>} />
        <Route path="/list" element={<ListDrinks drinks={drinks} />} />
      </Routes>
    </div>
  );
}
export default App;
