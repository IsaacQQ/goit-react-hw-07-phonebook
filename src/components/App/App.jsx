import Form from '../form/form';
import {ListContact} from '../listContacts/listContacts';
import { Filter } from '../filter/filter';
import { Wrapper } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts
} from 'redux/contacts/contact-operation';
import { getFilter } from '../../redux/filter/filter-selectors';
import {
  getNumberOfAllContacts,
  getState,
} from 'redux/contacts/contact-selectors';
import { useEffect } from 'react';

export default function App() {
  const contacts = useSelector(getFilter);
  const { error } = useSelector(getState);
  const filter = useSelector(store => store.filter);
  const contactsCount = useSelector(getNumberOfAllContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <Form />
      <h1>Contacts</h1>
      <p>You have: {contactsCount} books in our phonebook</p>
      <Filter
        type="text"
        value={filter}
        name="filter"
        placeholder="filter"
      />
      <ListContact items={contacts} />
      {error && <p>oops, something went wrong</p>}
    </Wrapper>
  );
}