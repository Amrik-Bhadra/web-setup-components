import React, {useState} from "react";
import { Link } from "react-router-dom";
import {
  MdExpandMore,
  MdLogout,
  MdAccountCircle,
  MdSettings as MdUserSettings,
} from "react-icons/md";

import {getInitials} from "../../utils/functions";
import {user} from "../../utils/data";

const ProfileDropdown = ({isProfileDropdownOpen, setIsProfileDropdownOpen}) => {
  
  return (
    <div className="relative profile-dropdown">
      <button
        onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
        className="flex items-center gap-2 p-1 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-medium">
          {getInitials(user.name)}
        </div>
        <div className="hidden md:block text-left">
          <p className="text-sm font-medium text-gray-700">{user.name}</p>
          <p className="text-xs text-gray-500">{user.email}</p>
        </div>
        <MdExpandMore
          className={`
          w-5 h-5 text-gray-500 transition-transform duration-200
          ${isProfileDropdownOpen ? "rotate-180" : ""}
        `}
        />
      </button>

      {isProfileDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-200">
          <div className="px-4 py-2 border-b border-gray-200">
            <p className="text-sm font-medium text-gray-700">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>

          <div className="py-1">
            <Link
              to="/seller/profile"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              onClick={() => setIsProfileDropdownOpen(false)}
            >
              <MdAccountCircle className="w-5 h-5" />
              Profile
            </Link>
            <Link
              to="/seller/settings"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              onClick={() => setIsProfileDropdownOpen(false)}
            >
              <MdUserSettings className="w-5 h-5" />
              Settings
            </Link>
          </div>

          <div className="border-t border-gray-200 py-1">
            <button
              onClick={() => {
                // Add logout logic here
                setIsProfileDropdownOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left"
            >
              <MdLogout className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
