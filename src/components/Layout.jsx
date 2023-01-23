import { AppBar, Box, Divider, Typography } from '@mui/material';

import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container } from '@mui/system';
import UserMenu from './UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLogIn } from 'redux/selectors';

export default function Layout() {
  const isLoggedIn = useSelector(selectIsLogIn);
  return (
    <>
      <AppBar sx={{ minHeight: '10%' }}>
        <header>
          <Box>
            <NavLink to="/">Home</NavLink>
            {isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}
          </Box>
          <Box>
            {!isLoggedIn && <NavLink to="register">Register</NavLink>}
            {!isLoggedIn && <NavLink to="login">Login</NavLink>}

            {isLoggedIn && <UserMenu />}
          </Box>
        </header>
      </AppBar>

      <Container sx={{ mt: '5rem' }}>
        <main className="container">
          <Outlet />
        </main>
      </Container>

      <footer
        style={{
          height: '5%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <Divider />
        <Typography
          sx={{
            textAlign: 'center',
            alignItems: 'center',
            fontWeight: 'light',
            fontSize: 'default',
          }}
        >
          @made by{' '}
          <a href="https://github.com/Maryna-smile" target="blank">
            Maryna-smile
          </a>{' '}
          2023
        </Typography>
      </footer>
    </>
  );
}
