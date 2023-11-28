import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { Search } from '@mui/icons-material';

const Booking = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <Container className="py-3 py-md-5" id='/booking'>
      <Typography variant="h3" align="center" className="mb-5">
        Re-Schedule Booking
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <form
          action="/booking"
          id="form-fbrf-reschedule"
          method="post"
          data-kmt="1"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="tf-fbrf-lastname">Last Name</label>
            <TextField
              type="text"
              name="lastname"
              id="tf-fbrf-lastname"
              className="form-control"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tf-fbrf-mobile">Mobile</label>
            <TextField
              type="tel"
              name="mobile"
              id="tf-fbrf-mobile"
              className="form-control"
              placeholder="Mobile"
              required
            />
          </div>
          <Box sx={{ textAlign: 'right' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                transform: 'skew(-20deg)',
                borderRadius: '0',
                marginTop: '10px',
              }}
            >
              <Search sx={{ marginRight: '5px' }} />
              Find
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );

};

export default Booking;
