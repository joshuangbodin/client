import type { FC, ReactNode } from "react";
import { Link, useLocation } from "react-router";

export interface MenuItem {
  icon: ReactNode;
  label: string;
  path: string;
}

interface SidebarDesktopProps {
  menuItems: MenuItem[];
}

const SidebarDesktop: FC<SidebarDesktopProps> = ({ menuItems }) => {
  const location = useLocation();
  return (
    <aside className="hidden md:flex flex-col items-center text-gray-800 md:w-16 px-1 lg:w-52 lg:px-5 bg-white shadow h-full py-6">
      <div className="flex items-center gap-2 py-5">
        <img className="w-7" src="/brand/logo.svg" alt="" />
        <h2 className="text-black text-xl hidden lg:block font-bold font-header">
          ApplySteeze
        </h2>
      </div>
      {menuItems.map((item, idx) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            to={item.path}
            key={idx}
            className={`flex items-center gap-3 w-full justify-center  text-left py-3 lg:px-2 hover:bg-gray-100 ${
              isActive ? "bg-neutral-200 text-gray-700 " : ""
            } rounded-2xl`}
          >
            {item.icon}
            <span className="text-sm w-2/3  text-start hidden lg:block">
              {item.label}
            </span>
          </Link>
        );
      })}
    </aside>
  );
};

export default SidebarDesktop;
