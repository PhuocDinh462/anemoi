import { createSlice } from '@reduxjs/toolkit';

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    showLogo: false
  },
  reducers: {
    showLogo: (state) => {
      state.showLogo = true;
    },
    hideLogo: (state) => {
      state.showLogo = false;
    }
  }
});

export const { showLogo, hideLogo } = navbarSlice.actions;

export default navbarSlice.reducer;
