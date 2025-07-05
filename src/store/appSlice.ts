import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export default AppSlice;

export const { toggleMenu } = AppSlice.actions;
