import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import { width } from '@mui/system';

const Footer = () => {
  return (
    <footer position="fixed" className="web-footer" style={{backgroundColor:'black', marginTop:'20px', padding:'50px'}}>
      <Container className="container-footer" py={{ xs: 3, md: 5 }} >
        <Grid container>
          <Grid item xs={12} md={5} order={{ xs: 2, md: 1 }}>
            <div className="wrapper-logo mb-4">
              <Link href="/" underline="none">
                <img
                  src="logo-online.png"
                  alt="Espresso Car Wash Logo" style={{width:'300px'}}
                />
              </Link>
            </div>
            <Typography  className="copyright" sx={{color:'white', fontSize:'10px'}}>
              Copyright © Espresso Car Wash 2023. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
