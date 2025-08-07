import { useState } from "react";

export default function Createtodo() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [done, setDone] = useState(false);

  return (
    <div className="add-todo">
      <input
        type="text"
        className="todo-input"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        className="todo-input"
        placeholder="Description"
        onChange={(e) => setDesc(e.target.value)}
      />
      <br />
      <label className="todo-checkbox">
        <input
          type="checkbox"
          checked={done}
          onChange={(e) => setDone(e.target.checked)}
        />
        Mark as Done
      </label>
      <br />
      <button className="add-todo-button"
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, desc, done }),
          })
            .then(async (res) => {
              const json = await res.json();
              alert("To-do added successfully!");
            })
            .catch((error) => console.error("Error adding to-do:", error));
        }}
      >
        Add To-Do
      </button>
    </div>
  );
}
