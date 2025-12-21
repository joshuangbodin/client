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
        <label className="block text-sm font-medium">Full Name</label>
        <input
          value={userData.name || ""}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          value={userData.email || ""}
          disabled
          className="w-full border rounded px-3 py-2 bg-gray-100"
        />
      </div>
    </div>
  );
}
