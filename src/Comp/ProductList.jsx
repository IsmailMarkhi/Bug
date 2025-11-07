export default function ProductList() {
  const prods = ["Laptop", "Phone", "Camera", "Watch"];

  return (
    <ul className="p-4 bg-gray-100 rounded-lg w-fit">
      {prods.map((item, id) => (
        <li
          key={id}
          className="cursor-pointer px-4 py-2 bg-white my-2 rounded-md shadow-sm hover:bg-blue-100 transition"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
