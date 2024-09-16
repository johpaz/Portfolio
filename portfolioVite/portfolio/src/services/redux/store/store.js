import { configureStore } from "@reduxjs/toolkit";
import session from "../slice/sessionSlice";
import user from "../slice/userSlice";
import auth from "../slice/authSlice";
import cart from "../slice/cartSlice";
import marketPlace from "../slice/marketPlaceSlice"
import selectedSale from "../slice/selectedSale";

export const store = configureStore({
  reducer: {
    session,
    user,
    auth,
    cart,
    marketPlace,
    selectedSale
  }
});
