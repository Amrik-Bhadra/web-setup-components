import {
  MdDashboard,
  MdAnalytics,
  MdInventory,
  MdShoppingCart,
  MdSettings,
  MdHelp,
} from "react-icons/md";

const sidebarItems = [
  {
    group: "Main",
    items: [
      { name: "Dashboard", icon: MdDashboard, path: "/seller/" },
      { name: "Analytics", icon: MdAnalytics, path: "/seller/analytics" },
      { name: "Products", icon: MdInventory, path: "/seller/products" },
      { name: "Orders", icon: MdShoppingCart, path: "/seller/orders" },
    ],
  },
  {
    group: "Other",
    items: [
      { name: "Settings", icon: MdSettings, path: "/seller/settings" },
      { name: "Help", icon: MdHelp, path: "/seller/help" },
    ],
  },
];

export { sidebarItems };
