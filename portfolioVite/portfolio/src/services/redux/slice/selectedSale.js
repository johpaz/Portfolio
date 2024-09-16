// salesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedSale: null,
};

const salesSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {
    setSelectedSale: (state, action) => {
      state.selectedSale = action.payload;
    },
  },
});

export const { setSelectedSale } = salesSlice.actions;

export default salesSlice.reducer;
