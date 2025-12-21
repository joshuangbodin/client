import type { UserData } from "../../context/context";

interface PreviewPanelProps {
  userData: UserData;
  activeStep: string; // e.g. "Basic Info" | "Contact Info" | etc
}

export default function PreviewPanel({
  userData,
  activeStep,
}: PreviewPanelProps) {
  const { name, avatar, contactInfo, education, workExperience, skills } =
    userData;

  return (
    <div className="w-1/2 hidden lg:block bg-white border rounded-3xl p-6 overflow-y-scroll border-gray-300 h-[80vh] shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        {avatar && (
          <img
            src={avatar}
            alt={name}
            className="w-16 h-16 rounded-full object-cover"
          />
        )}
        <div>
          <h1 className="text-2xl font-bold">{name || "Your Name"}</h1>
          {activeStep === "Contact Info" && (
            <div className="text-sm text-gray-600 mt-1">
              {contactInfo?.email && <div>{contactInfo.email}</div>}
              {contactInfo?.phone && <div>{contactInfo.phone}</div>}
              {contactInfo?.linkedin && (
                <div>LinkedIn: {contactInfo.linkedin}</div>
              )}
              {contactInfo?.website && <div>{contactInfo.website}</div>}
            </div>
          )}
        </div>
      </div>

      {/* Education Section */}
      {(activeStep === "Education" || activeStep === "Basic Info") && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold border-b pb-1 mb-2">
            Education
          </h2>
          {(education ?? []).length === 0 && (
            <p className="text-gray-400">No education added yet</p>
          )}
          {(education ?? []).map((edu, idx) => (
            <div key={idx} className="mb-2">
              <div className="font-semibold">{edu.degree || "Degree"}</div>
              <div className="text-sm text-gray-600">
                {edu.institution || "Institution"} | {edu.startYear || "YYYY"} -{" "}
                {edu.endYear || "YYYY"}
              </div>
              {edu.description && (
                <p className="text-sm mt-1">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Work Experience Section */}
      {activeStep === "Work Experience" && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold border-b pb-1 mb-2">
            Work Experience
          </h2>
          {(workExperience ?? []).length === 0 && (
            <p className="text-gray-400">No work experience added yet</p>
          )}
          {(workExperience ?? []).map((job, idx) => (
            <div key={idx} className="mb-2">
              <div className="font-semibold">{job.title || "Job Title"}</div>
              <div className="text-sm text-gray-600">
                {job.company || "Company"} | {job.start || "Start"} -{" "}
                {job.end || "End"}
              </div>
              {job.description && (
                <p className="text-sm mt-1">{job.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills Section */}
      {activeStep === "Skills" && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold border-b pb-1 mb-2">Skills</h2>
          {(skills ?? []).length === 0 && (
            <p className="text-gray-400">No skills added yet</p>
          )}
          <div className="flex flex-wrap gap-2">
            {(skills ?? []).map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
