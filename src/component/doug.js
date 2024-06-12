import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import { Card, CardContent, Typography, Box } from '@mui/material';

Chart.register(ArcElement);

const DoughnutChart = ({ title, data }) => {
  const chartData = {
    datasets: [
      {
        backgroundColor: ['#36A2EB', '#FF6384', '#4FD2B5'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384', '#4FD2B5'],
        data: data,
      },
    ],
    labels: [],
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Box display="flex" justifyContent="center" alignItems="center" height={200}>
          <Doughnut data={chartData} />
        </Box>
        <Box className="bg-gradient-to-r from-white to-[#FFCB49] p-4 rounded">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white">Upcoming: </span>
            <span className="text-white">50</span>
          </div>
          <p>Ongoing: 50</p>
          <p>Completed: 100</p>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DoughnutChart;
