import { memo } from 'react';
import { TableTh, DeleteBtn } from './listContacts.styled';
const ContactsListItem = ({ id, name, number, removeContact }) => {
  return (
    <tr>
      <TableTh>{name}</TableTh>
      <TableTh>{number}</TableTh>
      <TableTh>
        <DeleteBtn type="button" onClick={() => removeContact(id)}>
          Delete
        </DeleteBtn>
      </TableTh>
    </tr>
  );
};

export default memo(ContactsListItem);