import { useState } from "react";

export default function Status() {
  const [isonline, setIsOnline] = useState(false);
  return (
    <div>
      <div>
        {isonline?"Online 🟢":"Offline 🔴"}
      </div>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" onClick={()=>{setIsOnline(!isonline)}}>Toggle</button>
    </div>
  );
}
