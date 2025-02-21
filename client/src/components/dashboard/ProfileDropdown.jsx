import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MdExpandMore,
  MdLogout,
  MdAccountCircle,
  MdSettings as MdUserSettings,
} from "react-icons/md";
import { AuthContext } from "../../context/AuthContext";
import { getInitials } from "../../utils/functions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

const ProfileDropdown = ({
  isProfileDropdownOpen,
  setIsProfileDropdownOpen,
}) => {
  const navigate = useNavigate();
  const { currentUser, setCurrent, refreshLoginContext, loading, setLoading } =
    useContext(AuthContext);

  console.log(" Testing The User Log Info - > ", currentUser);

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/logout",
        {},
        { withCredentials: true }
      );

      if (response.status === 200) {
        toast.success("Logout successful!");
        setLoading(true);
        setTimeout(async () => {
          await refreshLoginContext();
          setLoading(false);
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.error("Logout Error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Logout failed! Try again.");
    }
  };

  return currentUser ? (
    <div className="relative profile-dropdown">
      <button
        onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
        className="flex items-center gap-2 p-1 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-medium">
          {getInitials(currentUser?.firstName)}
        </div>
        <div className="hidden md:block text-left">
          <p className="text-sm font-medium text-gray-700">
            {`${currentUser?.firstName} ${currentUser?.lastName}`}
          </p>
          <p className="text-xs text-gray-500">{currentUser?.email}</p>
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
            <p className="text-sm font-medium text-gray-700">
              {`${currentUser?.firstName} ${currentUser?.lastName}`}
            </p>
            <p className="text-xs text-gray-500">{currentUser?.email}</p>
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
              onClick={async () => {
                await handleLogout();
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
  ) : (
    <div className="w-full flex gap-3 justify-center items-center">
      <div
        onClick={() => navigate("/register")}
        className="px-3 py-1.5 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-md"
      >
        <h1 className="text-white font-medium text-sm">Register</h1>
      </div>
      <div
        onClick={() => navigate("/login")}
        className="px-3 py-1.5 bg-blue-600 cursor-pointer hover:bg-blue-700 rounded-md"
      >
        <h1 className="text-white font-medium text-sm">Login</h1>
      </div>
    </div>
  );
};

export default ProfileDropdown;
