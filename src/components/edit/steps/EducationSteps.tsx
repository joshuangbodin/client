// components/edit/steps/EducationStep.tsx
import { PlusCircle } from "lucide-react";
import type { UserData } from "../../../context/context";
import type { Education } from "../../../types/resume";

interface Props {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

export default function EducationStep({ userData, setUserData }: Props) {
  const education: Education[] = userData.education ?? [];

  const updateField = (
    index: number,
    field: keyof Education,
    value: string
  ) => {
    const updated = [...education];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    setUserData((prev) => ({
      ...prev,
      education: updated,
    }));
  };

  const addEducation = () => {
    setUserData((prev) => ({
      ...prev,
      education: [
        ...(prev.education ?? []),
        {
          degree: "",
          institution: "",
          startYear: "",
          endYear: "",
          description: "",
        },
      ],
    }));
  };

  const removeEducation = (index: number) => {
    setUserData((prev) => ({
      ...prev,
      education: (prev.education ?? []).filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <div key={index} className="border border-gray-100 bg-gray-50 rounded-xl p-4 space-y-3">
          <input
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => updateField(index, "degree", e.target.value)}
            className="w-full text-xs h-10 bg-white border border-gray-200 rounded-full px-3 py-2"
          />

          <input
            placeholder="Institution"
            value={edu.institution}
            onChange={(e) =>
              updateField(index, "institution", e.target.value)
            }
            className="w-full text-xs h-10 bg-white border border-gray-200 rounded-full px-3 py-2"
          />

          <div className="flex gap-3">
            <input
              placeholder="Start Year"
              value={edu.startYear}
              onChange={(e) =>
                updateField(index, "startYear", e.target.value)
              }
              className="w-1/2 text-xs h-10 bg-white border border-gray-200 rounded-full px-3 py-2"
            />
            <input
              placeholder="End Year"
              value={edu.endYear}
              onChange={(e) => updateField(index, "endYear", e.target.value)}
              className="w-1/2 text-xs h-10 bg-white border border-gray-200 rounded-full px-3 py-2"
            />
          </div>

          <textarea
            placeholder="Description (optional)"
            value={edu.description ?? ""}
            onChange={(e) =>
              updateField(index, "description", e.target.value)
            }
            className="w-full text-xs h-10 bg-white border border-gray-200 rounded-2xl px-3 py-2 min-h-20"
          />

          <button
            onClick={() => removeEducation(index)}
            className="text-sm text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      <button onClick={addEducation} className="px-12 py-2 flex items-center gap-2 bg-neutral-600 text-white text-xs md:text-sm  rounded-full">
        <PlusCircle className="w-4"/> Add Education
      </button>
    </div>
  );
}
