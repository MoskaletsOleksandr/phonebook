import { useState } from 'react';
import {
  // useDispatch,
  useSelector,
} from 'react-redux';
import { selectContacts } from 'redux/selectors';
// import { addContactThunk } from 'redux/thunks';
import { checkContactExists } from 'utils/contactUtils';
import { Button } from 'components/common/Button';
import { Loader } from 'components/common/Loader';
import { Form } from 'components/common/Form';
import { Label } from 'components/common/Label';
import { Input } from 'components/common/Input';
// import { createNewContactThunk } from 'redux/contacts/thunks';
import { createNewContact, updateContact } from 'api/contactsApiNew';

export const ContactForm = () => {
  const initialFormData = { name: '', number: '' };
  const [formData, setFormData] = useState(initialFormData);
  const { items: contacts, isLoading } = useSelector(selectContacts);
  // const dispatch = useDispatch();
  const isAddContactButtonDisabled =
    formData.name === '' || formData.number === '';

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    // const { name, number: phone } = formData;
    const { name } = formData;

    const existingContactId = checkContactExists(contacts, name);

    if (existingContactId) {
      // alert(`${name} is already in contacts.`);
      console.log(existingContactId);
      updateContact(existingContactId, formData);

      return;
    }

    // dispatch(addContactThunk({ name, phone }));
    // dispatch(createNewContactThunk({ name, number }));
    createNewContact(formData);
    resetForm();
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            value={formData.name}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[A-Za-z\u0080-\uFFFF ']+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            value={formData.number}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit" disabled={isAddContactButtonDisabled}>
          Add contact
        </Button>
      </Form>

      {isLoading && <Loader />}
    </>
  );
};
