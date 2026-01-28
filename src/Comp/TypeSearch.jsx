import { useState } from "react";
export default function TypeSearch() {
  const Fruits = [
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
  ];
  const [inpt,setInpt]=useState("");
  const [search,setSearch]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    setSearch(inpt);
  };
  const Filtred=Fruits.filter(i=>i.type.includes(search.toLowerCase().trim()));
  return(
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={inpt} onChange={(e)=>setInpt(e.target.value)}/><br/><br/>
      <button type="submit">Search</button>
    </form>
  <ul>
    {search&&Filtred.map((i)=>(
        <li key={i.nom}>{i.nom}</li>
      ))
    }
  </ul>
    </>
  );
}
