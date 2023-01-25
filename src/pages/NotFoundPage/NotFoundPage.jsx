import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import NotFound from '../NotFoundPage/404-page.png';
import { FlexWrapper, NotFoundImg, Text } from './NotFoundPage.styled';

export default function NotFoundPage() {
  return (
    <>
      <NotFoundImg src={NotFound} alt="Page 404" />
      <FlexWrapper>
        <Text>
          Page not found, but don`t worry, just press
          <Button>
            <Link to="/">go home</Link>
          </Button>
        </Text>
      </FlexWrapper>
    </>
  );
}
