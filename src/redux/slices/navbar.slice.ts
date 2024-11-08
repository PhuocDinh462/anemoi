import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    logoStatus: false
  },
  reducers: {
    showLogo: (state) => {
      state.logoStatus = true;
    },
    hideLogo: (state) => {
      state.logoStatus = false;
    }
  }
});

export const { showLogo, hideLogo } = navbarSlice.actions;

export const selectLogoStatus = (state: RootState) => state.navbar.logoStatus;

export default navbarSlice.reducer;
