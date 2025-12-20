import { type FC } from "react";
import { Menu } from "lucide-react";
import { useAuth } from "../../../context/context";
import { Link, Navigate } from "react-router";

interface TopbarMobileProps {
  setOpen: (open: boolean) => void;
}

const TopbarMobile: FC<TopbarMobileProps> = ({ setOpen }) => {
  const { user } = useAuth();
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) return "Good Morning";
    if (currentHour < 18) return "Good Afternoon";
    return "Good Evening";
  };
  if (!user) return <Navigate to={"/"} />;

  const { avatar, name } = user;

  return (
    <div className="md:hidden  bg-white  flex items-center p-4  justify-between w-full ">
      <div className="flex items-start gap-2">
        <button className="" onClick={() => setOpen(true)}>
          <Menu size={25} />
        </button>
        <h1 className="ml-4 font-semibold text-black leading-none  font-header text-lg">
          Hi {name.split(" ")[0] || "User"}! <br />
          <span className="text-xs font-medium font-body text-gray-500">
            {getGreeting()}
          </span>
        </h1>
      </div>

      <Link to="/dashboard/more" className="flex items-center gap-3">
        {avatar ? (
          <img
            src={avatar}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <span className="bg-black px-3 flex justify-center h-10 items-center font-bold rounded-full text-white font-header aspect-square">
            {name[0] || "U"}
          </span>
        )}
      </Link>
    </div>
  );
};

export default TopbarMobile;
