import { Divider } from '@mui/material';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar/AppBar';
import { Footer, Link, Text } from './Layout.styled';

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
      <Divider />
      <Footer>
       
        <Text>
          @made by  <Link href="https://github.com/Maryna-smile" target="blank">
            Maryna-smile
          </Link>  2023
        </Text>
      </Footer>
    </>
  );
}
