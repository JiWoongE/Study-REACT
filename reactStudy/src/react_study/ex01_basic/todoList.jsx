import { useEffect, useState } from "react";

export default function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (text.length < 5) {
      alert("5글자 이상 입력해야 합니다.");
      return;
    }

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        done: false,
      },
    ]);

    setText("");
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const doingTodos = todos.filter((todo) => !todo.done);
  const doneTodos = todos.filter((todo) => todo.done);

  const titleSize = isZoomed ? "30px" : "25px";
  const textSize = isZoomed ? "23px" : "18px";

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: titleSize }}>To Do List</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={addTodo}>추가</button>
        <button
          onClick={() => setIsZoomed((prev) => !prev)}
          style={{ marginLeft: "10px" }}
        >
          {isZoomed ? "축소" : "확대"}
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: 1 }}>
          <h2>진행중</h2>
          {doingTodos.map((todo) => (
            <div
              key={todo.id}
              style={{ fontSize: textSize, marginBottom: "10px" }}
            >
              {todo.text}
              <button
                onClick={() => toggleTodo(todo.id)}
                style={{ marginLeft: "10px" }}
              >
                완료처리
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{ marginLeft: "5px" }}
              >
                삭제
              </button>
            </div>
          ))}
        </div>

        <div style={{ flex: 1 }}>
          <h2>완료</h2>
          {doneTodos.map((todo) => (
            <div
              key={todo.id}
              style={{ fontSize: textSize, marginBottom: "10px" }}
            >
              {todo.text}
              <button
                onClick={() => toggleTodo(todo.id)}
                style={{ marginLeft: "10px" }}
              >
                진행중으로
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{ marginLeft: "5px" }}
              >
                삭제
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
