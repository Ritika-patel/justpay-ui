import React from 'react';
import MapSvg from '../assets/Map.svg';
import { useTheme } from '../context/ThemeContext';

const revenueData = [
    { location: 'New York', revenue: 72 },
    { location: 'San Francisco', revenue: 39 },
    { location: 'Sydney', revenue: 25 },
    { location: 'Singapore', revenue: 61 },
];

const RevenueByLocation = () => {
    const { isDark } = useTheme();
    const maxRevenue = Math.max(...revenueData.map(item => item.revenue));

    return (
        <div className={`w-[30%] h-[318px] p-4 rounded-xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-[#F7F9FB]  border-gray-200'} `}>
            <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>Revenue by Location</h3>
            <div className="g-[100px]  p-1 flex items-center justify-center">
                <img
                    src={MapSvg}
                    alt="World Map"
                    className="w-full h-[100px] object-contain"
                />
            </div>

            {/* Location List Section */}
            <div className="space-y-4">
                {revenueData.map((item, index) => (
                    <div key={index} className="flex items-center">

                        <div className='flex flex-col flex-1'>
                            <div className='flex w-full'>
                                <div className={`flex-1 ${isDark ? 'text-gray-200' : 'text-gray-700'} font-medium`}>
                                    {item.location}
                                </div>

                                <div className={`ml-4 w-12 text-right ${isDark ? 'text-gray-200' : 'text-gray-900'} font-semibold`}>
                                    {item.revenue}K
                                </div>
                            </div>

                            <div className="flex-1">
                                <div
                                    className={`h-1 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}
                                    style={{ width: '100%' }}
                                >
                                    <div
                                        className={`h-1 rounded-full ${isDark ? 'bg-blue-300' : 'bg-blue-400'}`}
                                        style={{ width: `${(item.revenue / maxRevenue) * 100}%` }}
                                    />
                                </div>
                            </div>

                        </div>


                    </div>
                ))}
            </div>
        </div>
    );
};

export default RevenueByLocation;