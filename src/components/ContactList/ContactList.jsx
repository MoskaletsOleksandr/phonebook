import { List } from './ContactList.styled';
import { Contact } from './Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { useEffect, useState } from 'react';
import { getContactsThunk } from 'redux/thunks';
import { SectionTitle } from 'components/common/SectionTitle';
import { Button } from 'components/common/Button';
import { PaginationWrapper } from './ContactList.styled';

export const ContactList = () => {
  const { items: contacts, error } = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const isNextButtonDisabled = contacts.length < 10;
  const isPrevButtonDisabled = currentPage === 1;

  useEffect(() => {
    dispatch(getContactsThunk(currentPage));
  }, [dispatch, currentPage]);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {error && <SectionTitle title="Error loading" />}
      <List>
        {contacts.map(({ id, name, phone }) => {
          return <Contact key={id} name={name} number={phone} id={id} />;
        })}
      </List>
      <PaginationWrapper>
        <Button onClick={handlePrevPage} disabled={isPrevButtonDisabled}>
          Previous page
        </Button>
        <Button onClick={handleNextPage} disabled={isNextButtonDisabled}>
          Next page
        </Button>
      </PaginationWrapper>
    </>
  );
};
