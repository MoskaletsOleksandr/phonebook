import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContactThunk } from 'redux/thunks';
import { checkContactExists } from 'utils/contactUtils';
import { Form, Label, Input } from './ContactForm.styled';
import { Button } from 'components/common/Button';
import { Loader } from 'components/common/Loader';

export const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', number: '' });
  const { items: contacts, isLoading } = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isAddContactButtonDisabled =
    formData.name === '' || formData.number === '';

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { name, number: phone } = formData;

    const contactExists = checkContactExists(contacts, name);

    if (contactExists) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContactThunk({ name, phone }));
    resetForm();
  };

  const resetForm = () => {
    setFormData({ name: '', number: '' });
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
