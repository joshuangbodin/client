export interface Education {
  degree: string
  institution: string
  startYear: string
  endYear: string
  description?: string  // optional field for details about the program
}

export interface WorkExperience {
  title: string
  company: string
  start: string
  end: string
  description: string
}

export interface ContactInfo {
  email?: string
  phone?: string
  linkedin?: string
  website?: string
}

export interface ResumeData {
  name: string
  jobTitle: string
  jobDescription: string
  education: Education[]
  workExperience: WorkExperience[]
  skills: string[]
  contactInfo: ContactInfo
}
