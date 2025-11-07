import { useState } from "react";

export default function TodoApp() {
  const [inpt, setInpt] = useState("");
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    if (!inpt.trim()) return;
    setTodos([...todos, inpt.trim()]);
    setInpt("");
  };

  const handleDelete = (i) => {
    setTodos(todos.filter((_, id) => i !== id));
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-lg w-fit mx-auto mt-8 shadow-md">
      <h2 className="text-xl font-bold">Todo List</h2>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex gap-2 items-center"
      >
        <input
          type="text"
          value={inpt}
          onChange={(e) => setInpt(e.target.value)}
          placeholder="Write a task..."
          className="border border-gray-400 rounded px-3 py-2 outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Add
        </button>
      </form>

      <ul className="w-full">
        {todos.length === 0 ? (
          <p className="text-gray-500 text-center mt-2">No todos yet 😴</p>
        ) : (
          todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-white px-4 py-2 rounded my-2 shadow-sm"
            >
              <span>{todo}</span>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
