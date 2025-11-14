import { useState } from "react";
import i1 from "./i1.png";
import i2 from "./i2.png";
import i3 from "./i3.png";
import i4 from "./i4.png";
export default function Indice(){
    const[tail,setTail]=useState("")
    const[poid,setPoid]=useState("")
    const[err,setErr]=useState("")
    const[disc,setDisc]=useState("")
    const[img,setImg]=useState("")
    const Check=()=>{
        {Number(tail)<100?setErr("Taille should be >100"):
         Number(tail)%1 !==0?setErr("Taille should be integerr"):""
        }
    }
    const Imc=Number(poid)/(Number(tail)/100**2)
    const Calcul=()=>{
        if(Imc>18.5 && Imc<25){
            setDisc("poids ideal / optimal")
            setImg(i1)
        }
        else if(Imc>25 && Imc<30){
            setDisc("surpoids")
            setImg(i2)
        }
        else if(Imc>30 && Imc<35){
            setDisc("obesite (de classe 1)")
            setImg(i3)
        }
        else if(Imc>35 && Imc<40){
            setDisc("obesite severe (de classe 2)")
            setImg(i4)
        }
        else if(Imc>=40){
            setDisc("obesite tres severe (de classe 3)")
            setImg(i4)
        }                
    }
    return(
        <>
        <form onSubmit={(e)=>{e.preventDefault()}}>
            Taille en CM:<br />
            <input type="text" value={tail} onChange={(e)=>setTail(e.target.value)}/>
            <p className="text-danger">{err}</p>
            <br/>
            Poids ideal:<br />
            <input type="text" value={tail} onChange={(e)=>setPoid(e.target.value)}/><br />
            <button type="button" onClick={Calcul}>Calculer</button>
        </form>
        <section>
            Decision:<br />
            <div>
                <p>{disc}</p><div><img src={img} alt={dics} /></div>
            </div>
        </section>
        </>
    )
}