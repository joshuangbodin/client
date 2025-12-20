import { type FC } from "react";
import { useAuth } from "../../../context/context";
import { Link, Navigate } from "react-router";

const TopBarDesktop: FC = () => {
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
    <div className="hidden md:flex  md:text-gray-500 rounded-b-3xl items-center p-4 px-0 justify-between w-full ">
      <div className="flex flex-col ">
        <h1 className=" font-semibold text-black  font-header text-xl">
          Hi {name.split(" ")[0] || "User"}!
        </h1>
        <p className="text-xs">{getGreeting()}</p>
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

export default TopBarDesktop;
