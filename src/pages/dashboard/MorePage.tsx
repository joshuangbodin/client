import { Link, Navigate } from "react-router";
import { useAuth } from "../../context/context";

import { signOut } from "firebase/auth";
import { auth } from "../../libraries/firebase/firebase";
import { LogOut, PenIcon, PlusCircle } from "lucide-react";
import CompleteProfile from "./components/CompleteProfile";

export default function MorePage() {
  const { user } = useAuth();

  //   logout State
  const LogOutUser = async () => {
    await signOut(auth);
  };

  if (!user) return;
  <Navigate to={"/signin"} />;

  //   getting user info
  const {
    avatar,
    email,
    name,
    contactInfo,
    education,
    skills,
    workExperience,
  } = user;
  return (
    <main className="flex w-full gap-3 pt-4 ">
      <div className="w-full space-y-10 lg:w-3/4">
        {/* Profile Account info */}
        <div className="flex flex-col md:flex-row gap-2 justify-between items-start md:items-center">
          <div className="flex gap-4 items-center">
            <img
              className="rounded-2xl w-22 aspect-square bg-gray-100"
              src={avatar}
            />
            <div className="text-sm space-y-1 lg:text-base text-neutral-500">
              <h2 className="font-header text-black  font-semibold text-xl">
                {name}
              </h2>
              <p>{email}</p>
              <span className="text-xs py-1 px-2 bg-neutral-200 text-neutral-500 rounded-full">
                Synced with Google
              </span>
            </div>
          </div>

          {/* Edit Button */}

          <div className="flex md:w-1/3 items-center mt-3 justify-between w-full gap-3">
            <Link
              className=" flex-1 justify-center bg-neutral-800  hover:scale-90 duration-300 transition-all  inline-flex rounded-full space-x-2 p-1 px-2 py-2 md:py-1  md:p-2 text-neutral-200 text-xs md:text-sm items-center"
              to={"/edit-user-info"}
            >
              <PenIcon className="w-3 md:w-5" />
              <span>Edit Info</span>
            </Link>
            <button
              className="flex-1 justify-center border cursor-pointer hover:scale-90 duration-300 transition-all inline-flex rounded-full space-x-2 p-1 px-2 py-2 md:py-1  md:p-2  text-xs md:text-sm items-center"
              onClick={LogOutUser}
            >
              <LogOut className="w-4 md:w-5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>

        {/* Professional Details are displayed here */}
        <div className="md:bg-white bg-gray-50 min-h-40 border border-gray-200 h-max rounded-xl p-5">
          <h1 className="font-header font-semibold">
            Personal Professional Details
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Your details for resume generation, as well as education and work
            experience shows here. You can create and manage reusable work
            profiles, which makes it easier to generate CVs and interviews for
            multiple Job roles.
          </p>

          {education || workExperience || contactInfo || skills ? (
            <section></section>
          ) : (
            <div className="md:w-max">
              <Link
                className="py-2 px-3 bg-neutral-700 items-center gap-2 text-white rounded-full text-xs  flex justify-center  mt-4"
                to={"/edit-user-info"}
              >
                <PlusCircle className="w-5 md:w-7" /> Add Professional Details
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Complete Profile display */}
      <CompleteProfile />
    </main>
  );
}
