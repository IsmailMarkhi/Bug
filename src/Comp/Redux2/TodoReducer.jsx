const initial={todo:[]};
export const TodoReducer=(state=initial,action)=>{
    switch(action.type){
        case"ADD":return{...state,todo:[...state.todo,action.payload]};
        case"DELETE":return{...state,todo:state.todo.filter((_,id)=>id!==action.payload.index)};
        default:return state;
    }
};