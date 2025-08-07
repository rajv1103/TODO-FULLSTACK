export default function Todo({ todo, setodo }) {
  const markAsDone = async (id) => {
    try {
      const response = await fetch("http://localhost:3000/completed", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        setodo((prevTodos) =>
          prevTodos.map((item) =>
            item._id === id ? { ...item, done: true } : item
          )
        );
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <div className="todo-container">
      {todo.map((item, index) => (
        <div key={index} className="todo-item">
          <h1>{item.title}</h1>
          <h2>{item.desc}</h2>
          <button
            className={item.done ? "done-button" : ""}
            onClick={() => {
              if (!item.done) markAsDone(item._id);
            }}
          >
            {item.done ? "Done" : "Mark as Done"}
          </button>
        </div>
      ))}
    </div>
  );
}
