import React, { useState } from 'react';
import { Search, Bell, Menu, Sun, Moon, Star, Grid3X3, Clock } from 'lucide-react';
import { notifications, activities, contacts } from '../constants/index';
import { useTheme } from '../context/ThemeContext';

// Import SVG icons
import DefaultIcon from '../assets/default.svg';
import EcommerceIcon from '../assets/eCommerce.svg';
import ProjectsIcon from '../assets/projects.svg';
import OnlineCourseIcon from '../assets/onLineCource.svg';
import UserProfileIcon from '../assets/userProfile.svg';
import AccountIcon from '../assets/account.svg';
import CorporateIcon from '../assets/coroporate.svg';
import BlogIcon from '../assets/blog.svg';
import ChatIcon from '../assets/chat.svg';
import BugIcon from '../components/bug.svg';
import UserIcon from '../assets/user.svg';
import LaneIcon from '../assets/lane.svg';

const DefaultLayout = ({ children }) => {
    const { isDark, toggleTheme } = useTheme();
    const [showNotification, setShowNotification] = useState(true);

    return (
        <div className='flex min-h-screen ont-inter font-normal text-[14px] leading-[20px] tracking-[0]'>



            <div className={`w-64 ${isDark ? 'bg-gray-800' : 'bg-white'} border-r ${isDark ? 'border-gray-700' : 'border-gray-200'} flex flex-col overflow-auto h-screen`}>
                {/* Logo */}
                <div className="p-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                            <img 
                                src="https://i.pravatar.cc/40?img=1" 
                                alt="ByeWind Logo" 
                                className="w-8 h-8 rounded-full object-cover"
                            />
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
                                <img src={DefaultIcon} alt="Default" className="h-5 w-5" />
                                <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Default</span>
                            </div>
                            <div className="flex items-center space-x-3 px-3 py-2">
                                <img src={EcommerceIcon} alt="eCommerce" className="h-5 w-5" />
                                <span className={` ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>eCommerce</span>
                            </div>
                            <div className="flex items-center space-x-3 px-3 py-2">
                                <img src={ProjectsIcon} alt="Projects" className="h-5 w-5" />
                                <span className={` ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Projects</span>
                            </div>
                            <div className="flex items-center space-x-3 px-3 py-2">
                                <img src={OnlineCourseIcon} alt="Online Courses" className="h-5 w-5" />
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
                                    <img src={UserProfileIcon} alt="User Profile" className="h-5 w-5" />
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
                                <img src={AccountIcon} alt="Account" className="h-5 w-5" />
                                <span className={` ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Account</span>
                            </div>
                            <div className="flex items-center space-x-3 px-3 py-2">
                                <img src={CorporateIcon} alt="Corporate" className="h-5 w-5" />
                                <span className={` ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Corporate</span>
                            </div>
                            <div className="flex items-center space-x-3 px-3 py-2">
                                <img src={BlogIcon} alt="Blog" className="h-5 w-5" />
                                <span className={` ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Blog</span>
                            </div>
                            <div className="flex items-center space-x-3 px-3 py-2">
                                <img src={ChatIcon} alt="Social" className="h-5 w-5" />
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
                                onClick={toggleTheme}
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
                {notifications.map((notification, index) => {
                  let iconComponent;
                  if (notification.icon === '🐛') {
                    iconComponent = <img src={BugIcon} alt="Bug" className="w-4 h-4" />;
                  } else if (notification.icon === '👤') {
                    iconComponent = <img src={UserIcon} alt="User" className="w-4 h-4" />;
                  } else if (notification.icon === '🔔') {
                    iconComponent = <img src={LaneIcon} alt="Lane" className="w-4 h-4" />;
                  } else {
                    iconComponent = <span className="text-sm">{notification.icon}</span>;
                  }
                  
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        {iconComponent}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={` ${isDark ? 'text-white' : 'text-gray-900'}`}>{notification.message}</p>
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} mt-1`}>{notification.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Activities */}
            <div className="mb-8">
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Activities</h3>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                      <img 
                        src={`https://i.pravatar.cc/40?img=${index + 1}`} 
                        alt={`Avatar ${index + 1}`} 
                        className="w-full h-full object-cover rounded-full"
                      />
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
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                      <img 
                        src={`https://i.pravatar.cc/40?img=${index + 10}`} 
                        alt={`${contact.name} Avatar`} 
                        className="w-full h-full object-cover rounded-full"
                      />
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