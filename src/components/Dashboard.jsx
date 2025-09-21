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
import { Legend, LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, Tooltip } from 'recharts';
import RevenueChart from './RevenueChart';
import RevenueByLocation from './RevenueByLocation';
import TopSellingProductsTable from './TopSellingProducts'
import TotalSalesDonutChart from './TotalSalesDonutChart'

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
            <div className="flex gap-8 mb-8">
              {/* Left side - Metrics in 2x2 grid */}
              <div className="w-[50%] grid grid-cols-2 gap-4">
                {/* Customers Card */}
                <div className="h-[112px] p-6 rounded-xl  bg-blue-50  border-blue-100">
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
                <div className={` h-[112px] p-6 rounded-xl  ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-[#F7F9FB] border border-gray-200'}`}>
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
                <div className={`h-[112px] p-6 rounded-xl  ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-[#F7F9FB] border border-gray-200'}`}>
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
                <div className="h-[112px] p-6 rounded-xl  bg-[#E5ECF6] border-purple-100">
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

            </div>











            {/* Revenue by Location Chart */}
            <div className="flex gap-8 mb-8">
              <RevenueChart isDark={false} />
              <RevenueByLocation isDark={false} />
            </div>






            {/* Top Selling Products and Total Sales Row */}
            <div className='flex gap-8 mb-8 '>
              <TopSellingProductsTable isDark={false} />
              <TotalSalesDonutChart isDark={false} />
            </div>




          </main>
        </div>
      </div>
    </div>

  );
};

export default Dashboard;







