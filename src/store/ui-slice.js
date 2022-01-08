import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    homePage: true,
    favouriteQuotesPage: false,
    isClick: false,
  },
  reducers: {
    showHomePage(state) {
      state.homePage = true;
      state.favouriteQuotesPage = false;
    },
    showFavouriteQuotesPage(state) {
      state.favouriteQuotesPage = true;
      state.homePage = false;
    },
    toggleClick(state) {
      state.isClick = !state.isClick;
    },
    setInitialState(state) {
      state.isClick = false;
      state.homePage = true;
      state.favouriteQuotesPage = false;
    },
  },
});

export default uiSlice;
export const uiActions = uiSlice.actions;
