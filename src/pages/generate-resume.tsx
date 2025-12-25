import { Link, Navigate } from "react-router";
import ScreenTop from "../components/ScreenTop";
import { useAuth } from "../context/context";
import { ArrowRight, UserPlus } from "lucide-react";

export default function GenerateResume() {
  const { user } = useAuth();

  if (!user) return <Navigate to="/enter-resume-data" />;

  return (
    <div className="bg-white min-h-screen pt-4 px-4 md:px-10 lg:px-20">
      {/* Top Section */}
      <ScreenTop />
      <div className="mt-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-header font-semibold">
          Generate Resume
        </h1>
        <p className="mt-2 text-gray-500 text-sm md:text-base">
          Choose whether this resume is for you or for someone else.
        </p>
      </div>

      {/* Options */}
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl ">
        {/* Use My Data Card */}
        <div className="bg-neutral-800 text-white p-6 rounded-2xl flex flex-col justify-between gap-4 transition-transform hover:scale-95 cursor-pointer">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold font-header">{user.name}</h2>
            <p className="text-sm md:text-base text-neutral-300">
              {user.email} {user.contactInfo?.phone ? `| ${user.contactInfo.phone}` : ""}
            </p>
          </div>
          <Link
            to="/use-my-data"
            className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-black text-white py-3 rounded-full text-sm md:text-base font-medium transition-transform hover:scale-95"
          >
            Use My Data <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Generate for a Friend Card */}
        <div className="bg-white border border-neutral-400 p-6 rounded-2xl flex flex-col justify-between gap-4 transition-transform hover:scale-95 cursor-pointer">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold font-header text-gray-900">
              Generate for a Friend
            </h2>
            <p className="text-sm md:text-base text-gray-500">
              Enter the details manually to generate a resume for someone else.
            </p>
          </div>
          <Link
            to="/enter-resume-data"
            className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-neutral-600 text-white py-3 rounded-full text-sm md:text-base font-medium transition-transform hover:scale-95"
          >
            Enter Data <UserPlus className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
