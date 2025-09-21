import React, { useState } from 'react';

const OrderList = () => {
  const [orders] = useState([
    {
      id: '12345',
      customer: 'John Doe',
      email: 'john.doe@email.com',
      amount: 99.99,
      status: 'Pending',
      date: '2024-01-15'
    },
    {
      id: '12344',
      customer: 'Jane Smith',
      email: 'jane.smith@email.com',
      amount: 149.99,
      status: 'Shipped',
      date: '2024-01-14'
    },
    {
      id: '12343',
      customer: 'Bob Johnson',
      email: 'bob.johnson@email.com',
      amount: 79.99,
      status: 'Delivered',
      date: '2024-01-13'
    },
    {
      id: '12342',
      customer: 'Alice Brown',
      email: 'alice.brown@email.com',
      amount: 199.99,
      status: 'Processing',
      date: '2024-01-12'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'pending': return '#f39c12';
      case 'processing': return '#3498db';
      case 'shipped': return '#9b59b6';
      case 'delivered': return '#27ae60';
      default: return '#95a5a6';
    }
  };

  return (
    <div className="order-list">
      <h1>Order List</h1>
      
      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.email}</td>
                <td>${order.amount.toFixed(2)}</td>
                <td>
                  <span 
                    className="status-badge" 
                    style={{ backgroundColor: getStatusColor(order.status) }}
                  >
                    {order.status}
                  </span>
                </td>
                <td>{order.date}</td>
                <td>
                  <button className="action-btn">View</button>
                  <button className="action-btn">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;