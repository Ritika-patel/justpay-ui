import React, { useState, useMemo, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import Pagination from './Pagination';
import StatusBadge from './StatusBadge';
import ArrowDownUpIcon from './arrowDownUp.svg';
import FilterIcon from './filter.svg';
import AddIcon from './add.svg';

// Dummy Data (replace with your actual data source)
const DUMMY_ORDERS = [
  {
    id: '#CM9801',
    user: { name: 'Natali Craig', avatar: 'https://i.pravatar.cc/32?img=1' },
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: 'Just now',
    status: 'In Progress',
  },
  {
    id: '#CM9802',
    user: { name: 'Kate Morrison', avatar: 'https://i.pravatar.cc/32?img=2' },
    project: 'CRM Admin pages',
    address: 'Larry San Francisco',
    date: 'A minute ago',
    status: 'Complete',
  },
  {
    id: '#CM9803',
    user: { name: 'Drew Cano', avatar: 'https://i.pravatar.cc/32?img=3' },
    project: 'Client Project',
    address: 'Bogwell Avenue Ocala',
    date: '1 hour ago',
    status: 'Pending',
  },
  {
    id: '#CM9804',
    user: { name: 'Orlando Diggs', avatar: 'https://i.pravatar.cc/32?img=4' },
    project: 'Admin Dashboard',
    address: 'Washburn Baton Rouge',
    date: 'Yesterday',
    status: 'Approved',
  },
  {
    id: '#CM9805',
    user: { name: 'Andi Lane', avatar: 'https://i.pravatar.cc/32?img=5' },
    project: 'App Landing Page',
    address: 'Nest Lane Olivette',
    date: 'Feb 2, 2023',
    status: 'Rejected',
  },
  // Duplicate some for pagination demonstration
  {
    id: '#CM9806',
    user: { name: 'Alice Smith', avatar: 'https://i.pravatar.cc/32?img=6' },
    project: 'Marketing Site',
    address: '123 Main St, Anytown',
    date: '2 hours ago',
    status: 'In Progress',
  },
  {
    id: '#CM9807',
    user: { name: 'Bob Johnson', avatar: 'https://i.pravatar.cc/32?img=7' },
    project: 'Product Feature',
    address: '456 Oak Ave, Big City',
    date: 'Yesterday',
    status: 'Complete',
  },
  {
    id: '#CM9808',
    user: { name: 'Charlie Brown', avatar: 'https://i.pravatar.cc/32?img=8' },
    project: 'Internal Tool',
    address: '789 Pine Ln, Smallville',
    date: 'Jan 15, 2023',
    status: 'Pending',
  },
  {
    id: '#CM9809',
    user: { name: 'Diana Prince', avatar: 'https://i.pravatar.cc/32?img=9' },
    project: 'Client Portal',
    address: '101 Elm Rd, Metropolis',
    date: 'Mar 1, 2023',
    status: 'Approved',
  },
  {
    id: '#CM9810',
    user: { name: 'Clark Kent', avatar: 'https://i.pravatar.cc/32?img=10' },
    project: 'Mobile App',
    address: '222 Cedar Dr, Gotham',
    date: 'Feb 28, 2023',
    status: 'Rejected',
  },
];

const ITEMS_PER_PAGE = 5; // Number of items per page

const Orders = () => {
  const { isDark } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState({ key: 'id', direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrders, setSelectedOrders] = useState({}); // Stores selected order IDs

  const handleSort = (key) => {
    setSortBy((prevSort) => ({
      key,
      direction: prevSort.key === key && prevSort.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCheckboxChange = (id) => {
    setSelectedOrders((prevSelected) => ({
      ...prevSelected,
      [id]: !prevSelected[id],
    }));
  };

  const handleSelectAll = (event) => {
    const newSelected = {};
    if (event.target.checked) {
      currentItems.forEach(item => {
        newSelected[item.id] = true;
      });
    }
    setSelectedOrders(newSelected);
  };

  const filteredAndSortedOrders = useMemo(() => {
    let result = [...DUMMY_ORDERS];

    // 1. Filter
    if (searchTerm) {
      result = result.filter(
        (order) =>
          order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.status.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 2. Sort
    result.sort((a, b) => {
      const aValue = sortBy.key === 'user' ? a.user.name : a[sortBy.key];
      const bValue = sortBy.key === 'user' ? b.user.name : b[sortBy.key];

      if (aValue < bValue) return sortBy.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortBy.direction === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }, [DUMMY_ORDERS, searchTerm, sortBy]); // Re-calculate when these dependencies change

  const totalPages = Math.ceil(filteredAndSortedOrders.length / ITEMS_PER_PAGE);

  // Get current items for the page
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredAndSortedOrders.slice(startIndex, endIndex);
  }, [filteredAndSortedOrders, currentPage]);

  // Reset page to 1 if search/sort changes result in fewer pages
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    } else if (totalPages === 0 && currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [filteredAndSortedOrders, totalPages]);


  return (
    <div className={`p-6 h-full ${isDark ? 'bg-gray-800  border-gray-700' : 'bg-white border-gray-200'}  flex flex-col`}>
      <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>Order List</h2>

      {/* Top Bar: Add, Filter, Sort, Search */}
      <div className={` flex items-center justify-between pb-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'} mb-4`}>
        <div className="flex justify-center  items-center space-x-2">
          <button className={`p-2 rounded-md bg-inherit ${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}>
            <img 
              src={AddIcon} 
              alt="Add" 
              className={`h-5 w-5 ${isDark ? 'filter brightness-0 invert' : ''}`}
            />
          </button>
          <button className={`p-2 rounded-md bg-inherit ${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}>
            <img 
              src={FilterIcon} 
              alt="Filter" 
              className={`h-5 w-5 ${isDark ? 'filter brightness-0 invert' : ''}`}
            />
          </button>
          <button className={`p-2 rounded-md bg-inherit ${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}>
            <img 
              src={ArrowDownUpIcon} 
              alt="Sort" 
              className={`h-5 w-5 ${isDark ? 'filter brightness-0 invert' : ''}`}
            />
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset page on search
            }}
            className={`pl-10 pr-4 py-2 rounded-md w-64 ${isDark ? 'bg-gray-700 text-white placeholder-gray-400 border border-gray-600' : 'bg-gray-100 text-gray-900 placeholder-gray-500 border border-gray-300'}`}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Table */}
      <div className="flex-grow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className={isDark ? 'bg-gray-700' : 'bg-gray-50'}>
            <tr>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input
                  type="checkbox"
                  className={`rounded ${isDark ? 'form-checkbox text-blue-500 bg-gray-600 border-gray-500' : 'form-checkbox text-blue-600 border-gray-300'} focus:ring-blue-500`}
                  onChange={handleSelectAll}
                  checked={currentItems.length > 0 && currentItems.every(item => selectedOrders[item.id])}
                />
              </th>
              {[
                { key: 'id', label: 'Order ID' },
                { key: 'user', label: 'User' },
                { key: 'project', label: 'Project' },
                { key: 'address', label: 'Address' },
                { key: 'date', label: 'Date' },
                { key: 'status', label: 'Status' },
              ].map((column) => (
                <th
                  key={column.key}
                  className={`py-3 px-4 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider cursor-pointer`}
                  onClick={() => handleSort(column.key)}
                >
                  <div className="flex items-center">
                    {column.label}
                    {sortBy.key === column.key && (
                      <span className="ml-1">
                        {sortBy.direction === 'asc' ? '▲' : '▼'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
              <th className="py-3 px-4"></th> {/* For the three dots icon */}
            </tr>
          </thead>
          <tbody className={isDark ? 'bg-gray-800 divide-gray-700' : 'bg-white divide-gray-200'}>
            {currentItems.length === 0 ? (
                <tr>
                    <td colSpan="7" className={`py-4 text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>No orders found.</td>
                </tr>
            ) : (
                currentItems.map((order) => (
                    <tr key={order.id} className={`${selectedOrders[order.id] ? (isDark ? 'bg-gray-700' : 'bg-blue-50') : ''} ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                    <td className="py-3 px-4 whitespace-nowrap">
                        <input
                        type="checkbox"
                        className={`rounded ${isDark ? 'form-checkbox text-blue-500 bg-gray-600 border-gray-500' : 'form-checkbox text-blue-600 border-gray-300'} focus:ring-blue-500`}
                        checked={!!selectedOrders[order.id]}
                        onChange={() => handleCheckboxChange(order.id)}
                        />
                    </td>
                    <td className={`py-3 px-4 whitespace-nowrap text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{order.id}</td>
                    <td className="py-3 px-4 whitespace-nowrap text-sm">
                        <div className="flex items-center">
                        <img
                            className="h-8 w-8 rounded-full object-cover mr-3"
                            src={order.user.avatar}
                            alt={order.user.name}
                        />
                        <span className={isDark ? 'text-gray-200' : 'text-gray-900'}>{order.user.name}</span>
                        </div>
                    </td>
                    <td className={`py-3 px-4 whitespace-nowrap text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{order.project}</td>
                    <td className={`py-3 px-4 whitespace-nowrap text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        <div className="flex items-center">
                            {order.id === '#CM9805' && ( // Special icon for #CM9805 like in the image
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 mr-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            )}
                            {order.address}
                        </div>
                    </td>
                    <td className={`py-3 px-4 whitespace-nowrap text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 mr-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h.01M7 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2h-2m-4-6V4a1 1 0 00-1-1H7a1 1 0 00-1 1v3" />
                            </svg>
                            {order.date}
                        </div>
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap text-sm">
                        <StatusBadge status={order.status} isDark={isDark} />
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className={`p-1 rounded-full ${isDark ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                        </button>
                    </td>
                    </tr>
                ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-auto pt-4"> {/* mt-auto pushes pagination to the bottom */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          isDark={isDark}
        />
      </div>
    </div>
  );
};

const OrderList = () => <Orders />;
export default OrderList;