function Character({ char }) {
  return (
    <article>
      <h2>{char.name}</h2>
      <p>{char.species}</p>
      <img src={char.image} alt={`Imagen de ${char.name}`} />
    </article>
  );
}
export default Character;
