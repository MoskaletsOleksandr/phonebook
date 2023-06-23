import { Container } from 'components/App/App.styled';
import { Section } from '../common/Section';
import { SectionTitle } from '../common/SectionTitle';
import { ContactForm } from '../ContactForm';
import { ContactList } from '../ContactList';
import { Filter } from '../Filter';

const ContactsPage = () => {
  return (
    <Container>
      <Section>
        <SectionTitle title="Phonebook" as="h1" />
        <ContactForm />
      </Section>
      <Section>
        <SectionTitle title="Contacts" />
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
};

export default ContactsPage;
