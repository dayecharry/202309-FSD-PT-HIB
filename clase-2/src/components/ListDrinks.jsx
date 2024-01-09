import { Link } from "react-router-dom";
import Drink from "./Drink";

function ListDrinks({ drinks }) {
  const elementLi = drinks.map((oneDrink) => {
    return (
      <li key={oneDrink.idDrink}>
        <Link to={`/detail/${oneDrink.strDrink}/${oneDrink.idDrink}`}>
          <Drink oneDrink={oneDrink} />
        </Link>
      </li>
    );
  });
  return <ul>{elementLi}</ul>;
}
export default ListDrinks;
