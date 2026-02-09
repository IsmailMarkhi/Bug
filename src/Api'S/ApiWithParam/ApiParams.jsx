import axios from"axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function ApiParams(){
    const {id}=useParams();
    const [user,setUsers]=useState(null);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).
        then(res=>setUsers(res.data)).
        catch(err=>console.error(err))
    },[id]);
    return(
        <>
        <ul>
            {
                user&&
                    <li key={user.id}>{user.name}</li>
            }
        </ul>
        </>
    );
}