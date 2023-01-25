import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { register } from 'redux/auth/authOperations';
import { ToastContainer, toast } from 'react-toastify';
import { selectToken } from 'redux/selectors';
import { Button } from './RegisterPage.styled';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const token = useSelector(selectToken);

  const dispatch = useDispatch();

  const userObj = {
    name: setName,
    email: setEmail,
    password: setPassword,
  };

  const handleInputChange = e => {
    userObj[e.target.name](e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('helloo');
    dispatch(register({ name, email, password }));
    if (!token) {toast('Something went wrong, please try again')}
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
   
      <form onSubmit={handleSubmit}>
      <ToastContainer />
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
            placeholder="enter your name"
            name="name"
            onChange={handleInputChange}
            value={name}
            sx={{ mt: '1rem' }}
            required
          />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            placeholder="enter your email"
            name="email"
            onChange={handleInputChange}
            value={email}
            sx={{ mt: '1rem' }}
            required
          />

          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            placeholder="create a password"
            name="password"
            onChange={handleInputChange}
            value={password}
            sx={{ mt: '1rem' }}
            required
          />
         
          <Button
            type="submit"
          >
            Register
          </Button>
        </Box>
      </form>
    </>
  );
}
