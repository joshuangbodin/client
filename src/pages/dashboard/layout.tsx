import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Home,  Settings, File } from "lucide-react";

import TopbarMobile from "./components/TopbarMobile";
import SidebarDesktop from "./components/SidebarDesktop";
import SidebarMobile from "./components/SidebarMobile";

export default function Layout() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { icon: <Home size={22} />, label: "Home", path: "/dashboard" },
    { icon: <File size={22} />, label: "Resumes", path: "/dashboard/resume" },
    {
      icon: <Settings size={22} />,
      label: "Settings",
      path: "/dashboard/settings",
    },
  ];

  return (
    <main className="h-screen bg-gray-100 relative items-start flex flex-col md:flex-row">
      {/* Mobile topbar */}
      <TopbarMobile setOpen={setOpen} />

      {/* Desktop sidebar */}
      <SidebarDesktop menuItems={menuItems} />

      {/* Mobile animated sidebar */}
      <SidebarMobile open={open} setOpen={setOpen} menuItems={menuItems} />

      {/* Main content */}
      <section className="flex-1 overflow-auto mt-2 md:mt-0">
        <Outlet />
      </section>
    </main>
  );
}
