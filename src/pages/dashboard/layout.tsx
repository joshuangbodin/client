import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Home, User, Settings } from "lucide-react";

import TopbarMobile from "./components/TopbarMobile";
import SidebarDesktop from "./components/SidebarDesktop";
import SidebarMobile from "./components/SidebarMobile";

export default function Layout() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { icon: <Home size={22} />, label: "Home" },
    { icon: <User size={22} />, label: "Users" },
    { icon: <Settings size={22} />, label: "Settings" },
  ];

  return (
    <main className="h-screen bg-gray-100 relative items-start flex">
      {/* Mobile topbar */}
      <TopbarMobile setOpen={setOpen} />

      {/* Desktop sidebar */}
      <SidebarDesktop menuItems={menuItems} />

      {/* Mobile animated sidebar */}
      <SidebarMobile open={open} setOpen={setOpen} menuItems={menuItems} />

      {/* Main content */}
      <section className="flex-1 overflow-auto mt-12 md:mt-0">
        <Outlet />
      </section>
    </main>
  );
}
