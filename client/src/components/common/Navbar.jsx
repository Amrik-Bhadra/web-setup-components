import React, { useContext, useState } from "react";
import { MdChevronLeft, MdChevronRight, MdMenu } from "react-icons/md";
import ProfileDropdown from "../dashboard/ProfileDropdown";
import NotificationDropdown from "../dashboard/NotificationDropdown";
import { MdSearch } from "react-icons/md";

function Navbar() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const SearchBar = () => (
    <div
      className={`flex items-center ${isSearchExpanded ? "w-64" : "w-10"} transition-all duration-300`}
    >
      <div className="relative flex items-center w-full">
        <button
          onClick={() => setIsSearchExpanded(!isSearchExpanded)}
          className="p-2 rounded-lg hover:bg-gray-100 absolute left-0"
        >
          <MdSearch className="w-6 h-6 text-gray-500 cursor-pointer" />
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
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <MdMenu className="w-6 h-6 text-gray-500" />
        </button>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:block p-2 rounded-lg hover:bg-gray-100 transition-colors"
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <MdChevronRight className="w-6 h-6 text-gray-500" />
          ) : (
            <MdChevronLeft className="w-6 h-6 text-gray-500" />
          )}
        </button>

        <h1 className="text-xl font-semibold text-gray-800">
          {/* {getPageTitle()} */}
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <SearchBar />
        <NotificationDropdown
          setIsProfileDropdownOpen={setIsProfileDropdownOpen}
        />
        <ProfileDropdown
          isProfileDropdownOpen={isProfileDropdownOpen}
          setIsProfileDropdownOpen={setIsProfileDropdownOpen}
        />
      </div>
    </div>
  );
}

export default Navbar;
