import type { FC } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import type { MenuItem } from "./SidebarDesktop";
import { Link } from "react-router";

interface SidebarMobileProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  menuItems: MenuItem[];
}

const variants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
};

const SidebarMobile: FC<SidebarMobileProps> = ({
  open,
  setOpen,
  menuItems,
}) => {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <motion.div
        className="fixed top-0 text-gray-800 left-0 h-full w-60 bg-white shadow-xl z-50 md:hidden"
        animate={open ? "visible" : "hidden"}
        variants={variants}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4"
        >
          <X size={28} />
        </button>

        <div className="mt-16 px-4">
          <div className="flex items-center gap-2 py-5">
            <img className="w-7" src="/brand/logo.svg" alt="" />
            <h2 className="text-black text-xl font-bold font-header">
              ApplySteeze
            </h2>
          </div>
          {menuItems.map((item, idx) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                to={item.path}
                key={idx}
                className={`flex items-center gap-3 w-full text-left py-3 px-2 hover:bg-gray-100 ${isActive ? "bg-gray-300 text-gray-700" : ""} rounded-lg`}
              >

                {item.icon}
                <span className="text-sm">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default SidebarMobile;
