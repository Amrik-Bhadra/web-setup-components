import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  MdChevronLeft,
  MdChevronRight,
  MdMenu,
  MdSearch,
} from "react-icons/md";

import { sidebarItems } from "../../utils/data";
import ProfileDropdown from "./ProfileDropdown";
import NotificationDropdown from "./NotificationDropdown";
import Sidebar from "./Sidebar";
import Chatbot from "./Chatbot"; // Import Chatbot component
import Navbar from "../common/Navbar";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProfileDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".profile-dropdown")) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getPageTitle = () => {
    const path = location.pathname;
    const currentItem = sidebarItems
      .flatMap((group) => group.items)
      .find((item) => item.path === path);
    return currentItem ? currentItem.name : "Dashboard";
  };

  // Search Bar Component
  const SearchBar = () => (
    <div
      className={`flex items-center ${isSearchExpanded ? "w-64" : "w-10"} transition-all duration-300`}
    >
      <div className="relative flex items-center w-full">
        <button
          onClick={() => setIsSearchExpanded(!isSearchExpanded)}
          className="p-2 rounded-lg hover:bg-gray-100 absolute left-0"
        >
          <MdSearch className="w-6 h-6 text-gray-500" />
        </button>
        <input
          type="text"
          placeholder="Search..."
          className={`pl-10 pr-4 py-2 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${
            isSearchExpanded ? "w-full opacity-100" : "w-0 opacity-0"
          } transition-all duration-300`}
        />
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar Component */}
        <Navbar />
        {/* Navbar Component */}

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6">
          {/* Dashboard Content */}
          <p>Welcome to the dashboard!</p>
        </main>
      </div>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Dashboard;
