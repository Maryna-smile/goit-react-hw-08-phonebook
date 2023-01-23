import React, { useState } from 'react';
// import { fetchLoginUser } from '../redux/register/operationsRegister';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/system';
import { Button, TextField } from '@mui/material';
import { logIn } from 'redux/auth/authOperations';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div>Login Page</div>
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
          />
          <Button type='submit' variant="contained" color="primary" sx={{ mt: '1rem' }}>
            Login
          </Button>
        </Box>
      </form>
    </>
  );
}
