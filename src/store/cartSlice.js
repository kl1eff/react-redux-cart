import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    add: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      item ? item.amount++ : state.items.push({ ...action.payload, amount: 1 });
      state.total = state.items.reduce((acc, item) => acc + item.price * item.amount, 0)
      
      localStorage.setItem('items', JSON.stringify(state.items));
      localStorage.setItem('total', state.total);
    },
    
    remove: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item.amount === 1) state.items = state.items.filter((item) => item.id !== action.payload)
      else item.amount--;
      
      state.total = state.items.reduce((acc, item) => acc + item.price * item.amount, 0);
      
      localStorage.setItem('items', JSON.stringify(state.items));
      localStorage.setItem('total', state.total);
    },
    setState: (state, action) => {
     state.items = action.payload.items;
     state.total = action.payload.total;
    },
  },
});

export const { add, remove, setState } = cartSlice.actions;
export default cartSlice.reducer;