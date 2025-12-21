// components/edit/steps/BasicInfoStep.tsx
import type { UserData } from "../../../context/context";

interface Props {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

export default function BasicInfoStep({ userData, setUserData }: Props) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm   font-medium">Full Name</label>
        <input
          value={userData.name || ""}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          className="w-full text-xs md:text-sm h-10 bg-gray-50 border border-gray-200 rounded-full px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm   font-medium">Email</label>
        <input
          value={userData.email || ""}
          disabled
          className="w-full text-xs md:text-sm h-10 bg-gray-50 disabled:text-gray-500 border border-gray-200 rounded-full px-3 py-2 "
        />
      </div>
    </div>
  );
}
