import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from './operations';
import { logOut } from 'redux/auth/authOperations';

const handlePending = (state, action) => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = action.payload;
};

const handleReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleReject)
      .addCase(fetchContacts.fulfilled, handleFulfilled)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleReject)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleReject)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = state.contacts.filter(
          el => el.id !== action.payload.id
        );
      })
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.rejected, handleReject)
      .addCase(logOut.fulfilled, (state, action) => {
        state.contacts = [];
        state.error = null;
        state.isLoading = false;
      })
      .addCase(updateContact.pending, handlePending)
      .addCase(updateContact.rejected, handleReject)
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = state.contacts.map(el => {
          if (el.id === action.payload.id) {
            return action.payload;
          }
          return el;
        });
      });
  },
});

export default contactsSlice.reducer;
