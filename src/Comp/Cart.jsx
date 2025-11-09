import { useState, useCallback } from "react";

function Prod({ name, addFct }) {
  return (
    <div className="flex items-center justify-between bg-white shadow-sm p-3 rounded-md w-72">
      <p className="text-gray-800 font-medium">{name}</p>
      <button
        onClick={() => addFct(name)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition"
      >
        Add To Cart
      </button>
    </div>
  );
}

export default function Cart() {
  const [cart, setCart] = useState([]);
  const Products = ["Laptop", "Phone", "Camera"];

  const handleAdd = useCallback((item) => {
    setCart((prev) => [...prev, item]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-6 p-6">
      <h1 className="text-2xl font-bold text-gray-800">Cart App</h1>

      <div className="flex flex-col gap-3">
        {Products.map((i, id) => (
          <Prod key={id} name={i} addFct={handleAdd} />
        ))}
      </div>

      <div className="bg-white rounded-md shadow-md p-4 w-72">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Items:</h2>
        <ul className="list-disc list-inside text-gray-700">
          {cart.map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul>
        {cart.length === 0 && (
          <p className="text-gray-500">No items in cart</p>
        )}
      </div>
    </div>
  );
}
