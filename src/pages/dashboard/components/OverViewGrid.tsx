import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const griddata = [
  {
    heading: "Build ATS\n Friendly Resumes",
    supporting: "Build AI Powered Resumes, That Beat ATS",
    route: "",
  },
  {
    heading: "Build ATS\n Friendly Resumes",
    supporting: "Build AI Powered Resumes, That Beat ATS",
    route: "",
  },
  {
    heading: "Build ATS\n Friendly Resumes",
    supporting: "Build AI Powered Resumes, That Beat ATS",
    route: "",
  },
  {
    heading: "Build ATS\n Friendly Resumes",
    supporting: "Build AI Powered Resumes, That Beat ATS",
    route: "",
  },
];

export default function OverViewGrid() {
  return (
    <div className="pt-5">
      <p className="text-base mt-5 md:text-lg lg:text-xl font-semibold font-header">
        Let's Help You...
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 mt-4 gap-5 lg:grid-cols-3 grid-rows-2">
        {griddata.map((g, i) => (
          <GridCards key={i} index={i} {...g} />
        ))}
      </div>
    </div>
  );
}

const GridCards = ({ heading, supporting, route, index }: any) => {
  return (
    <Link
      className={`relative min-h-56 h-full p-5 rounded-3xl flex flex-col justify-end gap-4  w-full ${
        index == 0
          ? "bg-neutral-800 text-white lg:col-span-2"
          : index == 1
          ? "bg-neutral-300"
          : index == 2
          ? "bg-neutral-400"
          : "lg:col-span-2 bg-neutral-600 text-white"
      }`}
      to={route}
    >
      <span className="absolute top-3 right-3 bg-white p-3 text-black rounded-full aspect-square">
        <ArrowUpRight />
      </span>
      <h1 className="text-lg md:text-xl font-semibold font-header">
        {heading.split("\n").map((line: string) => (
          <span>
            {line} <br />
          </span>
        ))}
      </h1>
      <p className="text-xs md:text-sm opacity-80">
        {" "}
        {supporting.split(",").map((line: string) => (
          <span>
            {line} <br />
          </span>
        ))}
      </p>
    </Link>
  );
};
