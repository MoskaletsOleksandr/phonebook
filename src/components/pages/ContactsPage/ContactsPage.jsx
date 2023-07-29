import { Section } from 'components/common/Section';
import { SectionTitle } from 'components/common/SectionTitle';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { PageWrapper } from './ContactsPage.styled';

const ContactsPage = () => {
  return (
    <PageWrapper>
      <Section>
        <SectionTitle title="Add a new contact" as="h1" />
        <ContactForm />
      </Section>
      <Section>
        <SectionTitle title="Contacts" />
        <Filter />
        <ContactList />
      </Section>
    </PageWrapper>
  );
};

export default ContactsPage;
