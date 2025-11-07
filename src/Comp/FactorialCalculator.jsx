import { useMemo, useState } from "react";

export default function FactorialCalculator() {
  const [number, setNumber] = useState(0);

  const calculFactorial = (n) => {
    
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
  };

  const factorial = useMemo(() => calculFactorial(number), [number]);

  return (
    <div className="flex flex-col gap-4 items-center justify-center p-4 bg-gray-100 rounded-lg w-[20rem] mx-auto mt-8 shadow-md">
      <input
        type="number"
        className="border px-3 py-2 rounded w-full outline-none focus:ring focus:ring-blue-300"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
      />
      {number >= 0 ? (
        <p className="text-blue-600 font-semibold">
          Factorial of {number} is {factorial}
        </p>
      ) : (
        <p className="text-red-500 font-semibold">Invalid number</p>
      )}
    </div>
  );
}
