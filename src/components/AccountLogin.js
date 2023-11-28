import React from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

const AccountLogin = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <Box className="route-frontend-account-login position-relative" code="fal">
        
        <Box className="fal-header" style={{ backgroundImage: 'url("/header.png")', backgroundSize: 'cover', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
  <Typography variant="h2" className="fal-header-title"  color="white" textAlign="center">
    Be Rewarded With<br />Espresso Loyalty Membership
  </Typography>
</Box>
      <Container className="py-3 py-md-5">
        <Grid container spacing={5} alignItems="center" justify="center">
          <Grid item xs={12} md={6}>
            <Typography paragraph>
              At Espresso Car Wash we believe in rewarding our customers every time you wash with us.
              Membership is free and easy to join. Simply register on-line or at one of our Espresso Car
              Wash sites and start receiving your wash reward points immediately.
            </Typography>
            <Typography paragraph>You can redeem your points for discounts on washes.</Typography>
            <Typography paragraph>Loyalty membership is valid across all Espresso Car Wash locations.</Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper elevation={3}  sx={{backgroundColor:'red', padding:'40px', color:'white'}}>
              <Typography variant="h5" >
                Redemptions:
              </Typography>
              <Box>
                <Typography  display="flex" alignItems="center">
                  <Typography  className="col-4">
                    20 points
                  </Typography>
                  <Typography  className="col-auto">
                    =
                  </Typography>
                  <Typography  className="col">
                    $10 off Express Wash
                  </Typography>
                </Typography>
                <Typography  display="flex" alignItems="center">
                  <Typography  className="col-4">
                    30 points
                  </Typography>
                  <Typography  className="col-auto">
                    =
                  </Typography>
                  <Typography className="col">
                    $20 off Classic Wash
                  </Typography>
                </Typography>
                <Typography display="flex" alignItems="center">
                  <Typography className="col-4">
                    50 points
                  </Typography>
                  <Typography className="col-auto">
                    =
                  </Typography>
                  <Typography className="col">
                    $30 off Prestige Wash
                  </Typography>
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={5} className="mt-5">
          <Grid item xs={12} md={6} component={Paper} className="px-1 py-5 p-md-5 border">
            <Typography variant="h3" className="text-center">
              We've improved our loyalty system
            </Typography>
            <Typography paragraph>
              Dear Espresso Loyalty Customer, you are now required to enter an email and password to access the
              loyalty program. Please enter your mobile number to receive your new Loyalty Member login. All
              existing loyalty points remain active.
            </Typography>
            <form
              id="form-fal-new-loyalty"
              method="post"
              action="/account/request-new-loyalty"
              className="mt-4"
              data-kmt="1"
            >
              <div className="form-group">
                <label >Mobile Number:</label>
                <TextField
                  type="tel"
                  name="mobile"
                  id="tf-fal-new-loyalty-mobile"
                  className="form-control"
                  maxlength="25"
                  required
                />
              </div>
              <Box textAlign="right">
                <Button
                  type="submit"
                  id="btn-fal-new-loyalty-submit"
                  variant="contained"
                  color="primary"
                  sx={{ transform: 'skew(-20deg)', borderRadius: '0', marginTop: '10px' }}
                >
                  Receive my new loyalty login
                </Button>
              </Box>
            </form>
            <hr className="my-5" />
            <Typography variant="h3" className="text-center">
              Current Member Login
            </Typography>
            <Typography paragraph>Check your points balance</Typography>
            <form className="mt-5" method="post" action="/account/auth" data-kmt="1">
              <div className="form-group">
                <label htmlFor="tf-fal-login-email">Email:</label>
                <TextField id="tf-fal-login-email" className="form-control" name="email" type="email" maxlength="250" required />
              </div>
              <div className="form-group">
                <label htmlFor="tf-fal-login-password">Password:</label>
                <TextField
                  id="tf-fal-login-password"
                  className="form-control"
                  name="password"
                  type="password"
                  minlength="8"
                  maxlength="50"
                  required
                />
                <Box textAlign="right" mt={2}>
                  <Typography variant="body2" color="textSecondary" component="span">
                    <a
                      className="text-secondary small text-decoration-underline"
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#modal-fal-forgot"
                      data-kmt="1"
                    >
                      Forgotten your password?
                    </a>
                  </Typography>
                </Box>
              </div>
              <Box textAlign="right">
                <Button
                  className="btn btn-lg px-5 btn-parallelogram btn-primary btn-select"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Login
                </Button>
              </Box>
            </form>
          </Grid>
          <Grid item xs={12} md={6} component={Paper} className="px-1 py-5 p-md-5 bg-secondary-light">
            <Typography variant="h3" className="text-center">
              Join Our Loyalty Program
            </Typography>
            <Typography paragraph>Earn points with every wash</Typography>
            <form method="post" action="/account/registration" data-kmt="1">
              <div className="form-group">
                <label htmlFor="tf-fal-register-mobile">Mobile Number*:</label>
                <TextField id="tf-fal-register-mobile" className="form-control" name="mobile" type="tel" maxlength="25" required />
              </div>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <div className="form-group">
                    <label htmlFor="tf-fal-register-firstname">First name*:</label>
                    <TextField
                      id="tf-fal-register-firstname"
                      className="form-control"
                      name="firstname"
                      type="text"
                      maxlength="100"
                      required
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className="form-group">
                    <label htmlFor="tf-fal-register-lastname">Last name*:</label>
                    <TextField
                      id="tf-fal-register-lastname"
                      className="form-control"
                      name="lastname"
                      type="text"
                      maxlength="100"
                      required
                    />
                  </div>
                </Grid>
              </Grid>
              <div className="form-group">
                <label htmlFor="tf-fal-register-email">Email*:</label>
                <TextField id="tf-fal-register-email" className="form-control" name="email" type="email" maxlength="250" required />
              </div>
              <div className="form-group">
                <label htmlFor="tf-fal-register-password">Password*:</label>
                <TextField
                  id="tf-fal-register-password"
                  className="form-control"
                  name="password"
                  type="password"
                  minlength="8"
                  maxlength="50"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="ddl-fal-register-branch">Branch*:</label>
                <FormControl fullWidth>
                  <InputLabel id="ddl-fal-register-branch-label">Select a branch</InputLabel>
                  <Select
                    labelId="ddl-fal-register-branch-label"
                    id="ddl-fal-register-branch"
                    className="form-control"
                    name="branch"
                    required
                  >
                    <MenuItem value="" disabled>
                      - Select a branch -
                    </MenuItem>
                    <MenuItem value="BTN">Botany Town</MenuItem>
                    {/* Add other branches here */}
                  </Select>
                </FormControl>
              </div>
              <div className="form-check my-5">
                <FormControlLabel
                  control={<Checkbox id="cb-fal-register-agree" name="agree" required />}
                  label={
                    <Typography variant="body2" color="textSecondary" component="span">
                      I have read and agree to the{' '}
                      <a
                        className="text-black text-hover-black "
                        href="javascript:void(0);"
                        data-toggle="modal"
                        data-target="#modal-fal-terms-and-conditions"
                        data-kmt="1"
                      >
                        Terms & Condition
                      </a>
                      .
                    </Typography>
                  }
                />
              </div>
              <Box textAlign="right">
                <Button
                  className="btn btn-lg px-5 btn-parallelogram btn-primary-red"
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  Join Now
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AccountLogin;


