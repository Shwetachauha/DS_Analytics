import React from 'react';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import { userActivities } from './DeviceData';

const ActivityChart = () => {
  const labels = userActivities.map(activity => moment(activity.dateTime).format('YYYY-MM-DD HH:mm'));
  const totalUsersData = userActivities.map(activity => activity.totalUsers);
  const devicesUsedData = userActivities.map(activity => activity.devicesUsed);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Total Users',
        data: totalUsersData,
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        fill: false,
      },
      {
        label: 'Devices Used',
        data: devicesUsedData,
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

  return <Line data={data} options={options} />;
};

export default ActivityChart;
