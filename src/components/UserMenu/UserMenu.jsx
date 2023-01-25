
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUserName } from 'redux/selectors';
import { Button, Text } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  return (
    <>
      <Text>Hello, {name}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
      </>
  );
}
