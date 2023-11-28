import React from 'react';
import { Tabs, Tab, Typography, createTheme, ThemeProvider, Container } from '@mui/material';
import { styled } from '@mui/system';
import ServiceMenu from './ServiceNavbar';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2',
    },
    error: {
      main: '#FF0000',
    },
  },
});
const StyledTabs = styled(Tabs)({
  justifyContent: 'center',
});

const StyledTab = styled(Tab)({
  minWidth: 0,
  margin: '0 16px',
});

const CircularImage = styled('div')(({ theme, isActive }) => ({
  padding: 40,
  backgroundColor: isActive ? theme.palette.error.main : '#efece7',
  borderRadius: '50%',
  overflow: 'hidden',
  margin: '0 auto',
  transition: 'background-color 0.3s ease',
}));

const Service = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <ThemeProvider theme={theme}>
    <Container id="container-fbs-nav-vehicletypeitem" sx={{ mb: 5 }}>
      <Typography variant="h3" align="center" mb={2} sx={{ marginTop: '50px' }}>
        Select Your Service
      </Typography>
      <StyledTabs
        value={value}
        onChange={handleChange}
        centered
        textColor="black"
        indicatorColor="black"
      >
        <StyledTab
          label={
            <CircularImage isActive={value === 0}>
              <img
                src={value === 0 ? '/sedan.active.png' : '/sedan.png'}
                alt="Sedan"
                className="img-fluid mx-auto img-passive"
              />
              <br />
              <Typography variant="caption" className="vehicletype-name text-break small">
                SEDAN
              </Typography>
            </CircularImage>
          }
        />
        <StyledTab
          label={
            <CircularImage isActive={value === 1}>
              <img
                src={value === 1 ? '/sw-4wd-vans-suv.active.png' : '/sw-4wd-vans-suv.png'}
                alt="SW/4WD/Vans/SUV"
                className="img-fluid mx-auto img-passive"
              />
              <br />
              <Typography variant="caption" className="vehicletype-name text-break small">
                SW/4WD/Vans/SUV
              </Typography>
            </CircularImage>
          }
        />
      </StyledTabs>
    </Container>
    </ThemeProvider>
    <ServiceMenu />
    </>
  );
};

export default Service;










