import { List } from './ContactList.styled';
import { Contact } from './Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
// import { useEffect, useState } from 'react';
// import { getContactsThunk } from 'redux/thunks';
import { SectionTitle } from 'components/common/SectionTitle';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/contacts/thunks';
import { getFilteredContacts } from 'utils/filterUtils';
// import { Button } from 'components/common/Button';
// import { PaginationWrapper } from './ContactList.styled';

export const ContactList = () => {
  const { items: contacts, error } = useSelector(selectContacts);
  const dispatch = useDispatch();
  // const [currentPage, setCurrentPage] = useState(1);
  // const isNextButtonDisabled = contacts.length < 10;
  // const isPrevButtonDisabled = currentPage === 1;

  // useEffect(() => {
  //   dispatch(getContactsThunk(currentPage));
  // }, [dispatch, currentPage]);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  // const handlePrevPage = () => {
  //   setCurrentPage(currentPage - 1);
  // };

  // const handleNextPage = () => {
  //   setCurrentPage(currentPage + 1);
  // };

  const queryFilter = useSelector(state => state.contacts.filter);
  const filteredContacts = getFilteredContacts(contacts, queryFilter);

  return (
    <>
      {error && (
        <SectionTitle title="Error loading... Check your connection or try later" />
      )}
      <List>
        {filteredContacts.map(({ id, name, number }) => {
          return <Contact key={id} name={name} number={number} id={id} />;
        })}
      </List>
      {/* <PaginationWrapper>
        <Button onClick={handlePrevPage} disabled={isPrevButtonDisabled}>
          Previous page
        </Button>
        <Button onClick={handleNextPage} disabled={isNextButtonDisabled}>
          Next page
        </Button>
      </PaginationWrapper> */}
    </>
  );
};
