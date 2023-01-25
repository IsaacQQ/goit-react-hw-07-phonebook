import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './contact-operation';
import { pendingCallback, rejectedCallback } from '../../shared/helpers/redux';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: pendingCallback,
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [fetchContacts.rejected]: rejectedCallback,
    [addContact.pending]: pendingCallback,
    [addContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    [addContact.rejected]: rejectedCallback,
    [removeContact.pending]: pendingCallback,
    [removeContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },
    [removeContact.rejected]: rejectedCallback,
  },
});

export default contactsSlice.reducer;