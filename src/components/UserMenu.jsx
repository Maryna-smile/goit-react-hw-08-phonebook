import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUserName } from 'redux/selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <p>Hello, {name}</p>
        {/* <button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </button> */}
        <Button
          type="button"
          variant="contained"
          color="secondary"
          sx={{p: '3px 10px',  alignItems: 'center' }}
          onClick={() => dispatch(logOut())}
        >
          Logout
        </Button>
      </Box>
    </div>
  );
}
