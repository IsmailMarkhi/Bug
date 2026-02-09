// import Params from "./Markhi/Params";

// function App() {
//   const ite = [
//     { name: "flan", age: 13, email: "flan@edu.ma" },
//     { name: "med", age: 20, email: "med@edu.ma" },
//   ];

//   return (
//     <>
//       <Params name="Med" age={20} email="kkk@" />

//       {ite.map((item, id) => (
//         <p key={id}>
//           <Params
//             name={item.name}
//             age={item.age}
//             email={item.email}
//           />
//         </p>
//       ))}
//     </>
//   );
// }
import ApiParams from "./Api'S/ApiWithParam/ApiParams"
import Routing from "./Api'S/ApiWithParam/Routing"
function App(){
  return(<>
  <ApiParams/>
  <Routing/>
  </>);
}
 export default App;