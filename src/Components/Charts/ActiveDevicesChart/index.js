import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ActiveDevicesChart = ({ data }) => {
  return (
    <LineChart width={800} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="dateTime" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="activeUsers" stroke="rgba(255,99,132,1)" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default ActiveDevicesChart;
