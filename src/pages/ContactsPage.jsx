import React, { useEffect } from 'react';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { Container } from '@mui/system';


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
    <Container maxWidth="lg" sx={{ display: 'flex',  justifyContent: 'space-between', }}>
      <div>
      <h1>Phonebook </h1>
      <ContactForm />
      </div>
      <div>
      {contacts.length > 0 && <h2>Contacts</h2>}
      {contacts.length > 0 && <Filter />}
      <ContactList />
      {isLoading && !error && <h2>Request in progress ...</h2>}
      </div>
      </Container>
    </>
  );
}
