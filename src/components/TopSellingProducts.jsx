import React from 'react';
import { useTheme } from '../context/ThemeContext';

const products = [
  { name: 'ASOS Ridley High Waist', price: 79.49, quantity: 82, amount: 6518.18 },
  { name: 'Marco Lightweight Shirt', price: 128.50, quantity: 37, amount: 4754.50 },
  { name: 'Half Sleeve Shirt', price: 39.99, quantity: 64, amount: 2559.36 },
  { name: 'Lightweight Jacket', price: 20.00, quantity: 184, amount: 3680.00 },
  { name: 'Marco Shoes', price: 79.49, quantity: 64, amount: 1965.81 },
];

const TopSellingProductsTable = () => {
  const { isDark } = useTheme();
  return (
    <div className={`w-[70%] p-6 rounded-xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-[#F7F9FB]  border-gray-200'} h-auto`}>
      <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Top Selling Products</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          {/* Table Header */}
          <thead>
            <tr className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-200'} text-sm`}>
              <th className={`py-2 px-0 font-normal ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Name</th>
              <th className={`py-2 px-0 text-right font-normal ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Price</th>
              <th className={`py-2 px-0 text-right font-normal ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Quantity</th>
              <th className={`py-2 px-0 text-right font-normal ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Amount</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className={`py-3 px-0 font-medium ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>{product.name}</td>
                <td className={`py-3 px-0 text-right ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>{`$${product.price.toFixed(2)}`}</td>
                <td className={`py-3 px-0 text-right ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>{product.quantity}</td>
                <td className={`py-3 px-0 text-right ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>{`$${product.amount.toFixed(2)}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSellingProductsTable;