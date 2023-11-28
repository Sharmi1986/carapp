import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, useMediaQuery, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from 'react-router-dom';



const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isSmallScreen = useMediaQuery('(max-width: 553px)');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
     <AppBar position="static" sx={{ backgroundColor: 'black',  paddingTop:'5px'}}>
      <Container>
        <div className="d-flex justify-content-end align-items-center">
          {/* Change Booking Link */}
          
           <NavLink to="/booking" className="nav-link" style={{ textAlign: 'right', color:'white', marginRight:'10px' }}>
              <FontAwesomeIcon icon={faPencilAlt} className="d-none d-lg-inline-block mt-1 mr-1" />
              Change Booking
            </NavLink>

            {/* Login Link */}
            <NavLink to="/login" className="nav-link" style={{ textAlign: 'right', color:'white' }}>
              <FontAwesomeIcon icon={faSignInAlt} className="d-none d-lg-inline-block mt-1 mr-1" />
              Login
            </NavLink>
          {/* <a href="/booking" className="nav-link" style={{ textAlign: 'right', color:'white', marginRight:'10px' }}>
            <FontAwesomeIcon icon={faPencilAlt} className="d-none d-lg-inline-block mt-1 mr-1" />
            Change Booking
            </a>
          

          {/* Login Link */}
          {/* <a href="/account/login" className="nav-link" style={{ textAlign: 'right', color:'white' }}>
            <FontAwesomeIcon icon={faSignInAlt} className="d-none d-lg-inline-block mt-1 mr-1" />
            Login
          </a>  */}
        </div>
      </Container>
     
    {/* </AppBar>
    <AppBar position="static" sx={{ backgroundColor: 'black', marginTop: '-15px' }}> */}
      <Container>
      <Toolbar sx={{ display:'flex'}}>
        {/* Logo on the left */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <NavLink to="/" underline="none">
        <img src="logo-online.png" alt="Espresso Car Wash Logo" className="img-fluid espresso-logo" 
         style={{ width: '460px', height: '130px' }}
        />
        </NavLink>
        </Typography>

        {/* Responsive Navbar items */}
        <div sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Hamburger Icon for small screens */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
            sx={{ display: { xs: isSmallScreen ? 'block' : 'none', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Menu for small screens */}
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Book Online Now</MenuItem>
            <MenuItem onClick={handleClose}>Gift Voucher</MenuItem>
          </Menu>

          {/* Book Online Now Button (conditionally displayed only in small screens) */}
          {isSmallScreen ? null : (
            <>
              {/* Both buttons displayed in full-screen */}
              <Button
                color="inherit"
                sx={{
                 padding:'20px',
                 marginRight:'3px',
                 backgroundColor:'red',
                 transform: 'skew(-25deg)'
                  
                }}
              >
                <span sx={{ zIndex: 1 }}>Book Online Now</span>
              </Button>
              <Button
                color="inherit"
                sx={{
                    
                    padding:'20px',
                    backgroundColor:'red',
                    transform: 'skew(-25deg)'
                  }}
              >
                <span sx={{ zIndex: 1 }}>Gift Voucher</span>
              </Button>
            </>
          )}
        </div>
      </Toolbar>
      </Container>
    </AppBar>
    </>
  );
};

export default Navigation;
