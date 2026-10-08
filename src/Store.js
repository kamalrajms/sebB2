import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./Slice/customerSlice"

export const store=configureStore({
    reducer:{
        customer:customerSlice,
    }
})