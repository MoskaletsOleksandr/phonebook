import { List } from './ContactList.styled';
import { Contact } from './Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { useEffect, useState, useMemo } from 'react';
import { SectionTitle } from 'components/common/SectionTitle';
import { getContactsThunk } from 'redux/contacts/thunks';
import { getFilteredContacts } from 'utils/filterUtils';
import { Button } from 'components/common/Button';
import { PaginationWrapper } from './ContactList.styled';

export const ContactList = () => {
  const { items: contacts, error } = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [endIndex, setEndIndex] = useState(1);
  const contactsPerPage = 5;

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const { filter } = useSelector(selectContacts);
  const filteredContacts = useMemo(
    () => getFilteredContacts(contacts, filter),
    [contacts, filter]
  );

  const currentContacts = useMemo(() => {
    const startIndex = (currentPage - 1) * contactsPerPage;
    setEndIndex(startIndex + contactsPerPage);
    return filteredContacts.slice(startIndex, endIndex);
  }, [currentPage, filteredContacts, endIndex]);

  useEffect(() => {
    if (currentContacts.length === 0 && currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  }, [currentContacts, currentPage]);

  return (
    <>
      {error && (
        <SectionTitle title="Error loading... Check your connection or try later" />
      )}
      <List>
        {currentContacts.map(({ id, name, number }) => (
          <Contact key={id} name={name} number={number} id={id} />
        ))}
      </List>
      <PaginationWrapper>
        <Button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous page
        </Button>
        <Button
          onClick={handleNextPage}
          disabled={endIndex >= filteredContacts.length}
        >
          Next page
        </Button>
      </PaginationWrapper>
    </>
  );
};
