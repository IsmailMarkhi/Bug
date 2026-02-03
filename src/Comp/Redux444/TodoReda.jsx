import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
export default function TodoReda(){
    const dispatch=useDispatch();
    const To=useSelector(state=>state.Todos);//List
    const [task,setTask]=useState("");
    const [NewTask,setNewTask]=useState("");
    const [Num,setNum]=useState(null);
    return(<>
    <input type="text" value={task} onChange={e=>setTask(e.target.value)}/>
    <button onClick={()=>{
        dispatch({type:"ADD",payload:task});
        setTask("");
        }}>Add</button>
    <br /><br />
    {Num!==null &&
    (<>
    <input type="text" value={NewTask} onChange={e=>setNewTask(e.target.value)}/>
    <button onClick={()=>{
        dispatch({type:"UPDATE",payload:{index:Num,task:NewTask}});
        setNum(null);
        }}>Save</button>
    </>)
    }
    <br />
    <ul>
        {To.map((item)=>(
            <li key={item.id}>{item.task}
            <button onClick={()=>{dispatch({type:"DELETE",payload:{index:item.id}})}}>delete</button>
            <button onClick={()=>{
                setNum(item.id);
                setNewTask(item.task)
                }}>Update</button>
            </li>
        ))}
    </ul>
    </>);
}