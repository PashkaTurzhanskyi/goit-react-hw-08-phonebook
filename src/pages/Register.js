import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <h1>Registration</h1>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ m: 1, width: '35ch' }}
        noValidate
        autoComplete="off"
      >
        <TextField
          type="text"
          name="name"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          sx={{ mb: 2 }}
        />
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
          Register
        </Button>
      </Box>
    </div>
  );
};
