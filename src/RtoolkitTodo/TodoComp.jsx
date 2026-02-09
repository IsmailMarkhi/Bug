import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddToList, DeleteFromList, EditFromList } from "./sliceTodo";
export default function TodoComp() {
  const Todos = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();
  const [td, setTd] = useState("");
  const [id, setId] = useState(null);
  const [theNew, setTheNew] = useState("");
  return (
    <>
      <input type="text" value={td} onChange={(e) => setTd(e.target.value)} />
      <button
        onClick={() => {
          if (!td.trim()) return;
          dispatch(AddToList(td.trim()));
          setTd("");
        }}
      >
        Add
      </button>
      <br />
      <ul>
        {Todos.map((i, index) => (
          <li key={index}>
            {i}
            <button onClick={() => dispatch(DeleteFromList({ index }))}>
              Delete
            </button>
            <button
              onClick={() => {
                setId(index);
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
      {id !== null ? (
        <>
          <input
            type="text"
            value={theNew}
            onChange={(e) => {
              setTheNew(e.target.value);
            }}
          />
          <button
            onClick={() => {
              if (!theNew.trim()) return;
              dispatch(EditFromList({ index: id, text: theNew.trim() }));
              setId(null);
              setTheNew("");
            }}
          >
            Save
          </button>
        </>
      ) : null}
    </>
  );
}
