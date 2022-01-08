import { configureStore } from "@reduxjs/toolkit";
import favouriteQuoteSlice from "./favouriteQuote-slice";
import uiSlice from "./ui-slice";


const store = configureStore({
  reducer: { favouriteQuote: favouriteQuoteSlice.reducer, ui: uiSlice.reducer },
});

export default store;
