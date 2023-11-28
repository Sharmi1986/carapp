import React from "react";
import { Typography, Container, TextField,  Button } from "@mui/material";
import { Room, ArrowForward } from "@mui/icons-material";
import { styled } from '@mui/system';
import Location from "./Location";



const SkewedButton = styled(Button)({
  
  width: '300px',
  fontSize: '10px',
  textDecoration: 'none',
  color: '#333',
  border: '2px solid #333',
  letterSpacing: '2px',
  textAlign: 'center',
  position: 'relative',
  transition: 'all .35s',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  transform: 'skew(-20deg)',
  '& span': {
    position: 'relative',
    zIndex: 2,
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0,
    height: '100%',
    background: 'black',
    transition: 'all .35s',
  },
  '&:hover': {
    color: '#fff',
  },
  '&:hover:after': {
    width: '100%',
  },
});


const Home = () => {
  return (
    <>
    <Container mt={5}>
      <Typography variant="h3" align="center"  mb={2} sx={{marginTop: '50px'}}>
        Find An Espresso Car Wash Centre Near You
      </Typography>
      <div className="container" style={{ display: 'flex',  flexDirection: 'column', width:'100%',marginTop: '50px'  }}>
        <div style={{ display: 'flex', alignItems: 'left', width:'100%',  borderColor: 'gray' }}>
          <TextField
          type="text"
          fullWidth
          variant="outlined"
          placeholder="Enter your suburb or site name"
         
            style= {{
              padding:'35px', 
              
              borderColor: 'gray',
              background: '#f0f0f0', // Set light gray background
              transform: 'skew(-20deg)',
          }}
        />
        
        <Button
                  color="error"
              
                  style={{
                    backgroundColor: 'red',
                    color:'black',
                    borderColor: 'gray',
                    padding:'35px',                   
                     transform: 'skew(-20deg)',
                    
                                  
                  }}
                >
                  Search 
                  <ArrowForward />
                </Button>
                </div>
        </div>
        <div style={{ top: '50%', left: '50%', marginTop:'10px'}}>
      <SkewedButton  variant="outlined"
       startIcon={<Room />}>
        <span>Or use your current location</span>
      </SkewedButton>
    </div>
    </Container>
    <Location />
    
  </>
  );
};



export default Home;


