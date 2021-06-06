import { createSlice } from "@reduxjs/toolkit"; //import the redix toolkit

const initialState = {
  items: [], //global items variable
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    //Actions
    addToBasket: (state, action) => {}, //action has a payload inside it
    removeFromBasket: (state, action) => {},
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions; //export as this so can use througout the application

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items; //selectItems accesses the state

export default basketSlice.reducer;
