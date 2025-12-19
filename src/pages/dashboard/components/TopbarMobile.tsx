import { type FC } from "react";
import { Menu } from "lucide-react";
import { useAuth } from "../../../context/context";

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
  return (
    <div className="md:hidden  bg-white  flex items-center p-4  justify-between w-full ">
      <div className="flex items-start gap-2">
        <button className="" onClick={() => setOpen(true)}>
          <Menu size={25} />
        </button>
        <h1 className="ml-4 font-semibold text-black leading-none  font-header text-lg">
          Hi {user?.name.split(" ")[0] || "User"}! <br />
          <span className="text-xs font-medium font-body text-gray-500">
            {getGreeting()}
          </span>
        </h1>
      </div>

      <span className="bg-black px-3 flex justify-center items-center font-bold rounded-full text-white font-header aspect-square">
        {user?.name[0].toUpperCase() || "U"}
      </span>
    </div>
  );
};

export default TopbarMobile;
