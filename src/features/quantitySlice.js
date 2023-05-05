import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:1
}

const quantityslice = createSlice({
    name:'quantity',
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.count = state.count + action.payload
        },
        decrement:(state,action)=>{
            state.count = state.count - action.payload
        }
    }
})

export default quantityslice.reducer
export const {increment,decrement} = quantityslice.actions