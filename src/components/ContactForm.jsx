import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/selectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleInputNameChange = e => {
    setName(e.target.value);
  };
  const handleInputNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleAddButtonClick = e => {
    e.preventDefault();
    const newContact = {
      name,
      number,
    };

    if (contacts.some(el => el.name === name)) {
      toast('Contact already exists');
      return;
    }
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleAddButtonClick}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            placeholder="enter contact`s number"
            name="name"
            onChange={handleInputNameChange}
            value={name}
            sx={{
              mt: '1rem',
              // m: '0 auto'
            }}
          />

          <TextField
            id="outlined-basic"
            label="Number"
            variant="outlined"
            placeholder="enter contact`s name"
            name="name"
            onChange={handleInputNumberChange}
            value={number}
            sx={{
              mt: '1rem',
              // m: '0 auto'
            }}
          />

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: '1rem' }}
            onClick={handleAddButtonClick}
          >
            Add contact
          </Button>
        </Box>
      </form>
    </>
  );
}
