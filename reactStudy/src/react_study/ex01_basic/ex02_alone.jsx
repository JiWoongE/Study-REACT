import { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      console.error("error");
  }
}

export default function ReducerCounter() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <>
      <button onClick={() => dispatch({ type: "INCREMENT" })}></button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}></button>
    </>
  );
}
