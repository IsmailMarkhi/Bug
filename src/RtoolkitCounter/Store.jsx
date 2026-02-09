import { configureStore } from "@reduxjs/toolkit";
import TheSlice from "./CounterSlice";
export const Store=configureStore({
    reducer:{Counter:TheSlice}
})