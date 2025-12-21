import { PlusCircleIcon } from "lucide-react";
import type { UserData } from "../../../context/context";
import type { WorkExperience } from "../../../types/resume";
import { format } from "date-fns";

interface Props {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

export default function WorkExperienceStep({ userData, setUserData }: Props) {
  const experience: WorkExperience[] = userData.workExperience ?? [];

  const updateField = (
    index: number,
    field: keyof WorkExperience,
    value: string
  ) => {
    const updated = [...experience];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    setUserData((prev) => ({
      ...prev,
      workExperience: updated,
    }));
  };

  const addExperience = () => {
    setUserData((prev) => ({
      ...prev,
      workExperience: [
        ...(prev.workExperience ?? []),
        { title: "", company: "", start: "", end: "", description: "" },
      ],
    }));
  };

  const removeExperience = (index: number) => {
    setUserData((prev) => ({
      ...prev,
      workExperience: (prev.workExperience ?? []).filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-6">
      {experience.map((job, index) => (
        <div
          key={index}
          className="border border-gray-100 bg-gray-50 rounded-2xl p-4 space-y-3"
        >
          <input
            placeholder="Job Title"
            value={job.title}
            onChange={(e) => updateField(index, "title", e.target.value)}
            className="w-full text-xs h-10 bg-white border border-gray-200 rounded-full px-3 py-2"
          />

          <input
            placeholder="Company"
            value={job.company}
            onChange={(e) => updateField(index, "company", e.target.value)}
            className="w-full text-xs h-10 bg-white border border-gray-200 rounded-full px-3 py-2"
          />

          <div className="flex gap-3">
            <input
              type="month"
              placeholder="Start"
              value={job.start ? format(new Date(job.start), "yyyy-MM") : ""}
              onChange={(e) => {
                const dateStr = e.target.value; // format "YYYY-MM"
                const formatted = dateStr
                  ? format(new Date(dateStr + "-01"), "MMMM yyyy")
                  : "";
                updateField(index, "start", formatted);
              }}
              className="w-1/2 border border-gray-200 px-3 py-2 bg-white rounded-full"
            />

            <input
              type="month"
              placeholder="End"
              value={job.end ? format(new Date(job.end), "yyyy-MM") : ""}
              onChange={(e) => {
                const dateStr = e.target.value;
                const formatted = dateStr
                  ? format(new Date(dateStr + "-01"), "MMMM yyyy")
                  : "";
                updateField(index, "end", formatted);
              }}
              className="w-1/2 border border-gray-200 px-3 py-2 bg-white rounded-full"
            />
          </div>

          <textarea
            placeholder="Description"
            value={job.description}
            onChange={(e) => updateField(index, "description", e.target.value)}
            className="w-full text-xs h-10 bg-white border border-gray-200 rounded-2xl px-3 py-2 min-h-[90px]"
          />

          <button
            onClick={() => removeExperience(index)}
            className="text-sm text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      <button
        onClick={addExperience}
        className="px-4 py-2 flex items-center gap-2 bg-neutral-700 text-xs md:text-sm text-white rounded-full"
      >
        <PlusCircleIcon className="w-4" /> Add Work Experience
      </button>
    </div>
  );
}
