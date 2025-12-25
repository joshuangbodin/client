import { Link } from "react-router";
import ScreenTop from "../components/ScreenTop";
import { useAuth, type UserData } from "../context/context";

export default function Preview() {
 
  const { user } = useAuth();

  

  if (!user) return <>User Not Found</>;

  return (
    <div className="bg-white min-h-screen pt-4 px-4 md:px-10 lg:px-20">
      {/* Top Section */}
      <ScreenTop />
      {
        <div className="mt-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-header font-semibold">
            Preview Your Data
          </h1>

          <div className="max-w-xl ">
              <ProfessionalDetailsSection {...user} />
          </div>
        </div>
      }

       <Link to={"/edit-user-info"}>Edit</Link><Link to={'/editor/user'}>Proceed</Link>
    </div>
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
      {skills && (
        <div>
          <h3 className="text-base md:text-lg font-semibold font-header">
            Skills
          </h3>
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
          <h3 className="text-base md:text-lg font-semibold font-header">
            Contact Info
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
            {(Object.keys(contactInfo) as Array<keyof typeof contactInfo>).map(
              (key, idx) => (
                <div key={idx}>
                  <p className="text-gray-500">{key}</p>
                  <p>{contactInfo[key]}</p>
                </div>
              )
            )}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {workExperience && (
        <section>
          <h3 className="text-base md:text-lg font-semibold font-header">
            Work Experience
          </h3>
          <div className="mt-2 space-y-2">
            {workExperience.map((exp, idx) => (
              <div key={idx} className="py-2 border-b border-gray-200">
                <h4 className="text-sm md:text-base font-medium">
                  {exp.title}
                </h4>
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
      {education && (
        <section>
          <h3 className="text-base md:text-lg font-semibold font-header">
            Education
          </h3>
          <div className="mt-2 space-y-2">
            {education.map((edu, idx) => (
              <div key={idx} className="py-2 border-b border-gray-200">
                <h4 className="text-sm md:text-base font-medium">
                  {edu.degree}
                </h4>
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
