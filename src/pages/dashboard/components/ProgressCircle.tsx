import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ProgressProps {
  percentage: number;
}

const ProgressCircle = ({ percentage }: ProgressProps) => {
  return (
    <div className="flex justify-center">
      <div className="w-[120px] h-[120px]">
        <CircularProgressbarWithChildren
          value={percentage}
          styles={progressStyles}
          strokeWidth={10}
        >
          {/* Centered 2-line text */}
          <div className="flex flex-col items-center justify-center">
            <span className="text-xl font-bold text-black leading-none">
              {percentage}%
            </span>
            <span className="text-xs text-gray-600">Complete</span>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default ProgressCircle;

const progressStyles = {
  root: {
    width: "100%",
    height: "100%",
  },
  path: {
    stroke: "#000",

    transition: "stroke-dashoffset 0.5s ease 0s",
    
  },
  trail: {
    stroke: "#e5e7eb",
  },
};
