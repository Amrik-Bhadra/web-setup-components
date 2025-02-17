import React, {useState} from "react";
import { MdNotifications } from "react-icons/md";

const NotificationDropdown = () => {
  const [notifications] = useState([
    { id: 1, text: "New order received", time: "5m ago" },
    { id: 2, text: "Product stock low", time: "1h ago" },
  ]);
  return (
    <div className="relative">
      <button
        className="p-2 rounded-lg hover:bg-gray-100 relative"
        onClick={() => setIsProfileDropdownOpen(false)}
      >
        <MdNotifications className="w-6 h-6 text-gray-500" />
        {notifications.length > 0 && (
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        )}
      </button>
    </div>
  );
};

export default NotificationDropdown;
