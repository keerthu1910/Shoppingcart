import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count:0
}

const quantityslice = createSlice({
    name:'quantity',
    initialState,
    reducers:{
        increment:(state)=>{
            state.count++
        },
        decrement:(state)=>{
            state.count--
        }
    }
})

export default quantityslice.reducer
export const {increment,decrement} = quantityslice.actions