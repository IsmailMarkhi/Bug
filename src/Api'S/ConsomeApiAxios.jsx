import axios from"axios"
import { useEffect, useState } from "react";
export default function ConsomeApiAxios(){
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").
        then(res=>setUsers(res.data)).
        catch(err=>console.error(err))
    },[]);
    return(
        <>
        <ul>
            {
                users.map(i=>(
                    <li key={i.id}>{i.name}</li>
                ))
            }
        </ul>
        </>
    );
}