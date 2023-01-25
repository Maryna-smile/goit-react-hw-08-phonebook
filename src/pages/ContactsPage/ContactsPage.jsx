import React, { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Caption, Container } from './ContactsPage.styled';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <div>
          {isLoading && !error && <h2>Request in progress ...</h2>}
          <Caption>Phonebook contacts</Caption>
          <ContactForm />
        </div>
        <div>
          {contacts.length > 0 && <Filter />}
          <ContactList />
        </div>
      </Container>
    </>
  );
}
