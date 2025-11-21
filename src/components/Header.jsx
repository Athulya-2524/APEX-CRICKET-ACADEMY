import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

function Header() {
   
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'dark'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img width={'30px'} src="https://i.pinimg.com/originals/8d/4c/3e/8d4c3e3cbb275adfba239326db22397b.png" alt="logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-light text-decoration-none'>APEX CRICKET ACADEMY</Link>
          </Typography>
          <Button color="inherit">
            <a className='text-decoration-none text-white'  href="#about">ABOUT</a>
          </Button>
          <Button color="inherit">
            <a className='text-decoration-none text-white'  href="#contact">CONTACT</a>
          </Button>
          <Link to={'/form'} className='text-light text-decoration-none' ><Button sx={{backgroundColor:'blue'}} color='white'>Login/Register</Button></Link>


        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Header