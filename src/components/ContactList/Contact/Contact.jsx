import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/thunks';
import {
  ContactInfo,
  ContactItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './Contact.styled';
import { selectContacts } from 'redux/selectors';
import { deleteContact } from 'api/contactsApiNew';

export const Contact = ({ name, number, id }) => {
  const { isLoading } = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    deleteContact(id);
    // dispatch(deleteContactThunk(id));
  };

  return (
    <ContactItem>
      <ContactInfo>
        <ContactName>{name}:</ContactName>
        <ContactNumber>{number}</ContactNumber>
      </ContactInfo>
      <DeleteButton
        type="button"
        onClick={() => handleDeleteContact(id)}
        disabled={isLoading}
      >
        Delete
      </DeleteButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
