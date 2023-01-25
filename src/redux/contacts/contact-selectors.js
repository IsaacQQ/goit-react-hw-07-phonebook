import { createSelector } from '@reduxjs/toolkit';

export const getContacts = ({ contacts }) => contacts.items;
export const getState = ({ contacts }) => ({
  loading: contacts.loading,
  error: contacts.error,
});

export const getNumberOfAllContacts = createSelector(
  [getContacts],
  contacts => {
    return contacts.length;
  }
);