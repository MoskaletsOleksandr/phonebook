import { Section } from '../common/Section';
import { SectionTitle } from '../common/SectionTitle';
import { ContactForm } from '../ContactForm';
import { ContactList } from '../ContactList';
import { Filter } from '../Filter';

const ContactsPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Section>
        <SectionTitle title="Add a new contact" as="h1" />
        <ContactForm />
      </Section>
      <Section>
        <SectionTitle title="Contacts" />
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};

export default ContactsPage;
