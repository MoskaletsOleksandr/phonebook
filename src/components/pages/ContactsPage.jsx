import { Section } from '../common/Section';
import { SectionTitle } from '../common/SectionTitle';
import { ContactForm } from '../ContactForm';
import { ContactList } from '../ContactList';
import { Filter } from '../Filter';

const ContactsPage = () => {
  return (
    <>
      <Section>
        <SectionTitle title="Phonebook" as="h1" />
        <ContactForm />
      </Section>
      <Section>
        <SectionTitle title="Contacts" />
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};

export default ContactsPage;
