import { connect } from "react-redux";

function TaskList() {
  return (
    <>
      <h1>Lista de tareas</h1>

      <button>Añadir Tarea</button>
      <ul></ul>
    </>
  );
}
const mapState = (state) => {
  return {
    tasks: state.tasks,
  };
};
const mapDispatch = (dispatch) => {
  return {
    add: (text) => dispatch({ type: "ADD", payload: text }),
  };
};
export default connect(mapState, mapDispatch)(TaskList);
