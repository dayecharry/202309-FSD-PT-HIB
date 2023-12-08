import "../css/drink.css";
function Drink({ oneDrink }) {
  return (
    <article>
      <img src={oneDrink.strDrinkThumb} alt="" className="imgDrink" />
      <h5>{oneDrink.strDrink}</h5>
      <p>{oneDrink.strCategory}</p>
    </article>
  );
}
export default Drink;
