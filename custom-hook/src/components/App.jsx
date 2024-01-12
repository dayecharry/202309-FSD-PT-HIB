import useFetch from "./hooks/useFetch";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const { data, error } = useFetch(
    "https://hp-api.onrender.com/api/characters/house/gryffindor"
  );

  const [updateValue, value] = useLocalStorage("user");
  console.log(value);
  updateValue("santiago");
  const [update, email] = useLocalStorage("email");
  update("santi@");
  return (
    <>
      <h1>Custom Hooks</h1>
      {data ? data.map((char) => <p key={char.id}>{char.name}</p>) : null}
    </>
  );
  //
}
export default App;
