import {createSlice} from '@reduxjs/toolkit'
export const CounterSlice=createSlice({
    name:"Counter",
    initialState:{value:0},
    reducers:{
        Increase:(state)=>{state.value+=1},
        Decrease:(state)=>{state.value-=1},
        Reset:(state)=>{state.value=0}
    }
});
export const {Increase,Decrease,Reset}=CounterSlice.actions;
export default CounterSlice.reducer;