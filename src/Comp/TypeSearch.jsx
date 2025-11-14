import { useState } from "react";
export default function TypeSearch() {
  const Liste = [
    { nom: "banane", type: "fruit" },
    { nom: "orange", type: "fruit" },
    { nom: "pomme", type: "fruit" },
    { nom: "raisins", type: "fruit" },
    { nom: "kiwi", type: "fruit" },
    { nom: "tomate", type: "legume" },
    { nom: "carotte", type: "legume" },
    { nom: "pomme de terre", type: "legume" },
    { nom: "navet", type: "legume" },
    { nom: "poivron", type: "legume" },
  ];//cont(type)==type[Liste]==>Liste(nom)
  const [cont, setCont] = useState([]);
  const [srh, setSrh] = useState("");

  const Result=Liste.filter((i,id)=>(i.type==cont));
  return (
    <>
      <input type="search" value={srh}
        onChange={(e) => setSrh(e.target.value)}
      />
      <br />
      <button type="button" onClick={()=>{setCont([...cont,srh.toLocaleLowerCase()])}}>Cherher</button>
      <br />
      <label>le type: {srh}</label>
      <br />
      {
        Result.map((item,id)=>(<ul key={id}><li>{item.nom}</li></ul>))
      }
    </>
  );
}
