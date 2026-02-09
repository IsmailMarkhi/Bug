import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
export default function SendToApiAxios(){
    const [login,setLogin]=useState("");
    const [password,setPassword]=useState("");
    const Thenav=useNavigate();
    return(
        <form onSubmit={e=>e.preventDefault()}>
            <input type="text" placeholder="entrer votre nom"
            value={login} onChange={e=>setLogin(e.target.value)}/>
            
            <input type="password" placeholder="entrer votre nom"
            value={password} onChange={e=>setPassword(e.target.value)}/>            
            <button onClick={()=>{useEffect(()=>{
                axios.post("https://x-com-api.com/login",{login,password})
                .then(res=>{
                    if(res.access=='true'){
                        Thenav('./LobbyApi.jsx');
                    }
                    else{ return "non connecté"}
                })
                .catch(err=>console.error(err))
            },[])}}>se connecter</button>
        </form>
    )
}