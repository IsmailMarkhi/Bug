import axios from "axios";
import { useState, useEffect } from "react";
export default function ApiLap() {
  const [cart, setCart] = useState([]);
  const [laps, setLaps] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/laptops")
      .then((res) => setLaps(res.data.products))
      .catch((err) => console.error(err));
  }, []);
  
  return(
  <>
  <nav><a href="">Cart </a><span className="bg-black text-white text-xl px-2 rounded-full">{cart.length || 0}</span></nav>
  <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 p-2 border">
    {
        laps.map((item)=>(
            <section key={item.id} className="flex flex-col items-center space-y-1 ">
                <img src={item.thumbnail}/>
                <div>
                    <p>price : {item.price} $</p>
                    <p>stock : {item.stock}</p>
                </div>
                <button onClick={()=>setCart([...cart,item])} className="bg-blue-600 p-3 text-white hover:bg-blue-700 mb-1 transition duration-300">Add To Cart</button>
            </section>
        ))
    }
  </main>
  </>
);
}
