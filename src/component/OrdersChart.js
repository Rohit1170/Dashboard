import React from 'react';
import Chart from 'chart.js/auto';
import { Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';

const OrdersChart = () => {
  return (
    <Card>
      <CardContent className='rounded-lg'>
        <Typography variant="h6" gutterBottom>Orders</Typography>
        <Box display="flex" justifyContent="center" alignItems="center" height={200}>
          <canvas id='' />
        </Box>
        <Box className=''>
          <Typography variant="body2">Upcoming: 50</Typography>
          <Typography variant="body2">Ongoing: 100</Typography>
          <Typography variant="body2">Completed: 50</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OrdersChart;
