import { useEffect } from "react";
import { useState } from "react";
import ListDrinks from "./ListDrinks";
import Menu from "./Menu";
import Detail from "./Detail";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import AuthRoute from "./AuthRoute";
import Login from "./Login";

const userList = [
  {
    email: "anacleta@upgrade.com",
    password: "123456",
    name: "Ana",
    role: "admin",
  },
  {
    email: "perensejo@upgrade.com",
    password: "987456",
    name: "Pablo",
    role: "client",
  },
];

function App() {
  // datos del usuario
  const [user, setUser] = useState(undefined);
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

  const changeUserLogin = (userForm) => {
    const findUser = userList.find(
      (user) =>
        user.email === userForm.email && user.password === userForm.password
    );

    if (findUser) {
      setUser(findUser);
    }
  };

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
        <Route
          path="/list"
          element={
            <AuthRoute user={user} component={<ListDrinks drinks={drinks} />} />
          }
        />
        <Route
          path="/login"
          element={<Login changeUserLogin={changeUserLogin} />}
        />
        <Route path="/detail/:name/:id" element={<Detail drinks={drinks} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;
