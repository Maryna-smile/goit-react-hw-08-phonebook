import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import { logIn } from 'redux/auth/authOperations';
import { selectToken } from 'redux/selectors';
import { toast, ToastContainer } from 'react-toastify';
import { Button } from './LoginPage.styled';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const token = useSelector(selectToken);

  const dispatch = useDispatch();

  const loginedUser = {
    email: setEmail,
    password: setPassword,
  };

  const handleInputChange = e => {
    loginedUser[e.target.name](e.target.value);
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    if (!token) {
      toast('Something went wrong, please try again');
    }
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handleLoginSubmit}>
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
          <ToastContainer />
          <Button type="submit">Login</Button>
        </Box>
      </form>
    </>
  );
}
