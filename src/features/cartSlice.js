import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      if (state.items.find((item) => item.id === action.payload.id)) {
        state.items.find((item) => item.id === action.payload.id).qty += 1;
      } else {
        state.items.push(action.payload);
      }
    },

    increaseCount: (state, action) => {
      state.items.find((item) => item.id === action.payload).qty += 1;
    },
    decreaseCount: (state, action) => {
      state.items.find((item) => item.id === action.payload).qty -= 1;
    },
  },
});

export default cartSlice.reducer;
export const { addtocart, increaseCount, decreaseCount, cartTotal } =
  cartSlice.actions;
