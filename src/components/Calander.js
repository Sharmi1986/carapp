import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import Calendar from 'react-calendar';
import '../styles.css'



const Calander = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  
  const availableDates = Array.from({ length: 8 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    return date;
  });

  const isDateAvailable = (date) => {
    return availableDates.some((availableDate) => {
      // Compare year, month, and day
      return (
        date.getFullYear() === availableDate.getFullYear() &&
        date.getMonth() === availableDate.getMonth() &&
        date.getDate() === availableDate.getDate()
      );
    });
  };
  
  
  const timebookItems = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30'
  ];
  return (
    

    <Container>
            
        <Typography variant="h4" align='center'>Calendar</Typography>

      <Grid container spacing={1}>
        {/* Calendar Column */}
        <Grid item xs={8}>
            <Paper style={{ padding: '20px' }}>
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                tileClassName={({ date }) => {
                  return isDateAvailable(date) ? 'react-calendar__tile--available' : 'react-calendar__tile--disabled';
                }}
                className="custom-calendar" 
              />
           </Paper>
          <Grid item xs={12}>
          <div className="form-group">
            <div className="container-legenditem">
              <span className="item-legend selected">
                <span className="block-color"></span>
                <span className="legend-name">Selected</span>
              </span>
              <span className="item-legend available">
                <span className="block-color"></span>
                <span className="legend-name">Available</span>
              </span>
              <span className="item-legend not-available">
                <span className="block-color"></span>
                <span className="legend-name">Not Available</span>
              </span>
            </div>
          </div>
        </Grid>
        </Grid>
       
    <Grid item xs={4}>
          <Grid container spacing={1} sx={{backgroundColor:'#f9f9f9'}}>
            {/* O'clock Times */}
            <Grid item xs={6} >
              {timebookItems
                .filter((time) => time.endsWith(':00'))
                .map((time, index) => (
                  <Button key={index} variant="contained" fullWidth sx={{margin:'15px',backgroundColor:'white', color:'black'}}>
                    {time}
                  </Button> 
                ))}
            </Grid>

            {/* Half Past Times */}
            <Grid item xs={6}>
              {timebookItems
                .filter((time) => time.endsWith(':30'))
                .map((time, index) => (
                  <Button key={index} variant="contained" fullWidth sx={{margin:'15px',backgroundColor:'white', color:'black'}}>
                    {time}
                  </Button>
                ))}
            </Grid>
          </Grid>
       
       </Grid>
      </Grid>
        
        
    </Container>
  );
};

export default Calander;














       