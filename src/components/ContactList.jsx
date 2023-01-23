import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../redux/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { Button } from '@mui/material';

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
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <Button
              type="button"
              onClick={() => handleRemove(id)}
              variant="contained"
              color="primary"
              sx={{ alignItems: 'center' }}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
