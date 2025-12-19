import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Home, Settings, File } from "lucide-react";

import TopbarMobile from "./components/TopbarMobile";
import SidebarDesktop from "./components/SidebarDesktop";
import SidebarMobile from "./components/SidebarMobile";
import TopBarDesktop from "./components/TopBarDesktop";
const ICON_SIZE=18

export default function Layout() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { icon: <Home size={ICON_SIZE} />, label: "Home", path: "/dashboard" },
    { icon: <File size={ICON_SIZE} />, label: "Resumes", path: "/dashboard/resume" },
    {
      icon: <Settings size={ICON_SIZE} />,
      label: "Settings",
      path: "/dashboard/settings",
    },
  ];

  return (
    <main className="h-screen w-screen md:bg-gray-100 relative items-start flex flex-col md:flex-row">
      {/* Mobile topbar */}
      <TopbarMobile setOpen={setOpen} />

      {/* Desktop sidebar */}
      <SidebarDesktop menuItems={menuItems} />

      {/* Mobile animated sidebar */}
      <SidebarMobile open={open} setOpen={setOpen} menuItems={menuItems} />

      {/* Main content */}
      <section className="flex-1 w-screen  overflow-auto mt-0 px-5 md:px-7 bg-white md:bg-transparent  lg:px-14 ">
        <TopBarDesktop />
        <Outlet />
      </section>
      <img
        className="hidden md:block w-10 h-full object-cover"
        src="/brand/pattern.png"
        alt=""
      />
    </main>
  );
}
