import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <h1>Login page</h1>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ m: 1, width: '35ch' }}
        noValidate
        autoComplete="off"
      >
        <TextField
          type="email"
          name="email"
          id="filled-basic"
          label="Email"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          type="password"
          name="password"
          id="standard-basic"
          label="Password"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained">
          Log In
        </Button>
      </Box>
    </div>
  );
};
