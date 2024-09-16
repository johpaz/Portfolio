import { createSlice } from "@reduxjs/toolkit";

const stateSlice = {
  accessToken: null,
  email: null,
  displayName:null,
  photoURL: null
};

const authSlice = createSlice({
  name: "auth",
  initialState: stateSlice,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken, email, displayName,photoURL } = action.payload;
      
      return {
        ...state,
        accessToken,
        email,
        displayName,
        photoURL
      };
    },
    logOut: (state) => {
      return {
        ...state,
        accessToken: null,
        email: null,
        displayName : null,
        photoURL : null
      };
    },
  },
});
export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
