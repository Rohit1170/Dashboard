import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const HighPriorityAlert = ({ type, date, details }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle1" color="textSecondary">{date}</Typography>
        <Typography variant="h6">{type}</Typography>
        <Typography variant="body2" paragraph>{details}</Typography>
        <Box display="flex" justifyContent="space-between">
          <Button variant="outlined" color="primary">Ignore</Button>
          <Button variant="contained" color="primary">Resolve</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default HighPriorityAlert;
