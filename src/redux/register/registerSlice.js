import { createSlice } from '@reduxjs/toolkit';
import {
  fetchLoginUser,
  fetchRegisterUser,
} from '../register/operationsRegister';

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchRegisterUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(fetchLoginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      });
  },
});

export default registerSlice.reducer;
