import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        itemCart: []
    },
    reducers: {
        addItem: (action, state)=>{
           //mutating state here
            state.itemCart.push();
        },
        removeItem:(state)=>{
            state.itemCart.pop();
        },
        clearCart: (state)=>{
            state.itemCart.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart}= cartSlice.actions;
export default cartSlice.reducer;