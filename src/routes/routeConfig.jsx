import React from 'react';
import Dashboard from '../components/Dashboard';
import OrderList from '../components/OrderList';

// Route configuration data
export const pageRoutes = [
    {
        path: '/',
        element: <Dashboard />,
        title: 'Dashboard',
    },
  {
    path: '/dashboard',
    element: <Dashboard />,
    title: 'Dashboard',
  },
  {
    path: '/orders',
    element: <OrderList />,
    title: 'Orders',
  }
];


