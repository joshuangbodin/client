import { useState } from "react";
import { Navigate } from "react-router";
import ScreenTop from "../components/ScreenTop";
import PreviewPanel from "../components/edit/PreviewPanel";
import { useAuth, type UserData } from "../context/context";
import { STEPS, type Step } from "../types/steps";

// Step components
import BasicInfoStep from "../components/edit/steps/BasicInfoSteps";
import ContactInfoStep from "../components/edit/steps/ContactInfoSteps";
import EducationStep from "../components/edit/steps/EducationSteps";
import SkillsStep from "../components/edit/steps/SkillsStep";
import WorkExperienceSteps from "../components/edit/steps/WorkExperienceStep";

export default function EditUserInfo() {
  const { user } = useAuth();
  if (!user) return <Navigate to="/signin" />;

  const [userData, setUserData] = useState<UserData>(user);

  const [activeStep, setActiveStep] = useState<Step>("Basic Info");

  const stepIndex = STEPS.indexOf(activeStep);

  const goNext = () => {
    if (stepIndex < STEPS.length - 1) {
      setActiveStep(STEPS[stepIndex + 1]);
    }
  };

  const goBack = () => {
    if (stepIndex > 0) {
      setActiveStep(STEPS[stepIndex - 1]);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-4 h-screen overflow-hidden px-4 md:px-15 lg:px-20">
      <ScreenTop name="Edit User Information" />

      <main className="flex gap-6">
        {/* Form */}
        <div className="w-1/2 h-[80vh] overflow-y-scroll pt-6">
          {/* Step headers */}
          <div className="flex gap-6 border-b mb-6">
            {STEPS.map((step) => (
              <button
                key={step}
                onClick={() => setActiveStep(step)}
                className={`pb-3 font-semibold ${
                  step === activeStep
                    ? "border-b-2 border-black"
                    : "text-gray-400"
                }`}
              >
                {step}
              </button>
            ))}
          </div>

          {/* Step content */}
          <div className="min-h-[300px]">
            {activeStep === "Basic Info" && (
              <BasicInfoStep userData={userData} setUserData={setUserData} />
            )}

            {activeStep === "Contact Info" && (
              <ContactInfoStep userData={userData} setUserData={setUserData} />
            )}

            {activeStep === "Education" && (
              <EducationStep userData={userData} setUserData={setUserData} />
            )}

            {activeStep === "Skills" && (
              <SkillsStep userData={userData} setUserData={setUserData} />
            )}

            {activeStep === "Work Experience" && (
              <WorkExperienceSteps
                userData={userData}
                setUserData={setUserData}
              />
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <button
              disabled={stepIndex === 0}
              onClick={goBack}
              className="px-4 py-2 border rounded disabled:opacity-40"
            >
              Back
            </button>

            <button
              onClick={goNext}
              className="px-4 py-2 bg-black text-white rounded"
            >
              {stepIndex === STEPS.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>

        {/* Live Preview */}
        <PreviewPanel activeStep={activeStep} userData={userData} />
      </main>
    </div>
  );
}
