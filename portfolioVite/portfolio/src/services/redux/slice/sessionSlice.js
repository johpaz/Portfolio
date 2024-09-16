import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  session:"",
  success: false,
  userType: "",
};
export const updateUserDetails = createAsyncThunk(
  'session/updateUserDetails',
  async (updatedDetails, { getState, rejectWithValue }) => {
    const state = getState();
    const userId = state.session.session._id; 
    const API_URL = import.meta.env.VITE_REACT_APP_URL;
    try {
      const response = await fetch(`${API_URL}/productor/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedDetails),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error('Failed to update user details');
      }

      const data = await response.json();
      return data.productor;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    // removeSessionState y setSessionState pueden permanecer como están
    setSessionState: (state, action) => {
      return { ...state, ...action.payload };
    },
    removeSessionState: () => {
      return initialState;
    },
  },
 
});

export const { setSessionState, removeSessionState } = sessionSlice.actions;

export default sessionSlice.reducer;
