import React, { useState } from 'react'
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
import { notifications, activities, contacts } from '../constants/index';


const DefaultLayout = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const [showNotification, setShowNotification] = useState(true);

    return (
        <div className='flex min-h-screen ont-inter font-normal text-[14px] leading-[20px] tracking-[0]'>



            <div className={`w-64 ${isDark ? 'bg-gray-800' : 'bg-white'} border-r ${isDark ? 'border-gray-700' : 'border-gray-200'} flex flex-col overflow-auto h-screen`}>
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
                            <p className={` font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Favorites</p>
                            <p className={` font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Recently</p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-3 py-1">
                                <div className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-gray-500' : 'bg-gray-400'}`}></div>
                                <span className={` ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Overview</span>
                            </div>
                            <div className="flex items-center space-x-3 py-1">
                                <div className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-gray-500' : 'bg-gray-400'}`}></div>
                                <span className={` ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Projects</span>
                            </div>
                        </div>
                    </div>

                    {/* Dashboards */}
                    <div className="mb-8">
                        <p className={` font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-3`}>Dashboards</p>
                        <div className="space-y-1">
                            <div className={`flex items-center space-x-3 px-3 py-2 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} border-l-4 border-blue-500`}>
                                <BarChart3 className={`h-5 w-5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`} />
                                <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Default</span>
                            </div>
                            <div className="flex items-center space-x-3 px-3 py-2">
                                <ShoppingCart className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                                <span className={` ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>eCommerce</span>
                            </div>
                            <div className="flex items-center space-x-3 px-3 py-2">
                                <FolderOpen className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                                <span className={` ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Projects</span>
                            </div>
                            <div className="flex items-center space-x-3 px-3 py-2">
                                <BookOpen className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                                <span className={` ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Online Courses</span>
                            </div>
                        </div>
                    </div>

                    {/* Pages */}
                    <div>
                        <p className={` font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-3`}>Pages</p>
                        <div className="space-y-1">
                            <div>
                                <div className="flex items-center space-x-3 px-3 py-2">
                                    <User className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                                    <span className={` ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>User Profile</span>
                                </div>
                                <div className="ml-12 space-y-1 ">
                                    <div className={`py-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Overview</div>
                                    <div className={`py-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Projects</div>
                                    <div className={`py-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Campaigns</div>
                                    <div className={`py-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Documents</div>
                                    <div className={`py-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Followers</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 px-3 py-2">
                                <CreditCard className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                                <span className={` ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Account</span>
                            </div>
                            <div className="flex items-center space-x-3 px-3 py-2">
                                <Building2 className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                                <span className={` ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Corporate</span>
                            </div>
                            <div className="flex items-center space-x-3 px-3 py-2">
                                <Rss className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                                <span className={` ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Blog</span>
                            </div>
                            <div className="flex items-center space-x-3 px-3 py-2">
                                <MessageSquare className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                                <span className={` ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Social</span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div className='flex-1 flex flex-col '>
                <header className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-6 py-4`}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Grid3X3 className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                            <Star className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                            <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'} `}>Dashboards</span>
                            <span className={`${isDark ? 'text-gray-500' : 'text-gray-400'}`}>/</span>
                            <span className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium`}>Default</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className={`pl-10 pr-16 py-2 w-80 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 `}
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
                            <button onClick={() => setShowNotification(!showNotification)} className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                                <Bell className={`h-5 w-5 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
                            </button>
                            <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                                <Menu className={`h-5 w-5 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
                            </button>
                        </div>
                    </div>
                </header>


                <div className='bg-white flex-1 flex flex-col'>
                    {children}
                </div>

            </div>

           { showNotification &&

<aside className={`w-80 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-l p-6 overflow-auto h-screen`}>
            {/* Notifications */}
            <div className="mb-8">
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Notifications</h3>
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center ">
                      {notification.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={` ${isDark ? 'text-white' : 'text-gray-900'}`}>{notification.message}</p>
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
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center ">
                      {activity.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={` ${isDark ? 'text-white' : 'text-gray-900'}`}>{activity.message}</p>
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
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center ">
                      {contact.avatar}
                    </div>
                    <span className={` ${isDark ? 'text-white' : 'text-gray-900'}`}>{contact.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
}




        </div>
    )
}

export default DefaultLayout