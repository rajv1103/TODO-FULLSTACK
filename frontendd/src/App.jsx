import { useState, useEffect } from "react";
import "./App.css";
import Createtodo from "./comp/Createtodo";
import Todo from "./comp/Todo";

function App() {
  const [todo, setodo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todo")
      .then(async (res) => {
        const json = await res.json();
        setodo(json.todos); // Ensure this matches the API response key
      })
      .catch((error) => console.error("Error fetching todos:", error));
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <>
      <Createtodo />
      <Todo todo={todo} setodo={setodo} />
    </>
  );
}

export default App;
