import { Button, Toolbar } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Toolbar sx={{ ml: 'auto' }}>
      <NavLink to="/register">
        <Button variant="contained" color="inherit" sx={{ mr: 2 }}>
          Register
        </Button>
      </NavLink>
      <NavLink to="/login">
        <Button variant="contained" color="inherit">
          log In
        </Button>
      </NavLink>
    </Toolbar>
  );
};
