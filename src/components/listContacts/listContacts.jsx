import {ContactsListItem} from './listContactItem';
import { Table } from './listContacts.styled';
import { removeContact } from 'redux/contacts/contact-operation';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selectors';

export function ListContact  ({ items }) {
  const contacts = useSelector(getFilter);
  const dispatch = useDispatch();
  const onRemoveContact = id => {
    const action = removeContact(id);
    dispatch(action);
  };


  const elements = contacts.map(item => (
    <ContactsListItem key={item.id} {...item} removeContact={onRemoveContact} items={contacts}/>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>PHONE NUMBER</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{elements}</tbody>
    </Table>
  );
};








