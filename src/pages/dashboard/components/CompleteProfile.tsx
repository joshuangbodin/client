import { useMemo } from "react";
import { useAuth } from "../../../context/context";
import "react-circular-progressbar/dist/styles.css";
import ProgressCircle from "./ProgressCircle";
import { ChevronRight, CircleCheckBig } from "lucide-react";
import { Link } from "react-router-dom";

export default function CompleteProfile() {
  const { user } = useAuth();
  const Percentage = useMemo(() => {
    if (!user) return 0;
    let completedFields = 0;
    const totalFields = 5; // Total number of profile fields considered
    if (user.contactInfo) completedFields++;
    if (user.education) completedFields++;
    if (user.skills) completedFields++;
    if (user.workExperience) completedFields++;
    if (user.name) completedFields++;
    return Math.round((completedFields / totalFields) * 100);
  }, [user]);

  return (
    <div className="hidden lg:block  text-center bg-white p-5 h-[80vh] border rounded-4xl border-gray-200 lg:w-1/4">
      <h1 className="font-header text-lg font-semibold mb-4">
        Your Profile is
      </h1>

      <ProgressCircle percentage={Percentage} />

      <p className="text-xs mt-4 mb-2 text-neutral-500">
        Completing Profile Improves generated Resume Quality
      </p>
      {/* Sections Info */}
      <div>
        {Object.entries({
          Name: !!user?.name,
          "Contact Info": !!user?.contactInfo,
          Education: !!user?.education,
          Skills: !!user?.skills,
          "Work Experience": !!user?.workExperience,
        }).map(([section, completed]) => (
          <Link to={"/edit-user-info"} key={section}>
            <div className="mt-4">
              <SectionsCompleteDisplay name={section} completed={completed} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const SectionsCompleteDisplay = ({
  name,
  completed,
}: {
  name: string;
  completed: boolean;
}) => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-sm">{name}</p>
      {completed ? (
        <CircleCheckBig className="text-green-500 w-5" />
      ) : (
        <span className="flex items-center text-xs text-neutral-500">
          Not Set
          <ChevronRight className=" w-4" />
        </span>
      )}
    </div>
  );
};
