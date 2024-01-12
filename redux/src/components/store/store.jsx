import { createStore } from "redux";
const incrementAction = { type: "INCREMENT" };
const counterReducer = (state = { count: 0 }, action) => {
  console.log(state);
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
};
const storeCounter = createStore(counterReducer);
export default storeCounter;
