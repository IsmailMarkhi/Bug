import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
const fetchUsers=createAsyncThunk(
    "users/fetchUsers",
    async()=>{
        const response=await fetch("api");
        const data=await response.json();
        return data;
    }
)
const usersSlice=createSlice({
    name:"lkkk",
    initialState:{
        list:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.
        addCase(fetchUsers.pending,(state)=>{
            state.loading=true,
            state.error=null
        })
        addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false,
            state.list=action.payload
        })
        addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false,
            state.error=action.payload.message
        })
    }
});
export default usersSlice.reducer;