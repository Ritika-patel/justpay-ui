import React, { useState } from 'react';
import {
  Users,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  Search,
  Bell,
  Menu,
  Sun,
  Moon,
  Home,
  FolderOpen,
  BarChart3,
  BookOpen,
  User,
  CreditCard,
  Building2,
  Rss,
  MessageSquare,
  Star,
  Grid3X3,
  Clock
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, Tooltip } from 'recharts';


const Dashboard = () => {
  const [isDark, setIsDark] = useState(false);

  const revenueData = [
    { month: 'Jan', current: 13000, previous: 8000 },
    { month: 'Feb', current: 10000, previous: 17000 },
    { month: 'Mar', current: 7000, previous: 13000 },
    { month: 'Apr', current: 15000, previous: 11000 },
    { month: 'May', current: 11000, previous: 10000 },
    { month: 'Jun', current: 23000, previous: 20000 }
  ];

  const projectionData = [
    { month: 'Jan', value: 18 },
    { month: 'Feb', value: 25 },
    { month: 'Mar', value: 22 },
    { month: 'Apr', value: 28 },
    { month: 'May', value: 17 },
    { month: 'Jun', value: 26 }
  ];

  const locations = [
    { city: 'New York', revenue: '72K' },
    { city: 'San Francisco', revenue: '39K' },
    { city: 'Sydney', revenue: '25K' },
    { city: 'Singapore', revenue: '61K' }
  ];

  const data = [
    { month: 'Jan', actuals: 16, projections: 4, total: 20 },
    { month: 'Feb', actuals: 20, projections: 5, total: 25 },
    { month: 'Mar', actuals: 17, projections: 4, total: 21 },
    { month: 'Apr', actuals: 21, projections: 6, total: 27 },
    { month: 'May', actuals: 14, projections: 3, total: 17 },
    { month: 'Jun', actuals: 20, projections: 5, total: 25 },
  ];

  return (
    <div className={`${isDark ? 'bg-gray-900' : 'bg-white'} flex overflow-auto`} style={{ height: 'calc(100vh - 60px)' }}>

      <div className="flex-1 flex flex-col">
        {/* Header */}


        {/* Dashboard Content with Right Sidebar */}
        <div className="flex-1 flex">
          {/* Main Content Area */}
          <main className="flex-1 p-6">
            <div className="mb-6">
              <h1 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>eCommerce</h1>
            </div>

            {/* Metrics and Chart Row */}
            <div className="flex gap-10 mb-6">
              {/* Left side - Metrics in 2x2 grid */}
              <div className="w-[50%] grid grid-cols-2 gap-4">
                {/* Customers Card */}
                <div className="h-[112px] p-6 rounded-xl  bg-blue-50 border border-blue-100">
                  <div className="mb-2">
                    <h3 className="text-sm font-semibold text-gray-600 mb-3">Customers</h3>
                    <div className="flex items-end justify-between">
                      <p className="text-3xl font-bold text-gray-900">3,781</p>
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-medium text-green-600">+11.01%</span>
                        <TrendingUp className="h-4 w-4 text-green-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Orders Card */}
                <div className={` h-[112px] p-6 rounded-xl  ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-[#F7F9FB] border border-gray-200'}`}>
                  <div className="mb-2">
                    <h3 className={`text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3`}>Orders</h3>
                    <div className="flex items-end justify-between">
                      <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>1,219</p>
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-medium text-red-600">-0.03%</span>
                        <TrendingUp className="h-4 w-4 text-red-600 transform rotate-180" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Revenue Card */}
                <div className={`h-[112px] p-6 rounded-xl  ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-[#F7F9FB] border border-gray-200'}`}>
                  <div className="mb-2">
                    <h3 className={`text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3`}>Revenue</h3>
                    <div className="flex items-end justify-between">
                      <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>$695</p>
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-medium text-green-600">+15.03%</span>
                        <TrendingUp className="h-4 w-4 text-green-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Growth Card */}
                <div className="h-[112px] p-6 rounded-xl  bg-[#E5ECF6] border border-purple-100">
                  <div className="mb-2">
                    <h3 className="text-sm font-semibold text-gray-600 mb-3">Growth</h3>
                    <div className="flex items-end justify-between">
                      <p className="text-3xl font-bold text-gray-900">30.1%</p>
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-medium text-green-600">+6.08%</span>
                        <TrendingUp className="h-4 w-4 text-green-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Projections vs Actuals Chart */}
              <div className={`w-[50%] p-6 rounded-xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} h-[252px]`}>
                <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Projections vs Actuals</h3>
                <div className="h-[190px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={data}
                      barCategoryGap="20%"
                    >
                      <XAxis
                        dataKey="month"
                        axisLine={false}
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

            </div>

            {/* Revenue by Location Chart */}
            <div className="mb-8">
              <div className={`p-6 rounded-xl  ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Revenue by Location</h3>
                <div className="flex items-center justify-between">
                  <div className="w-48">
                    <div className={`w-32 h-32 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center ${isDark ? 'bg-gray-700' : ''}`}>
                      <div className="text-xs text-gray-500">World Map</div>
                    </div>
                  </div>
                  <div className="flex-1 ml-8">
                    <div className="space-y-3">
                      {locations.map((location, index) => (
                        <div key={index} className="flex items-center justify-between py-2">
                          <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{location.city}</span>
                          <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{location.revenue}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Charts Row */}
            <div className="grid grid-cols-2 gap-6">
              {/* Revenue Chart */}
              <div className={`p-6 rounded-xl  ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-[#F7F9FB] border-gray-200'}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Revenue</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-black"></div>
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Current Week</span>
                      <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>$58,211</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Previous Week</span>
                      <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>$68,768</span>
                    </div>
                  </div>
                </div>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: isDark ? '#9ca3af' : '#6b7280' }}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: isDark ? '#9ca3af' : '#6b7280' }}
                        domain={[0, 30000]}
                        tickFormatter={(value) => `${value / 1000}K`}
                      />
                      <Line
                        type="monotone"
                        dataKey="current"
                        stroke="#1f2937"
                        strokeWidth={3}
                        dot={false}
                        strokeDasharray="5 5"
                      />
                      <Line
                        type="monotone"
                        dataKey="previous"
                        stroke="#9ca3af"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Total Sales */}
              <div className={`p-6 rounded-xl  ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Total Sales</h3>
                <div className="h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`text-6xl mb-4 ${isDark ? 'text-gray-600' : 'text-gray-300'}`}>📊</div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Sales Chart</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Selling Products and Total Sales Row */}
            <div className="grid grid-cols-2 gap-6">
              {/* Top Selling Products */}
              <div className={`p-6 rounded-xl  ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Top Selling Products</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className={`${isDark ? 'border-gray-700' : 'border-gray-200'} border-b`}>
                        <th className={`text-left py-3 px-2 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Name</th>
                        <th className={`text-left py-3 px-2 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Price</th>
                        <th className={`text-left py-3 px-2 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Quantity</th>
                        <th className={`text-left py-3 px-2 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`${isDark ? 'border-gray-700' : 'border-gray-100'} border-b`}>
                        <td className={`py-3 px-2 text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>ASOS Ridley High Waist</td>
                        <td className={`py-3 px-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>$79.49</td>
                        <td className={`py-3 px-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>82</td>
                        <td className={`py-3 px-2 text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>$6,518.18</td>
                      </tr>
                      <tr className={`${isDark ? 'border-gray-700' : 'border-gray-100'} border-b`}>
                        <td className={`py-3 px-2 text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>Marco Lightweight Shirt</td>
                        <td className={`py-3 px-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>$128.50</td>
                        <td className={`py-3 px-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>37</td>
                        <td className={`py-3 px-2 text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>$4,754.50</td>
                      </tr>
                      <tr className={`${isDark ? 'border-gray-700' : 'border-gray-100'} border-b`}>
                        <td className={`py-3 px-2 text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>Half Sleeve Shirt</td>
                        <td className={`py-3 px-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>$39.99</td>
                        <td className={`py-3 px-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>64</td>
                        <td className={`py-3 px-2 text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>$2,559.36</td>
                      </tr>
                      <tr className={`${isDark ? 'border-gray-700' : 'border-gray-100'} border-b`}>
                        <td className={`py-3 px-2 text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>Lightweight Jacket</td>
                        <td className={`py-3 px-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>$20.00</td>
                        <td className={`py-3 px-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>184</td>
                        <td className={`py-3 px-2 text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>$3,680.00</td>
                      </tr>
                      <tr>
                        <td className={`py-3 px-2 text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>Marco Shoes</td>
                        <td className={`py-3 px-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>$79.49</td>
                        <td className={`py-3 px-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>64</td>
                        <td className={`py-3 px-2 text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>$1,965.81</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Total Sales */}
              <div className={`p-6 rounded-xl  ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Total Sales</h3>
                <div className="flex items-center justify-between h-64">
                  <div className="relative w-40 h-40">
                    {/* Donut Chart using CSS */}
                    <div className="relative w-full h-full">
                      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                        <circle cx="50" cy="50" r="40" fill="none" stroke={isDark ? '#374151' : '#e5e7eb'} strokeWidth="8" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#1f2937" strokeWidth="8" strokeDasharray="94 251.2" strokeLinecap="round" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="8" strokeDasharray="56 251.2" strokeDashoffset="-94" strokeLinecap="round" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#8b5cf6" strokeWidth="8" strokeDasharray="61 251.2" strokeDashoffset="-150" strokeLinecap="round" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#06b6d4" strokeWidth="8" strokeDasharray="19 251.2" strokeDashoffset="-211" strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>38.6%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 ml-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 rounded-full bg-black"></div>
                          <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Direct</span>
                        </div>
                        <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>$300.56</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Affiliate</span>
                        </div>
                        <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>$135.18</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                          <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Sponsored</span>
                        </div>
                        <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>$154.02</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                          <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>E-mail</span>
                        </div>
                        <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>$48.96</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>

  );
};

export default Dashboard;