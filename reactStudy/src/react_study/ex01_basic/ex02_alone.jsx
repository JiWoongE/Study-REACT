import { useState } from "react";

export default function ToDoLists() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [isZoomed, setIsZoomed] = useState(false);

  const doingTodos = todos.filter((todo) => !todo.done);
  const doneTodos = todos.filter((todo) => todo.done);

  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        done: false,
      },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>To Do List</h1>
      <div>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button onClick={addTodo}>추가</button>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.text}</div>
        ))}
      </div>

      <div>
        <div>
          <h2>진행중</h2>
          {doingTodos.map((todo) => {
            <div key={todo.id}>
              {todo.text}
              <button>완료처리</button>
              <button onClick={() => deleteTodo(todo.id)}>삭제</button>
            </div>;
          })}
        </div>
      </div>

      <div>
        <div>
          <h2>완료</h2>
          <button onClick={() => deleteTodo(todo.id)}>삭제</button>
        </div>
      </div>
    </>
  );
}
