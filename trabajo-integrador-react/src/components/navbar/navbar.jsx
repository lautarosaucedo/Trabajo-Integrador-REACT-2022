import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Avatar from '@mui/material/Avatar';

import './navbar.css';



export const Navbar = () => {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" >
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}
          >
            
            <Avatar alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/21/21601.png" />
           
          </IconButton>
          <Typography variant="h6"  color="inherit" component="div" class="navbar">
            Sitio de noticia
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
