import React from 'react';
import { AppBar, Container, Tabs, Grid, Tab, Typography, Box, Card, CardContent, Button } from '@mui/material';
import { useStepper } from '../context';
import { styled } from '@mui/system';


const SkewedButton = styled(Button)({
  
  width: '150px',
  fontSize: '12px',
  textDecoration: 'none',
  color: '#333',
  border: '2px solid #333',
  borderLeft:'8px solid black',
  padding:'10px',
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

const MenuItemCard = ({ name, description, price, discounts }) => {
  const { incrementCurrentStep } = useStepper(); 

    return(
    <Grid item xs={12} sm={6} md={4} lg={3}>
    <Card sx={{ height:'450px', display:'flex', flexDirection:'column', marginTop:'30px' }}>
      <CardContent sx={{display:'flex', flexDirection:'column'}}>
        <Typography gutterBottom variant="h6" component="div" sx={{marginTop:'20px'}}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{marginTop:'30px'}}>
          {description}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ marginTop: '40px' }}>
          ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: '30px' }}>
          ${discounts}
          <img src="afterpay-logo.webp" alt="Discount Logo" style={{ width: '80px', height: '80px', marginTop:'-15px'}} />

        </Typography>
        <Grid sx={{ top: '50%', left: '50%', marginTop:'10px', textAlign:'center'}}>
      <SkewedButton
      onClick={incrementCurrentStep}
      >
        <span>Select Service</span>
      </SkewedButton>
    </Grid>
      </CardContent>
    </Card>

    </Grid>
    )
        };
  
const ServiceMenu = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const categories = [
    {
      id: 6,
      name: 'Wash',
      items: [
        {
          id: 1,
          name: 'Prestige Wash',
          description: 'Classic Wash plus interior door panels, acid wheel treatment.',
          price: 139,
          discounts:'or 4 interest-free payments of $34.75 with ',
        },
        {
          id: 2,
          name: 'Classic Wash',
          description: 'Express Wash plus Vacuum Interior, console, dashboard.',
          price: 109,
          discounts:'or 4 interest-free payments of $27.25 with '

        },
        {
          id: 3,
          name: 'Express Wash',
          description: 'External Wash plus Interior Freshener',
          price: 46,
          discounts:'or 4 interest-free payments of $11.50 with '

        },
        {
          id: 4,
          name: 'Express Wash plus',
          description: 'External Wash plus Interior Freshener plus Vacuum',
          price: 74,
          discounts:'or 4 interest-free payments of $18.50 with '

        },
      ],
    },
    {
      id: 10,
      name: 'Groom',
      items: [
        {
          id: 5,
          name: 'Supreme Groom',
          description: 'Prestige Wash plus detailed hand wax and polish',
          price: 219,
          discounts:'or 4 interest-free payments of $54.75 with '

        },
      ],
    },
  ];

  return (
    
    <Container>
      <AppBar position="static" style={{ backgroundColor: 'white' }}>
        <Tabs value={value} onChange={handleChange}>
          {categories.map((category) => (
            <Tab key={category.id} label={category.name} />
          ))}
        </Tabs>
      </AppBar>
      
      <Grid container spacing={2}>
  {categories.map((category, index) => (
    <Grid key={category.id} item xs={12}>
      {value === index && (
        <TabPanel key={category.id} value={value} index={index}>
          <Typography variant="h5" sx={{mt:'30px'}}>{category.name} Services*</Typography>
          {/* Render menu items for the category */}
          <Grid container spacing={2}>
            {category.items.map((item) => (
              <MenuItemCard key={item.id} {...item} />
            ))}
          </Grid>
        </TabPanel>
      )}
    </Grid>
    
  ))}
</Grid>
<Typography  sx={{mt:'30px'}}>*Please note that for heavily soiled vehicles, dog hair, tar & bug removal, Espresso reserve the right to charge an additional fee for online bookings.</Typography>

    </Container>
    
  
   
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const MenuItem = ({ name, description, price, discounts }) => (
  <div>
    <Typography variant="h6">{name}</Typography>
    <Typography>{description}</Typography>
    <Typography variant="h6">{`$${price}`}</Typography>
    <Typography>{discounts}</Typography>

    {/* Additional elements for buttons, etc. */}
  </div>
);

export default ServiceMenu;












