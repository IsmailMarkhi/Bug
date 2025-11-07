import {useEffect, useRef} from "react"
export default function FocusInput(){
    const emailRef=useRef();
    const nameRef=useRef();
    useEffect(()=>{
        nameRef.current.focus();
    },[])

    const handleClick=()=>{
        emailRef.current.focus();
    };
    return(
        <div className="flex flex-col items-center justify-center gap-3 bg-gray-500 p-3 mx-auto w-[24rem] h-[13rem] rounded-sm">
            <input type="text" ref={nameRef} className="focus:ring focus:ring-sky-300 rounded-sm outline-none px-4 py-1 placeholder:text-gray-400 bg-white" placeholder="Enter your name"/>
            <input type="email" ref={emailRef} className="focus:ring focus:ring-sky-300 rounded-sm outline-none px-4 py-1 placeholder:text-gray-400 bg-white" placeholder="Enter your email"/>
            <button onClick={handleClick} className="bg-sky-500 hover:bg-sky-600 text-white p-1 w-24 rounded-sm transition duration-300 hover:scale-110">Focus email</button>
        </div>
    )
}