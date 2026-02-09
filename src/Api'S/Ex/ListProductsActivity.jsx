import axios from "axios";
import { useEffect, useState } from "react";
import {img} from "./containerImage";
export default function ListProductsActivity(){
    const [list,setList]=useState([]);
    useEffect(()=>{
        axios.get("https://x-com-api.com/products")
        .then(res=>setList(res.data))
        .catch(err=>console.error(err))
    },[]) 
    return(
        <div>
            <h1>La liste des produits</h1>
            <hr />
            {
                list.map((i)=>(
                    <>
                    <div key={i.id}>
                        <div>
                        <img src={img} width={110}/>
                        </div>
                        <h1>{i.name}</h1>
                        <p>Quantite: {i.quantity}</p>
                    </div>
                    </>
                ))
            }
        </div>
    );
}