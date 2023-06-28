import { Button } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink to="/">
        <Button variant="contained" color="inherit" sx={{ mr: 2 }}>
          Home
        </Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Button variant="contained" color="inherit">
            Contacts
          </Button>
        </NavLink>
      )}
    </nav>
  );
};
