import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

//the global store set up
export const store = configureStore({
  reducer: {
    basket: basketReducer, //one slice of the redux store (like an onion)
  },
});
