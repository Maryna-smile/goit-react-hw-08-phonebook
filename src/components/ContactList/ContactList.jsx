import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';
import ContactItem from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilter);
  console.log('contacts', contacts);
  const filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <List>
      {filteredContacts.map(el => {
        return <ContactItem key={el.id} contact={el} />;
      })}
    </List>
  );
}
