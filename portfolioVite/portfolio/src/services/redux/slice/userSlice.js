// userSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: '',
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userState: (state, action) => {
      state.clientes = action.payload;
    },
  },
});

export const { userState } = userSlice.actions;

export default userSlice.reducer;

export const registerUser = (newData) => async (dispatch) => {
  const API_URL = import.meta.env.VITE_REACT_APP_LOCALHOST;
    console.log(newData);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  };

  const URL = `${API_URL}/auth/login`;

  try {
    const response = await fetch(URL, options);
    const data = await response.json();
    // Dispatch the action with the modified data
    dispatch(userState(data));
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
};
