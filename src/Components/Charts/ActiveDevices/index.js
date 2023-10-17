import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';


const ActiveDevicesChart = ({ data }) => {
  const chartData = {
    labels: data.map(entry => entry.dateTime),
    datasets: [
      {
        label: 'Active Users',
        data: data.map(entry => entry.activeUsers),
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

export default ActiveDevicesChart;
