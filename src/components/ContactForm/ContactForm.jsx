import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { checkContactExists } from 'utils/contactUtils';
import { Button } from 'components/common/Button';
import { Loader } from 'components/common/Loader';
import { Form } from 'components/common/Form';
import { Label } from 'components/common/Label';
import { Input } from 'components/common/Input';
import { createNewContact, updateContact } from 'api/contactsApiNew';
import {
  // createNewContactThunk,
  getContactsThunk,
} from 'redux/contacts/thunks';
import { Modal } from 'components/common/Modal';

export const ContactForm = () => {
  const initialFormData = { name: '', number: '' };
  const [formData, setFormData] = useState(initialFormData);
  const [showModal, setShowModal] = useState(false);
  const [existingContact1, setExistingContact1] = useState(null);
  const { items: contacts, isLoading } = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isAddContactButtonDisabled =
    formData.name === '' || formData.number === '';

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleUpdateContact = async () => {
    await updateContact(existingContact1.id, formData);
    dispatch(getContactsThunk());

    resetForm();
    toggleModal();
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { name } = formData;

    // setExistingContact(checkContactExists(contacts, name));

    // console.log(existingContact);
    const existingContact = checkContactExists(contacts, name);

    if (existingContact) {
      setExistingContact1(existingContact);

      toggleModal();

      // resetForm();
      return;
    }

    // dispatch(createNewContactThunk({ name, number }));
    await createNewContact(formData);
    dispatch(getContactsThunk());

    resetForm();
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
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
      {showModal && (
        <Modal onClose={toggleModal}>
          <h3>Do you want to update this contact?</h3>
          <p>
            The contact <b>{existingContact1.name}</b> already exists in your
            contact list with the number
            <b>{existingContact1.number}</b>.
          </p>
          <p>
            Do you want to replace the number of this contact with the number{' '}
            <b>{formData.number}</b>?
          </p>
          <Button onClick={handleUpdateContact}>Yes</Button>
          <Button onClick={toggleModal}>No</Button>
        </Modal>
      )}
    </>
  );
};
