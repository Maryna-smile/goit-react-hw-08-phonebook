import { Divider, Typography } from '@mui/material';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar/AppBar';

export default function Layout() {
  return (
    <>
      <AppBar />
      <Divider />
      <main className="container">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>

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
