import { Link, Navigate } from "react-router";
import { useAuth, type UserData } from "../../context/context";
import { signOut } from "firebase/auth";
import { auth } from "../../libraries/firebase/firebase";
import { LogOut, PenIcon, PlusCircle, FileText } from "lucide-react";
import CompleteProfile from "./components/CompleteProfile";

export default function MorePage() {
  const { user } = useAuth();

  const LogOutUser = async () => await signOut(auth);

  if (!user) return <Navigate to="/signin" />;

  const { avatar, email, name, contactInfo, education, skills, workExperience } = user;

  return (
    <main className="flex flex-col lg:flex-row w-full gap-6 pt-4 ">
      {/* Left Column */}
      <div className="flex-1 space-y-8 lg:max-w-3/4">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
            <img
              src={avatar}
              alt={`${name} avatar`}
              className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gray-100 object-cover"
            />
            <div className="text-sm md:text-base text-neutral-500 space-y-1">
              <h2 className="text-xl font-semibold text-black font-header">{name}</h2>
              <p>{email}</p>
              <span className="text-xs px-2 py-1 bg-neutral-200 rounded-full">Synced with Google</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex w-full md:w-1/3 gap-3 mt-3 md:mt-0">
            <Link
              to="/edit-user-info"
              className="flex-1 flex items-center justify-center gap-2 text-xs md:text-sm text-white bg-neutral-800 rounded-full px-4 py-2 transition-transform hover:scale-95"
            >
              <PenIcon className="w-4 md:w-5" />
              <span>Edit Info</span>
            </Link>
            <button
              onClick={LogOutUser}
              className="flex-1 flex items-center justify-center gap-2 text-xs md:text-sm text-neutral-700 border border-neutral-300 rounded-full px-4 py-2 transition-transform hover:scale-95"
            >
              <LogOut className="w-4 md:w-5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>

        {/* Professional Details */}
        <div className="bg-gray-50 md:bg-white border border-gray-200 rounded-xl p-6 min-h-[200px]">
          <h1 className="text-lg md:text-xl font-semibold font-header">
            Personal & Professional Details
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Your details for resume generation, including education, skills, and work experience.
            Create and manage reusable profiles to simplify CV generation for multiple roles.
          </p>

          {education || workExperience || contactInfo || skills ? (
            <section className="mt-4 space-y-4">
              <ProfessionalDetailsSection {...user} />

              {/* Generate Resume CTA */}
              <Link
                to="/generate-resume"
                className="inline-flex items-center justify-center gap-2 bg-neutral-600 text-white rounded-full px-5 py-3 text-sm md:text-base mt-4 transition-transform hover:scale-95"
              >
                <FileText className="w-4 md:w-5" /> Generate Resume
              </Link>
            </section>
          ) : (
            <div className="mt-4 flex flex-col gap-3 md:w-max">
              <Link
                to="/edit-user-info"
                className="flex items-center justify-center gap-2 bg-neutral-700 text-white rounded-full px-4 py-2 text-sm md:text-base"
              >
                <PlusCircle className="w-5 md:w-6" /> Add Professional Details
              </Link>
              <span className="text-gray-500 text-xs md:text-sm">
                Add your professional details to enable resume generation.
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Right Column - Complete Profile */}
      <CompleteProfile />
    </main>
  );
}

const ProfessionalDetailsSection = ({
  contactInfo,
  skills,
  education,
  workExperience,
}: UserData) => {
  return (
    <div className="space-y-8 text-xs md:text-sm">
      {/* Skills */}
      {skills  && (
        <div>
          <h3 className="text-base md:text-lg font-semibold font-header">Skills</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 border border-gray-200 rounded-full bg-white md:bg-gray-50 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Contact Info */}
      {contactInfo && (
        <section>
          <h3 className="text-base md:text-lg font-semibold font-header">Contact Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
            {(Object.keys(contactInfo) as Array<keyof typeof contactInfo>).map((key, idx) => (
              <div key={idx}>
                <p className="text-gray-500">{key}</p>
                <p>{contactInfo[key]}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {workExperience  && (
        <section>
          <h3 className="text-base md:text-lg font-semibold font-header">Work Experience</h3>
          <div className="mt-2 space-y-2">
            {workExperience.map((exp, idx) => (
              <div key={idx} className="py-2 border-b border-gray-200">
                <h4 className="text-sm md:text-base font-medium">{exp.title}</h4>
                <span className="text-gray-500">
                  {exp.company} | {exp.start}-{exp.end}
                </span>
                <p className="mt-1 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education  && (
        <section>
          <h3 className="text-base md:text-lg font-semibold font-header">Education</h3>
          <div className="mt-2 space-y-2">
            {education.map((edu, idx) => (
              <div key={idx} className="py-2 border-b border-gray-200">
                <h4 className="text-sm md:text-base font-medium">{edu.degree}</h4>
                <span className="text-gray-500">
                  {edu.institution} | {edu.startYear}-{edu.endYear}
                </span>
                <p className="mt-1 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
