import { connect } from "react-redux";
function Counter({ count, increment }) {
  return (
    <div>
      <button onClick={increment}>Incrementar</button>
      <p>Contador: {count}</p>
    </div>
  );
}
const mapStateProps = (state) => {
  console.log(state);
  return { count: state.count };
};
const mapDispatch = (dispatch) => {
  return {
    increment: () => {
      dispatch({ type: "INCREMENT" });
    },
  };
};
export default connect(mapStateProps, mapDispatch)(Counter);
