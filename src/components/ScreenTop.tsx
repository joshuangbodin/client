import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

interface ScreenTopProps {
  name?: string;
}

export default function ScreenTop({ name }: ScreenTopProps) {
  const navigator = useNavigate();
  return (
    <div className="text-xs md:text-sm">
      <button
        onClick={() => navigator(-1)}
        className="inline-flex  py-2 pr-4 items-center gap-2  text-neutral-500 hover:underline"
      >
        <ArrowLeft className="w-4 md:w-7" />
        Go Back
      </button>

      <h2 className="text-lg font-semibold font-header md:text-2xl lg:text-3xl">{name}</h2>
    </div>
  );
}
