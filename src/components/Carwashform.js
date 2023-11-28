import React, {useState} from 'react';

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import {
    TextField,
    Button,
    CardContent,
    Grid,
    Checkbox,
    FormControlLabel
  } from '@mui/material';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CarWashForm() {
  const [expanded, setExpanded] = React.useState('panel1');
  const [isRegisterChecked, setRegisterChecked] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleRegisterCheckboxChange = () => {
    setRegisterChecked(!isRegisterChecked);
  };


  return (
    <Container sx={{marginTop:'30px'}}>
         <Typography variant="h4" align='center' mb={2}>
         Customer Details
    </Typography>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>I'm A Returning Customer</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <CardContent>
      <form action="/account/auth?returnUrl=booking/customer" method="post">
        <TextField
          label="Email"
          type="email"
          name="email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <Typography variant="body2" color="textSecondary" mt={1}>
          <a href="javascript:void(0);" data-toggle="modal" data-target="#container-fbc-forgot">
            Forgotten your password?
          </a>
        </Typography>
        <Typography sx={{textAlign: 'right', marginRight: '50px'}}>
        <Button type="submit" variant="contained"  mt={2}
        sx={{
            marginTop: '10px',
            color: 'white',
            backgroundColor:'black',
            borderColor:'black',
            padding: '20px',
            paddingLeft:'40px',
            paddingRight:'40px',
            transform: 'skew(-25deg)',
          }}
        >
          Login
        </Button>
        </Typography>
      </form>
    </CardContent>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Billing Address</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <CardContent>
                <form id="form-fbc-customer" action="/booking/customer-submit" method="post">
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="First Name*"
                        type="text"
                        name="firstname"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Last Name*"
                        type="text"
                        name="lastname"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Mobile*"
                        type="tel"
                        name="mobile"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Rego*"
                        type="text"
                        name="rego"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Email*"
                        type="email"
                        name="email"
                        variant="outlined"
                        fullWidth
                        required
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="cb-fbc-register"
                            name="register"
                            checked={isRegisterChecked}
                            onChange={handleRegisterCheckboxChange}
                          />
                        }
                        label="Create an Account?"
                      />
                    </Grid>
                    <Grid item xs={12} className={isRegisterChecked ? 'collapse' : ''}>
                      <TextField
                        label="Password*"
                        type="password"
                        name="password"
                        variant="outlined"
                        fullWidth
                        autoComplete="new-password"
                        disabled={!isRegisterChecked}
                      />
                    </Grid>
                    <Grid item xs={12} className={isRegisterChecked ? 'collapse' : ''}>
                      <TextField
                        label="Confirm Password*"
                        type="password"
                        name="confirm-password"
                        variant="outlined"
                        fullWidth
                        autoComplete="confirm-password"
                        disabled={!isRegisterChecked}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{textAlign: 'right', marginRight: '50px'}}>
                      <Button type="button" variant="contained" 
                       sx={{
                        marginTop: '10px',
                        color: 'white',
                        backgroundColor:'black',
                        borderColor:'black',
                        padding: '20px',
                        paddingLeft:'40px',
                        paddingRight:'40px',
                        transform: 'skew(-25deg)',
                      }}
                      >
                        Proceed To Payment
                      </Button>
                      <Button type="submit" className="d-none"></Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
        </AccordionDetails>
      </Accordion>
      
      </Container>
  );
}




