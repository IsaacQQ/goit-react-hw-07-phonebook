import { TableTh, DeleteBtn } from './listContacts.styled';


export const ContactsListItem = ({ id, name, number, removeContact }) => {
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