import { configureStore } from "@reduxjs/toolkit";
import theSlice from "./sliceTodo";
export const Store=configureStore({
    reducer:{
        todo:theSlice
    }
});