import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';


const DeviceChart = ({ data }) => {
  const chartData = {
    labels: data.map(entry => entry.dateTime),
    datasets: [
      {
        label: 'Total Users',
        data: data.map(entry => entry.totalUsers),
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        fill: false,
      },
      {
        label: 'Devices Used',
        data: data.map(entry => entry.devicesUsed),
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        min: 0,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default DeviceChart;
