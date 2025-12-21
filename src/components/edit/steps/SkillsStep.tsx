// components/edit/steps/SkillsStep.tsx
import { useState } from "react";
import type { UserData } from "../../../context/context";

interface Props {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

export default function SkillsStep({ userData, setUserData }: Props) {
  const [input, setInput] = useState("");

  const skills: string[] = userData.skills ?? [];

  const addSkill = () => {
    if (!input.trim()) return;

    setUserData((prev) => ({
      ...prev,
      skills: [...(prev.skills ?? []), input.trim()],
    }));

    setInput("");
  };

  const removeSkill = (index: number) => {
    setUserData((prev) => ({
      ...prev,
      skills: (prev.skills ?? []).filter((_, i) => i !== index),
    }));
  };

  return (
    <div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a skill"
          className="w-full text-xs md:text-sm h-10 bg-gray-50 border border-gray-200 rounded-l-full px-3 py-2"
        />
        <button
          onClick={addSkill}
          className="px-4 py-2 bg-black text-xs md:text-sm text-white rounded-r-full"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2"
          >
            {skill}
            <button
              onClick={() => removeSkill(index)}
              className="text-red-500"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
