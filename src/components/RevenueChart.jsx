import React from 'react';
import { Legend, LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, Tooltip } from 'recharts';

const revenueData = [
    { name: 'Jan', 'Current Week': 12, 'Previous Week': 7.5 },
    { name: 'Feb', 'Current Week': 8, 'Previous Week': 16 },
    { name: 'Mar', 'Current Week': 7, 'Previous Week': 10 },
    { name: 'Apr', 'Current Week': 15, 'Previous Week': 9.5 },
    { name: 'May', 'Current Week': 20, 'Previous Week': 12 },
    { name: 'Jun', 'Current Week': 23, 'Previous Week': 20 },
  ];

const RevenueChart = ({ isDark }) => {
    return (
      <div className={`w-[70%] p-6 rounded-xl ${isDark ? 'bg-gray-800  border-gray-700' : 'bg-[#F7F9FB]  border-gray-200'} h-[318px]`}>
        <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Revenue</h3>
        <div className="h-[190px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={revenueData}
              margin={{
                top: 20, // Increased top margin for month labels
                right: 20,
                left: -20, // Adjust left margin to move Y-axis labels closer
                bottom: -30,
              }}
            >
              <XAxis
                dataKey="name"
                axisLine={true}
                tickLine={false}
                tick={{ fontSize: 12, fill: isDark ? '#9ca3af' : '#6b7280' }}
                stroke={isDark ? '#4b5563' : '#d1d5db'}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: isDark ? '#9ca3af' : '#6b7280' }}
                domain={[0, 30]}
                tickFormatter={(value) => `${value}M`}
              />
              <Tooltip
                cursor={{ strokeDasharray: '3 3' }}
                formatter={(value) => `$${(value * 1000000).toLocaleString()}`}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Legend
                wrapperStyle={{ position: 'relative', top: -10, left: 0, fontSize: '12px' }}
                content={() => (
                  <ul style={{ display: 'flex', justifyContent: 'flex-start', padding: 0, margin: 0, listStyle: 'none' }}>
                    <li style={{ marginRight: '20px', color: isDark ? '#e5e7eb' : '#374151' }}>
                      <span style={{
                        display: 'inline-block',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#2d3748', // Darker dot for current week
                        marginRight: '5px'
                      }}></span>
                      Current Week <span style={{ fontWeight: 'bold' }}>$58,211</span>
                    </li>
                    <li style={{ color: isDark ? '#e5e7eb' : '#374151' }}>
                      <span style={{
                        display: 'inline-block',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#cbd5e0', // Lighter dot for previous week
                        marginRight: '5px'
                      }}></span>
                      Previous Week <span style={{ fontWeight: 'bold' }}>$68,768</span>
                    </li>
                  </ul>
                )}
              />
              <Line
                type="monotone"
                dataKey="Current Week"
                stroke="#2d3748" // Darker line for current week
                strokeWidth={2}
                dot={false}
                strokeDasharray="5 5" // Dotted line for Current Week
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="Previous Week"
                stroke="#93c5fd" // Light blue for previous week
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };

  export default RevenueChart;