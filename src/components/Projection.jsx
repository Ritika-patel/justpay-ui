import React from 'react';
import { XAxis, YAxis, ResponsiveContainer, BarChart, Bar, Tooltip } from 'recharts';
import { useTheme } from '../context/ThemeContext';

const data = [
  { month: 'Jan', actuals: 16, projections: 4, total: 20 },
  { month: 'Feb', actuals: 20, projections: 5, total: 25 },
  { month: 'Mar', actuals: 17, projections: 4, total: 21 },
  { month: 'Apr', actuals: 21, projections: 6, total: 27 },
  { month: 'May', actuals: 14, projections: 3, total: 17 },
  { month: 'Jun', actuals: 20, projections: 5, total: 25 },
];

const Projection = () => {
  const { isDark } = useTheme();
  return (
    <div className={`w-[50%] p-6 rounded-xl ${isDark ? 'bg-gray-800  border-gray-700' : 'bg-[#F7F9FB]  border-gray-200'} h-[252px]`}>
    <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Projections vs Actuals</h3>
    <div className="h-[190px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          barCategoryGap="20%"
        >
          <XAxis
            dataKey="month"
            axisLine={true}
            tickLine={false}
            tick={{ fontSize: 12, fill: isDark ? '#9ca3af' : '#6b7280' }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: isDark ? '#9ca3af' : '#6b7280' }}
            domain={[0, 30]}
            tickFormatter={(value) => `${value}M`}
          />
          <Tooltip
            cursor={{ fill: 'transparent' }}
            labelFormatter={(label) => `Month: ${label}`}
            formatter={(value, name, props) => {
              if (name === 'actuals') {
                return [`${value}M`, 'Actuals'];
              }
              if (name === 'projections') {
                return [`${value}M`, 'Projections'];
              }
              return null;
            }}
          />
          <Bar dataKey="actuals" stackId="a" fill="#93c5fd" radius={[4, 4, 0, 0]} />
          <Bar dataKey="projections" stackId="a" fill="#c4e3fd" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
  )
}

export default Projection