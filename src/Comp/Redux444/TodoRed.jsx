const initialState={Todos:[]};
export const TodoRed=(state=initialState,action)=>{
    switch(action.type){
        case "ADD":
            return{...state,Todos:[...state.Todos,{id:Date.now(),task:action.payload}]};
        case "DELETE":
            return{...state,Todos:state.Todos.filter((i)=>i.id!==action.payload.index)};
        case "UPDATE":
            return{...state,Todos:state.Todos.map((list)=>(list.id==action.payload.index?{...list,task:action.payload.task}:list))}
        default:
            return state;
    }
}