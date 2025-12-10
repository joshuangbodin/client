import { type FC } from "react";
import { Menu } from "lucide-react";
import { useAuth } from "../../../context/context";

interface TopbarMobileProps {
  setOpen: (open: boolean) => void;
}

const TopbarMobile: FC<TopbarMobileProps> = ({ setOpen }) => {
  const { user } = useAuth();
  return (
    <div className="md:hidden text-gray-500 rounded-b-3xl flex items-center p-4 border-r justify-between w-full bg-white">
      <div className="flex gap-2">
          <button onClick={() => setOpen(true)}>
            <Menu size={20} />
          </button>
          <h1 className="ml-4 font-semibold font-header text-base">Dashboard</h1>
      </div>

      <span className="bg-black px-3 flex justify-center items-center font-bold rounded-full text-white font-header aspect-square">
        {user?.name[0]}
      </span>
    </div>
  );
};

export default TopbarMobile;
