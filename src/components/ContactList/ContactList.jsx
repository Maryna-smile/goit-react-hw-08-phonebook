import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { Button, Item, List } from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  const handleRemove = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <Button type="button" onClick={() => handleRemove(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
}
