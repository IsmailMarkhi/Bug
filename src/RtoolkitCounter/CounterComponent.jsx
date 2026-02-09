import {Increase,Decrease,Reset} from "./CounterSlice"
import {useSelector,useDispatch} from "react-redux"
export default function CounterComponent(){
    const dispatch=useDispatch();
    const Counter=useSelector((state)=>state.Counter.value);
    return(
    <center>
        <h1>{Counter}</h1>
        <button onClick={()=>{dispatch(Increase())}}>Increase</button>
        <button onClick={()=>{dispatch(Reset())}}>Reset</button>
        <button onClick={()=>{dispatch(Decrease())}}>Decrease</button>
    </center>
    );
}