import { Link, Navigate } from "react-router";
import { useAuth } from "../../context/context";

import { signOut } from "firebase/auth";
import { auth } from "../../libraries/firebase/firebase";
import { LogOut, PenIcon } from "lucide-react";

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
            <img className="rounded-2xl" src={avatar} />
            <div className="text-sm space-y-1 lg:text-base text-neutral-500">
              <h2 className="font-header text-black  font-semibold text-xl">
                {name}
              </h2>
              <p>{email}</p>
              <span className="text-xs py-1 px-2 bg-green-100 text-green-500 rounded-md">
                Synced with Google
              </span>
            </div>
          </div>

          {/* Edit Button */}

          <div className="flex items-center justify-end w-full gap-3">
            <Link
              className=" bg-gray-50 md:bg-neutral-200 hover:scale-90 duration-300 transition-all  inline-flex rounded-xl space-x-2 p-1 px-2  md:p-2 text-neutral-500 text-xs md:text-sm items-center"
              to={"edit"}
            >
              <PenIcon className="w-3 md:w-5" />
              <span>Edit Info</span>
            </Link>
            <button
              className=" bg-red-100 cursor-pointer hover:scale-90 duration-300 transition-all inline-flex rounded-xl space-x-2 p-1 px-2  md:p-2 text-red-500 text-xs md:text-sm items-center"
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
            <Link className=" bg-red-100" to={"edit"}>
              No Work
            </Link>
          )}
        </div>
      </div>

      {/* Complete Profile display */}
      <div className="hidden lg:block bg-white h-[80vh] border rounded-4xl border-gray-200 lg:w-1/4"></div>
    </main>
  );
}
