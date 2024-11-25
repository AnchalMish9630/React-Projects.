import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "food-cart",
    initialState:{
        itemCart: []
    },
    reducers: {
        addItem: (action, state)=>{
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