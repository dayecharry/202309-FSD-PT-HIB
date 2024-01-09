import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

function Detail({ drinks }) {
  const { id } = useParams();
  const findDrink = drinks.find((eachDrink) => eachDrink.idDrink === id);

  console.log(findDrink);

  return findDrink ? (
    <div>
      <h2>Detalle</h2>
      <img src={findDrink.strDrinkThumb} alt="" />
      <h3>{findDrink.strDrink}</h3>
      <p>{findDrink.strCategory}</p>
      <p>{findDrink.strTags}</p>
    </div>
  ) : (
    <NotFound />
  );
}
export default Detail;
