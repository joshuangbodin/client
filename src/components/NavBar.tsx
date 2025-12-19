import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, MenuIcon, X } from "lucide-react";
import { useAuth } from "../context/context"; // import your context

interface props {
  showFullNav?: boolean;
}

const NavLinks = [
  { name: "Home", route: "/" },
  { name: "About", id: "about" },
  { name: "Pricing", route: "/pricing" },
  { name: "Faqs", id: "faqs" },
];

const NavBar = ({ showFullNav = true }: props) => {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { user } = useAuth(); // get user session

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  const handleNavClick = (id?: string, route?: string) => {
    if (id) {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollToId: id } });
      } else {
        scrollToSection(id);
      }
      setOpen(false);
    } else if (route) {
      navigate(route);
      setOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full z-50 transition-all sticky top-0 duration-500"
    >
      <nav className="flex justify-between items-center px-6 md:px-14 lg:px-20 py-5 font-bricolage">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img className="h-8" src="/brand/logo.svg" />
          <h2 className="font-semibold hidden md:block font-header tracking-tight text-lg md:text-xl lg:text-2xl">
            ApplySteeze
          </h2>
        </Link>

        {/* Desktop Navigation */}
        {showFullNav && (
          <div className="hidden lg:flex items-center gap-10 text-sm bg-white px-10 py-3 rounded-full shadow-sm font-medium">
            {NavLinks.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="relative"
              >
                <button
                  onClick={() => handleNavClick(item.id, item.route)}
                  className="transition-colors duration-300 text-gray-800 cursor-pointer hover:text-primary"
                >
                  {item.name}
                </button>
              </motion.div>
            ))}
          </div>
        )}

        {/* Desktop SignIn / Dashboard */}
        {showFullNav && (
          <Link
            to={user ? "/dashboard" : "/signin"}
            className="hidden lg:flex bg-black text-white px-8 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-transform items-center gap-2"
          >
            {user ? (
              <>
                Dashboard <ArrowRight size={20} />
              </>
            ) : (
              "Sign In"
            )}
          </Link>
        )}

        {/* Mobile Menu */}
        {showFullNav && (
          <div className="flex gap-4 items-center lg:hidden z-60 text-gray-800">
            <Link
              to={user ? "/dashboard" : "/signin"}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
            >
              {user ? (
                <>
                  Dashboard <ArrowRight size={20} />
                </>
              ) : (
                "Sign In"
              )}
            </Link>
            <button
              className="bg-white p-2 aspect-square rounded-full shadow-sm"
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <X size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        )}

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 h-screen w-screen flex flex-col items-center justify-center gap-6 text-lg md:text-xl font-medium text-gray-800 z-50 bg-white/95 backdrop-blur-md overflow-hidden"
            >
              {NavLinks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <button
                    onClick={() => handleNavClick(item.id, item.route)}
                    className="hover:text-primary transition font-medium"
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default NavBar;
