import { type FC } from "react";
import { useAuth } from "../../../context/context";

const TopBarDesktop: FC = () => {
  const { user } = useAuth();
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) return "Good Morning";
    if (currentHour < 18) return "Good Afternoon";
    return "Good Evening";
  }

  return (
    <div className="hidden md:flex  md:text-gray-500 rounded-b-3xl items-center p-4 px-0 justify-between w-full ">
      <div className="flex flex-col ">
        <h1 className=" font-semibold text-black  font-header text-xl">
          Hi {user?.name.split(" ")[0]|| "User"}!
        </h1>
        <p className="text-xs">{getGreeting()}</p>
      </div>

      <span className="bg-black px-3 flex justify-center items-center font-bold rounded-full text-white font-header aspect-square">
        {user?.name[0]|| "U"}
      </span>
    </div>
  );
};

export default TopBarDesktop;
