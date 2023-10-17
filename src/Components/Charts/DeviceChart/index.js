
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const DeviceChart = ({ data }) => {
  const chartData = data.map(entry => ({
    dateTime: entry.dateTime,
    totalUsers: entry.totalUsers,
    devicesUsed: entry.devicesUsed,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dateTime" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="totalUsers" name="Total Users" stroke="rgba(75,192,192,1)" strokeWidth={2} />
        <Line type="monotone" dataKey="devicesUsed" name="Devices Used" stroke="rgba(255,99,132,1)" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DeviceChart;
