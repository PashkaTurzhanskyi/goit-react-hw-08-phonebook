import { Button, Toolbar, Typography } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Toolbar sx={{ ml: 'auto' }}>
      <Typography variant="h6" component="div">
        Welcome, {user.email}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{ ml: 5 }}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Toolbar>
  );
};
