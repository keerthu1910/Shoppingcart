import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items:[],
    
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addtocart:(state,action)=>{
            state.items.push(action.payload)
        },
        increaseCount:(state,action)=>{
            state.items.filter(product => product.id === action.payload)
            // return state.user.items.map((eachItem) => { 
            //      if (eachItem.id === action.payload) {
            //        eachItem.qty = 10;
            //      }
            //      return eachItem;
            // })
            // state.items[state.items.findIndex(item=>item.id === action.payload)].qty += 1
           
        }
    }
})


export default cartSlice.reducer
export const {addtocart,increaseCount} = cartSlice.actions