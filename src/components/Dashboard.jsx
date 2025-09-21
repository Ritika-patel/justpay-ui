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
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from 'recharts';

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

  const notifications = [
    { icon: '🐛', message: 'You have a bug that needs...', time: 'Just now' },
    { icon: '👤', message: 'New user registered', time: '59 minutes ago' },
    { icon: '🐛', message: 'You have a bug that needs...', time: '12 hours ago' },
    { icon: '🔔', message: 'Andi Lane subscribed to you', time: 'Today, 11:59 AM' }
  ];

  const activities = [
    { avatar: '👨‍💻', message: 'You have a bug that needs...', time: 'Just now' },
    { avatar: '👨‍🔧', message: 'Released a new version', time: '59 minutes ago' },
    { avatar: '👩‍💻', message: 'Submitted a bug', time: '12 hours ago' },
    { avatar: '👨‍💼', message: 'Modified A data in Page X', time: 'Today, 11:59 AM' },
    { avatar: '👨‍💻', message: 'Deleted a page in Project X', time: 'Feb 2, 2023' }
  ];

  const contacts = [
    { name: 'Natali Craig', avatar: '👩‍💼' },
    { name: 'Drew Cano', avatar: '🔴' },
    { name: 'Orlando Diggs', avatar: '👨‍💼' },
    { name: 'Andi Lane', avatar: '👩‍💻' }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} flex`}>
      {/* Sidebar */}
      <div className={`w-64 ${isDark ? 'bg-gray-800' : 'bg-white'} border-r ${isDark ? 'border-gray-700' : 'border-gray-200'} flex flex-col`}>
        {/* Logo */}
        <div className="p-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
            </div>
            <span className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>ByeWind</span>
          </div>
        </div>

        <nav className="flex-1 px-4">
          {/* Favorites & Recently */}
          <div className="mb-8">
            <div className="flex space-x-8 mb-4">
              <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Favorites</p>
              <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Recently</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 py-1">
                <div className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-gray-500' : 'bg-gray-400'}`}></div>
                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Overview</span>
              </div>
              <div className="flex items-center space-x-3 py-1">
                <div className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-gray-500' : 'bg-gray-400'}`}></div>
                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Projects</span>
              </div>
            </div>
          </div>

          {/* Dashboards */}
          <div className="mb-8">
            <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-3`}>Dashboards</p>
            <div className="space-y-1">
              <div className={`flex items-center space-x-3 px-3 py-2 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} border-l-4 border-blue-500`}>
                <BarChart3 className={`h-5 w-5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`} />
                <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Default</span>
              </div>
              <div className="flex items-center space-x-3 px-3 py-2">
                <ShoppingCart className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>eCommerce</span>
              </div>
              <div className="flex items-center space-x-3 px-3 py-2">
                <FolderOpen className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Projects</span>
              </div>
              <div className="flex items-center space-x-3 px-3 py-2">
                <BookOpen className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Online Courses</span>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div>
            <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-3`}>Pages</p>
            <div className="space-y-1">
              <div>
                <div className="flex items-center space-x-3 px-3 py-2">
                  <User className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>User Profile</span>
                </div>
                <div className="ml-12 space-y-1 text-sm">
                  <div className={`py-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Overview</div>
                  <div className={`py-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Projects</div>
                  <div className={`py-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Campaigns</div>
                  <div className={`py-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Documents</div>
                  <div className={`py-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Followers</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 px-3 py-2">
                <CreditCard className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Account</span>
              </div>
              <div className="flex items-center space-x-3 px-3 py-2">
                <Building2 className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Corporate</span>
              </div>
              <div className="flex items-center space-x-3 px-3 py-2">
                <Rss className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Blog</span>
              </div>
              <div className="flex items-center space-x-3 px-3 py-2">
                <MessageSquare className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Social</span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-6 py-4`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Grid3X3 className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
              <Star className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
              <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>Dashboards</span>
              <span className={`${isDark ? 'text-gray-500' : 'text-gray-400'}`}>/</span>
              <span className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium`}>Default</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                <input
                  type="text"
                  placeholder="Search"
                  className={`pl-10 pr-16 py-2 w-80 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
                />
                <span className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-xs px-2 py-1 rounded ${isDark ? 'text-gray-400 bg-gray-600' : 'text-gray-500 bg-gray-200'}`}>⌘/</span>
              </div>
              <button 
                onClick={() => setIsDark(!isDark)} 
                className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                {isDark ? (
                  <Sun className="h-5 w-5 text-gray-300" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600" />
                )}
              </button>
              <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <Clock className={`h-5 w-5 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
              </button>
              <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <Bell className={`h-5 w-5 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
              </button>
              <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <Menu className={`h-5 w-5 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content with Right Sidebar */}
        <div className="flex-1 flex">
          {/* Main Content Area */}
          <main className="flex-1 p-6">
            <div className="mb-6">
              <h1 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>eCommerce</h1>
            </div>

            {/* Metrics and Chart Row */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {/* Left side - Metrics in 2x2 grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Customers Card */}
                <div className="p-6 rounded-xl shadow-sm bg-blue-50 border border-blue-100">
                  <div className="mb-2">
                    <h3 className="text-sm text-gray-600 mb-3">Customers</h3>
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
                <div className={`p-6 rounded-xl shadow-sm ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                  <div className="mb-2">
                    <h3 className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3`}>Orders</h3>
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
                <div className={`p-6 rounded-xl shadow-sm ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                  <div className="mb-2">
                    <h3 className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3`}>Revenue</h3>
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
                <div className="p-6 rounded-xl shadow-sm bg-purple-50 border border-purple-100">
                  <div className="mb-2">
                    <h3 className="text-sm text-gray-600 mb-3">Growth</h3>
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
              <div className={`col-span-2 p-6 rounded-xl shadow-sm ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Projections vs Actuals</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={projectionData} barCategoryGap="20%">
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
                      <Bar dataKey="value" fill="#93c5fd" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Revenue by Location Chart */}
            <div className="mb-8">
              <div className={`p-6 rounded-xl shadow-sm ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
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
              <div className={`p-6 rounded-xl shadow-sm ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
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
                        tickFormatter={(value) => `${value/1000}K`}
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
              <div className={`p-6 rounded-xl shadow-sm ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
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
              <div className={`p-6 rounded-xl shadow-sm ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
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
              <div className={`p-6 rounded-xl shadow-sm ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
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

          {/* Right Sidebar */}
          <aside className={`w-80 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-l p-6`}>
            {/* Notifications */}
            <div className="mb-8">
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Notifications</h3>
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm">
                      {notification.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{notification.message}</p>
                      <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} mt-1`}>{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div className="mb-8">
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Activities</h3>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">
                      {activity.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{activity.message}</p>
                      <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} mt-1`}>{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contacts */}
            <div>
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Contacts</h3>
              <div className="space-y-3">
                {contacts.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">
                      {contact.avatar}
                    </div>
                    <span className={`text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{contact.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;