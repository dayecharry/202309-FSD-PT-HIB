import { Provider } from "react-redux";
import storeTask from "./store/store";
import TaskList from "./TaskList";
function App() {
  return (
    <>
      <Provider store={storeTask}>
        <TaskList />
      </Provider>
    </>
  );
}
export default App;
