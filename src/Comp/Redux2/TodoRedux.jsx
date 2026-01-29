import { useState } from "react";
import {useSelector,useDispatch} from "react-redux";
export default function TodoRedux(){
  const todos=useSelector(state=>state.todo);
  const dispatch=useDispatch();
  const [input,setInput]=useState("");
  return(
    <>
    <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
    <button onClick={()=>{
      if(!input.trim()) return;
      dispatch({type:"ADD",payload:input.trim()});
      setInput("");
      }}>add</button>
      <br />
      <hr />
      <br />
      {todos.length!=[]&&(
      <table border={2}>
        <thead>
          <tr>
            <th>todo</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item,index)=>(
            <tr key={index}>
              <td>{item}</td>
              <td>
                <button onClick={()=>{dispatch({type:"DELETE",payload:{index}})}}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </>
  );
}