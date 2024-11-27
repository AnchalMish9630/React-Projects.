import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        itemCart: []
    },
    reducers: {
        addItem: (state, action)=>{
           //mutating state here
            state.itemCart.push(action.payload);
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
