import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useTheme } from '../context/ThemeContext';

const data = [
  { name: 'Direct', value: 300.56, color: '#1a202c' },
  { name: 'Affiliate', value: 135.18, color: '#d2f3c2' },
  { name: 'Sponsored', value: 154.02, color: '#cbd5e0' },
  { name: 'E-mail', value: 48.96, color: '#a0aec0' },
];

const COLORS_LIGHT = ['#1a202c', '#d2f3c2', '#a78bfa', '#bfdbfe'];
const COLORS_DARK = ['#a0aec0', '#d2f3c2', '#a78bfa', '#bfdbfe'];

const TotalSalesDonutChart = () => {
  const { isDark } = useTheme();
  const totalSales = data.reduce((sum, entry) => sum + entry.value, 0);
  const mainPercentage = ((data[0].value / totalSales) * 100).toFixed(1);

  // Custom tooltip component
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      const percentage = ((data.value / totalSales) * 100).toFixed(1);
      return (
        <div className={`p-3 rounded-lg shadow-lg border ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'}`}>
          <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {data.name}
          </p>
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            ${data.value.toFixed(2)} ({percentage}%)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`w-[30%] p-6 rounded-xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-[#F7F9FB]  border-gray-200'} h-[380px] flex flex-col`}>
      <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>Total Sales</h3>

      <div className="flex-1 flex flex-col items-center justify-center relative">
        <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={70}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              startAngle={90} // Start angle to align with the imag
              endAngle={450} // 90 + 360 to draw a full circle
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={(isDark ? COLORS_DARK : COLORS_LIGHT)[index % COLORS_LIGHT.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend and values */}
      <div className="mt-6">
        {data.map((entry, index) => (
          <div key={`legend-${index}`} className="flex justify-between items-center mb-2 last:mb-0">
            <div className="flex items-center">
              <span
                className="inline-block w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: (isDark ? COLORS_DARK : COLORS_LIGHT)[index % COLORS_LIGHT.length] }}
              ></span>
              <span className={`text-sm ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{entry.name}</span>
            </div>
            <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{`$${entry.value.toFixed(2)}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalSalesDonutChart;