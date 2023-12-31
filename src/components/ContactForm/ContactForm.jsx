import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { checkContactExists } from 'utils/contactUtils';
import { Button } from 'components/common/Button';
import { Loader } from 'components/common/Loader';
import { Form } from 'components/common/Form';
import { Label } from 'components/common/Label';
import { Input } from 'components/common/Input';
import {
  createNewContactThunk,
  updateContactThunk,
} from 'redux/contacts/thunks';
import { UpdateContactModal } from 'components/modals/UpdateContact';

export const ContactForm = () => {
  const initialFormData = { name: '', number: '' };

  const [formData, setFormData] = useState(initialFormData);
  const [showModal, setShowModal] = useState(false);

  const { items: contacts, isLoading } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const isAddContactButtonDisabled = useMemo(
    () => formData.name === '' || formData.number === '',
    [formData.name, formData.number]
  );

  const existingContact = useMemo(
    () => checkContactExists(contacts, formData.name),
    [contacts, formData.name]
  );

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleUpdateContact = async () => {
    dispatch(updateContactThunk({ id: existingContact.id, body: formData }));

    resetForm();
    toggleModal();
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (existingContact) {
      toggleModal();
      return;
    }

    dispatch(createNewContactThunk(formData));
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
        <UpdateContactModal
          closeModal={toggleModal}
          updateContact={handleUpdateContact}
          existingContact={existingContact}
          formData={formData}
        />
      )}
    </>
  );
};
