import { AppBar, Box, Toolbar, Typography, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {  DeleteButton, LinkButton } from '../../Styled';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {

  const { login, handlerLogout } = useContext(AuthContext);

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div">
          Users-App
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, ml: 4 }}> {/* ← agregás margin-left */}
          <LinkButton
            component={NavLink}
            to="/users"
          >
            Usuarios
          </LinkButton>

          <LinkButton
            component={NavLink}
            to="/users/register"
          >
            Registrar Usuario
          </LinkButton>
        </Box>

        {/* Espaciador automático para empujar el botón a la derecha */}
        <Box sx={{ flexGrow: 1 }} />

        <Typography variant="h6" component="div">
          {login.user.email}
        </Typography>
        <DeleteButton color="danger" onClick={handlerLogout}>
          Logout
        </DeleteButton>
      </Toolbar>
    </AppBar>
  );
};
