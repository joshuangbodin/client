import { createContext, useContext, useState } from "react";

import type { ContactInfo, Education, WorkExperience } from "../types/resume";

export interface ResumeData {
  uid?: string;
  name: string;
  email: string;
  avatar: string;
  [key: string]: any;
  education?: Education[];
  workExperience?: WorkExperience[];
  skills?: string[];
  contactInfo?: ContactInfo;
}

interface ResumeContextType {
  resume: ResumeData | null;
  setResume: React.Dispatch<React.SetStateAction<ResumeData | null>>;
}

const ResumeContext = createContext<ResumeContextType>({
  resume: null,
  setResume: () => {},
});

export const ResumeProvider = ({ children }: { children: React.ReactNode }) => {
  const [resume, setResume] = useState<ResumeData | null>(null);

  return (
    <ResumeContext.Provider value={{ resume, setResume }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResumeState = () => useContext(ResumeContext);
