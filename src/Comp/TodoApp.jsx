import {useState } from "react";

export default function TodoApp() {
const [inpt,setInpt]=useState("");
const [Todos,setTodos]=useState([]);
//Edit useStates
const [IndexEdit,setIndexEdit]=useState(null);
const [New,setNew]=useState("");
return(
  <>
  <input type="text" placeholder="ENTER TODO..." value={inpt} onChange={(e)=>{setInpt(e.target.value)}}/>
  <button onClick={()=>{
    if (!inpt.trim()) return;
    setTodos([...Todos,inpt.trim()]);
    setInpt("");
    }}>add</button>
  <br /><br />
  {IndexEdit!==null&&(
    <>
    <input type="text" placeholder="EDIT HERE..." value={New} onChange={(e)=>setNew(e.target.value)}/>
    <button onClick={()=>{
      if (!New.trim()) return;
      setTodos(
        Todos.map((elem,ii)=>(
          IndexEdit===ii?New.trim():elem
        ))
      );
      setIndexEdit(null);
      setNew("");
    }}>Save</button>
    <br /><br />
    </>
  )
  }
  <table border={2}>
    <thead>
      <tr>
        <th>Todos</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        Todos.map(
          (item,index)=>(
            <tr key={index}>
              <td>{item}</td>
              <td>
                <button onClick={()=>setTodos(Todos.filter((_,id)=>id!==index))}>Delete</button>
                <button onClick={()=>{
                  setIndexEdit(index);
                }}>Edit</button>
              </td>
            </tr>
          )
        )
      }
    </tbody>
  </table>
  </>
);
}
