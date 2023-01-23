import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/selectors';
import { Button, Form } from './ContactForm.styled';

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
      toast('This contact already exists');
      setName('');
      setNumber('');
      return;
    }
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={handleAddButtonClick}>
        <ToastContainer />
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
          }}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <TextField
          id="outlined-basic"
          label="Number"
          variant="outlined"
          placeholder="enter contact`s name"
          name="number"
          onChange={handleInputNumberChange}
          value={number}
          sx={{
            mt: '1rem',
          }}
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button onClick={handleAddButtonClick}>Add contact</Button>
      </Form>
    </>
  );
}
