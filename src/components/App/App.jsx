import { Container } from './App.styled';
import { ContactList } from 'components/ContactList';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { SectionTitle } from 'components/common/SectionTitle';
import { Section } from 'components/common/Section';

export const App = () => {
  return (
    <Container>
      <Section>
        <SectionTitle title="Phonebook" as="h1" />
        <ContactForm />
      </Section>
      <Section>
        <SectionTitle title="Contacts"/>
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
};
