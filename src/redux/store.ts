import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './slices/navbar.slice';

const store = configureStore({
  reducer: {
    navbar: navbarReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
