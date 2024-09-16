import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = action.payload;
      const existingItem = state.cart.find(item => item._id === itemToAdd._id);

      if (existingItem) {
        // Si el elemento ya está en el carrito, aumenta la cantidad
        existingItem.amount += 1;
      } else {
        // Si el elemento no está en el carrito, agrégalo con cantidad 1
        state.cart.push({ ...itemToAdd, amount: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      console.log(idToRemove);
      state.cart = state.cart.filter(item => item._id !== idToRemove);
    },
    deleteCart: (state) => {
      state.cart = [];
    },
    changeAmount: (state, action) => {
      const { id, amount } = action.payload;
      const itemToChange = state.cart.find(item => item._id === id);
      if (itemToChange) {
        // Verifica que el elemento exista en el carrito antes de cambiar la cantidad
        itemToChange.amount = amount;
      }
    },
  },
});

export const { addToCart, removeFromCart, deleteCart, changeAmount } = cartSlice.actions;

export default cartSlice.reducer;
