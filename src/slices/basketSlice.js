import { createSlice } from "@reduxjs/toolkit"; //import the redix toolkit

const initialState = {
  items: [], //global items variable
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    //Actions
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    }, //action has a payload inside it
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id
        );

        let newBasket = [...state.items]; 

        if (index >= 0) {
          //the item exists in the basket...remove it...
          newBasket.splice(index, 1)
        } else {
          console.warn(
            `can't remove product (id: ${action.payload.id}) as it's not in the basket`
          );
        }

        state.items = newBasket;

    },
  },
});


export const { addToBasket, removeFromBasket } = basketSlice.actions; //export as this so can use througout the application

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items; //selectItems accesses the state
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
