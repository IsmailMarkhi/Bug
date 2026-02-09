import { Route,Routes,BrowserRouter } from "react-router-dom";
import ApiParams from"./ApiParams";
export default function Routing(){
    return(
        <BrowserRouter>
           <Routes>
             <Route path="*" element="User Not Found"/>
             <Route path="/users/:id" element={<ApiParams/>}/>
           </Routes>
        </BrowserRouter>
    )
}