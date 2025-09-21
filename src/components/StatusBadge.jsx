import React from 'react';

const StatusBadge = ({ status, isDark }) => {
  let colorClass = '';
  let dotColorClass = '';

  switch (status) {
    case 'In Progress':
      colorClass = isDark ? 'text-blue-300' : 'text-blue-600';
      dotColorClass = 'bg-blue-500';
      break;
    case 'Complete':
      colorClass = isDark ? 'text-green-300' : 'text-green-600';
      dotColorClass = 'bg-green-500';
      break;
    case 'Pending':
      colorClass = isDark ? 'text-yellow-300' : 'text-yellow-600';
      dotColorClass = 'bg-yellow-500';
      break;
    case 'Approved':
      colorClass = isDark ? 'text-purple-300' : 'text-purple-600';
      dotColorClass = 'bg-purple-500';
      break;
    case 'Rejected':
      colorClass = isDark ? 'text-red-300' : 'text-red-600';
      dotColorClass = 'bg-red-500';
      break;
    default:
      colorClass = isDark ? 'text-gray-400' : 'text-gray-500';
      dotColorClass = 'bg-gray-400';
      break;
  }

  return (
    <span className={`inline-flex items-center text-xs font-medium ${colorClass}`}>
      <span className={`w-2 h-2 rounded-full mr-1 ${dotColorClass}`}></span>
      {status}
    </span>
  );
};

export default StatusBadge;