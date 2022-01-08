import { createSlice } from "@reduxjs/toolkit";

const favouriteQuoteSlice = createSlice({
  name: "favouriteQuote",
  initialState: {
    favouriteQuotes: [],
  },
  reducers: {
    addToFavourite(state, action) {
      const newQuote = action.payload;
      state.favouriteQuotes.push({
        id: newQuote.id,
        content: newQuote.content,
        author: newQuote.author,
      });
    },
    removeFromFavourite(state, action) {
      const id = action.payload;
      state.favouriteQuotes = state.favouriteQuotes.filter(
        (quote) => quote.id !== id
      );
    },

    replaceFavourite(state, action) {
      state.favouriteQuotes = action.payload;
    },
  },
});

// const sendFavouriteQuotes = (quotesData) => {
//   return (dispatch) => {
//     dispatch();
//   };
// };

export default favouriteQuoteSlice;

export const favouriteQuoteActions = favouriteQuoteSlice.actions;
