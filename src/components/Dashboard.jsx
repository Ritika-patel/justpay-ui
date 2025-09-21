import React from 'react';
import { useTheme } from '../context/ThemeContext';
import RevenueChart from './RevenueChart';
import RevenueByLocation from './RevenueByLocation';
import TopSellingProductsTable from './TopSellingProducts';
import TotalSalesDonutChart from './TotalSalesDonutChart';
import Projection from './Projection';
import Metrix from './Metrix';

const Dashboard = () => {
  const { isDark } = useTheme();
  return (
    <div className={`${isDark ? 'bg-gray-900' : 'bg-white'} flex overflow-auto`} style={{ height: 'calc(100vh - 60px)' }}>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex">
          <main className="flex-1 p-6">
            <div className="mb-6">
              <h1 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>eCommerce</h1>
            </div>

            <div className="flex gap-8 mb-8">
              <Metrix isDark={isDark} />
              <Projection isDark={isDark} />
            </div>

            <div className="flex gap-8 mb-8">
              <RevenueChart isDark={isDark} />
              <RevenueByLocation isDark={isDark} />
            </div>

            <div className="flex gap-8 mb-8">
              <TopSellingProductsTable isDark={isDark} />
              <TotalSalesDonutChart isDark={isDark} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;