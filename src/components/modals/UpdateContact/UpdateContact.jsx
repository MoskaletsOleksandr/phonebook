import PropTypes from 'prop-types';
import { Button } from 'components/common/Button';
import { Modal } from 'components/common/Modal';
import {
  ConfirmationButtons,
  ContactInfo,
  ContentWrapper,
  DeclineButton,
  Title,
} from './UpdateContact.styled';

export const UpdateContactModal = ({
  closeModal,
  existingContact,
  formData,
  updateContact,
}) => {
  const { name, number } = existingContact;
  const theSameNumber = number === formData.number;

  return (
    <Modal onClose={closeModal}>
      <ContentWrapper>
        {!theSameNumber ? (
          <>
            <Title>Do you want to update this contact?</Title>
            <ContactInfo>
              The contact <b>{name}</b> already exists in your contact list with
              the number <b>{number}</b>.
            </ContactInfo>
            <ContactInfo>
              Do you want to replace the number of this contact with the number{' '}
              <b>{formData.number}</b>?
            </ContactInfo>
            <ConfirmationButtons>
              <Button onClick={updateContact}>Ok</Button>
              <DeclineButton onClick={closeModal}>No</DeclineButton>
            </ConfirmationButtons>
          </>
        ) : (
          <>
            <Title>You are trying to add the same contact</Title>

            <ContactInfo>
              The contact <b>{name}</b> already exists in your contact list with
              the number <b>{number}</b>.
            </ContactInfo>
            <Button onClick={closeModal}>Ok</Button>
          </>
        )}
      </ContentWrapper>
    </Modal>
  );
};

UpdateContactModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  existingContact: PropTypes.object.isRequired,
  formData: PropTypes.object.isRequired,
  updateContact: PropTypes.func.isRequired,
};
