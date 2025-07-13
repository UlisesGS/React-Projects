import { AppBar, Box, Toolbar, Typography, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {  DeleteButton } from '../../Styled';

export const Navbar = ({ login, handlerLogout }) => {
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
