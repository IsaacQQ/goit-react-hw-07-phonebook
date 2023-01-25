import Form from '../form/form';
import ListContact from '../listContacts/listContacts';
import { Filter } from '../filter/filter';
import { Wrapper } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  addContact,
  removeContact,
} from 'redux/contacts/contact-operation';
import { setFilter } from '../../redux/filter/filter-slice';
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

  const onAddContact = contact => {
    const action = addContact(contact);
    dispatch(action);
  };

  const onRemoveContact = id => {
    const action = removeContact(id);
    dispatch(action);
  };

  const handleChange = ({ target }) => {
    console.log(target.value);
    dispatch(setFilter(target.value));
  };

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <Form onSubmit={onAddContact} />
      <h1>Contacts</h1>
      <p>You have: {contactsCount} books in our phonebook</p>
      <Filter
        type="text"
        value={filter}
        name="filter"
        onChange={handleChange}
        placeholder="filter"
      />
      <ListContact items={contacts} removeContact={onRemoveContact} />
      {error && <p>oops, something went wrong</p>}
    </Wrapper>
  );
}