import * as api from '../../shared/api/contacts';
import { createAsyncThunk } from '@reduxjs/toolkit';

const isDublicate = ({ name }, contacts) => {
  const normalizedName = name.toLowerCase();

  const result = contacts.find(item => {
    return normalizedName === item.name.toLowerCase();
  });
  return Boolean(result);
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      if (isDublicate(data, contacts.items)) {
        return alert(`${data.name} is already in contacts`);
      }
    },
  }
);

export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await api.removeContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);