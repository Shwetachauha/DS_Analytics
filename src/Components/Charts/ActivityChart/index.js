import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import moment from 'moment';
import { userActivities } from './DeviceData';

const ActivityChart = () => {
  const data = userActivities.map(activity => ({
    dateTime: moment(activity.dateTime).format('YYYY-MM-DD HH:mm'),
    totalUsers: activity.totalUsers,
    devicesUsed: activity.devicesUsed,
  }));

  return (
    <LineChart width={800} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="dateTime" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="totalUsers" name="Total Users" stroke="rgba(75,192,192,1)" strokeWidth={2} />
      <Line type="monotone" dataKey="devicesUsed" name="Devices Used" stroke="rgba(255,99,132,1)" strokeWidth={2} />
    </LineChart>
  );
};

export default ActivityChart;

