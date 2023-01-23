import { TextField } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'redux/filterSlise/filterSlice';
import { selectFilter } from 'redux/selectors';
import { Caption, Container } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterInput = e => {
    dispatch(getFilterValue(e.target.value));
    console.log(e.target.value)
  };

  return (
    <Container>
      <Caption>Find contacts by name</Caption>

      <TextField
        onChange={handleFilterInput}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={filter}
        id="outlined-basic"
        variant="outlined"
        placeholder="enter contact`s name"
        name="name"
        sx={{
          mt: '1rem',
          // m: '0 auto'
        }}
      />
    </Container>
  );
}


