import {createSlice} from '@reduxjs/toolkit';
export const sliceTodo=createSlice({ 
    name:"todo",
    initialState:{list:[]},
    reducers:{
        AddToList:(state,action)=>{state.list.push(action.payload)},
        DeleteFromList:(state,action)=>{state.list=state.list.filter((_,id)=>(id!==action.payload.index))},
        EditFromList:(state,action)=>{state.list=state.list.map((item,id)=>(
            id==action.payload.index?action.payload.text:item
        ))}
    }
}
);
export const {AddToList,DeleteFromList,EditFromList}=sliceTodo.actions;
export default sliceTodo.reducer;