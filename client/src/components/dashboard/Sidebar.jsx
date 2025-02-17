import React, { useState } from "react";
import { Link } from "react-router";
import { MdClose } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { sidebarItems } from "../../utils/data";


const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  isCollapsed,
  setIsCollapsed,
  isMobileMenuOpen

}) => {
  //   logo section component
  const LogoSection = ({ collapsed, isMobile }) => (
    <Link
      to="/seller/"
      className={`
          h-16 flex items-center gap-3 px-4 border-b border-gray-200
          hover:bg-gray-50 transition-colors duration-200
          ${collapsed && !isMobile ? "justify-center" : ""}
        `}
    >
      <FaStore className="text-2xl text-indigo-600 shrink-0" />
      {(!collapsed || isMobile) && (
        <span className="font-bold text-xl text-gray-800">Saarthi</span>
      )}
    </Link>
  );

  //   nav item component
  const NavItem = ({ item, isMobile }) => {
    const isActive = location.pathname === item.path;
    const Icon = item.icon;

    return (
      <Link
        to={item.path}
        className={`
            relative flex items-center gap-3 px-3 py-3 rounded-lg
            transition-all duration-200 group
            ${!isMobile && isCollapsed ? "justify-center" : ""}
            ${
              isActive
                ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md"
                : "hover:bg-indigo-50 text-gray-700"
            }
          `}
        title={!isMobile && isCollapsed ? item.name : ""}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
      >
        <Icon
          className={`
              shrink-0
              ${!isMobile && isCollapsed ? "w-6 h-6" : "w-5 h-5"}
              ${
                isActive
                  ? "text-white"
                  : "text-gray-500 group-hover:text-indigo-600"
              }
              transition-colors duration-200
            `}
        />

        {(!isCollapsed || isMobile) && (
          <span
            className={`
              text-sm font-medium
              ${
                isActive
                  ? "text-white"
                  : "text-gray-700 group-hover:text-indigo-600"
              }
              transition-colors duration-200
            `}
          >
            {item.name}
          </span>
        )}

        {!isMobile && isCollapsed && isActive && (
          <div className="absolute right-2 w-1.5 h-1.5 rounded-full bg-white"></div>
        )}
      </Link>
    );
  };

  return (
    <>
      <aside
        className={`
          hidden lg:flex bg-white border-r border-gray-200 
          transition-all duration-300 ease-in-out flex-col
          ${isCollapsed ? "w-[80px]" : "w-[250px]"}
        `}
      >
        <LogoSection collapsed={isCollapsed} />

        <div className="flex-1 p-3 flex flex-col gap-6 overflow-y-auto">
          {sidebarItems.map((group, idx) => (
            <div key={idx}>
              {!isCollapsed && (
                <h3 className="text-xs font-semibold text-gray-500 mb-3 px-3 uppercase tracking-wider">
                  {group.group}
                </h3>
              )}
              <div className="flex flex-col gap-1">
                {group.items.map((item, itemIdx) => (
                  <NavItem key={itemIdx} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`
          p-4 border-t border-gray-200 mt-auto
          ${isCollapsed ? "text-center" : ""}
        `}
        >
          {!isCollapsed ? (
            <>
              <div className="flex flex-col gap-2 text-sm text-gray-500 mb-4">
                <Link
                  to="/terms"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Terms & Conditions
                </Link>
                <Link
                  to="/privacy"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
              <p className="text-xs text-gray-400">© 2024 Saarthi</p>
            </>
          ) : (
            <div className="text-center">
              <span className="text-xs text-gray-400">©</span>
            </div>
          )}
        </div>
      </aside>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed inset-y-0 left-0 w-[280px] bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-gray-200">
              <LogoSection isMobile={true} />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute right-4 p-2 rounded-lg hover:bg-gray-100"
              >
                <MdClose className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="p-3">
              {sidebarItems.map((group, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="text-xs font-semibold text-gray-500 mb-3 px-3 uppercase tracking-wider">
                    {group.group}
                  </h3>
                  <div className="flex flex-col gap-1">
                    {group.items.map((item, itemIdx) => (
                      <NavItem key={itemIdx} item={item} isMobile={true} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
