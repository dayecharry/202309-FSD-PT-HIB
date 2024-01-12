import { createStore } from "redux";

const taskReducer = (state = { tasks: [] }, action) => {
  //type, payload
  switch (action.type) {
    case "ADD":
      return {
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      };
    default:
      return state;
  }
};
const storeTask = createStore(taskReducer);
export default storeTask;
