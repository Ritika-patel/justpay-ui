import React from 'react';
import { TrendingUp, DollarSign, ShoppingCart, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Metrix = () => {
  const { isDark } = useTheme();
  return (
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
  )
}

export default Metrix