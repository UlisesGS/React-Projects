import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

const initialLoginForm = {
    email: '',
    password: ''
}

export const LoginPage = ({handlerLogin}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState(initialLoginForm);
  const {email, password} = loginForm;


  const onInputChange = ({target}) => {
    const { name, value } = target;
    setLoginForm({
        ...loginForm,
        [name]: value
    });
  };

  const handleTogglePassword = () => {
    setShowPassword((show) => !show);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    
    handlerLogin({email,password});
    setLoginForm(initialLoginForm);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Login
        </Typography>

        <Box component="form" onSubmit={onSubmit} sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={onInputChange}
            fullWidth
            required
          />

          <TextField
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={onInputChange}
            fullWidth
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
            Accept
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
