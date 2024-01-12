import Character from "./Character";

function ListCharacters({ filteredArray }) {
  console.log(filteredArray);
  return (
    <>
      <h2>Listado de personajes</h2>
      {filteredArray.map((char) => (
        <Character char={char} key={char.id} />
      ))}
    </>
  );
}
export default ListCharacters;
