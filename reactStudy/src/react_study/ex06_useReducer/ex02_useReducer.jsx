import { useReducer } from "react";

function myReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    case "RESET":
      return { name: "", age: 0 };
    default:
      return state;
  }
}

export default function ReducerEx() {
  const [user, dispatch] = useReducer(myReducer, { name: "", age: 0 });

  return (
    <div>
      <h2>User Info</h2>
      <p>
        이름 : <strong>{user.name}</strong>
      </p>
      <p>
        나이 : <strong>{user.age}</strong>
      </p>

      <input
        type="text"
        placeholder="이름 입력"
        value={user.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="나이 입력"
        value={user.age}
        onChange={(e) => dispatch({ type: "SET_AGE", payload: e.target.value })}
      />
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        초기화
      </button>
    </div>
  );
}
