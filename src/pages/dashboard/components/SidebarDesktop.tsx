import type { FC, ReactNode } from "react";

export interface MenuItem {
  icon: ReactNode;
  label: string;
}

interface SidebarDesktopProps {
  menuItems: MenuItem[];
}

const SidebarDesktop: FC<SidebarDesktopProps> = ({ menuItems }) => {
  return (
    <aside className="hidden md:flex flex-col items-center text-gray-500 md:w-16 lg:w-48 bg-white shadow h-full py-6">
      <div className="flex items-center gap-2 py-5">
        <img className="w-7" src="/brand/logo.svg" alt="" />
        <h2 className="text-black text-xl font-bold font-header">
          ApplySteeze
        </h2>
      </div>
      {menuItems.map((item, idx) => (
        <button
          key={idx}
          className="flex items-center justify-center gap-3 w-full  px-4 py-3 hover:bg-gray-100 rounded-lg transition"
        >
          {item.icon}
          <span className="text-sm w-2/3  text-start hidden lg:block">
            {item.label}
          </span>
        </button>
      ))}
    </aside>
  );
};

export default SidebarDesktop;
