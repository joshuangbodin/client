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
import {
  BicepsFlexed,
  Building2Icon,
  GraduationCap,
  Phone,
  User,
} from "lucide-react";
import { editUserInfo } from "../libraries/firebase/users";

export default function EditUserInfo() {
  const { user , setUser } = useAuth();
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

  const HandleSubmit = async () => {
    console.log(userData);
    const { data, success } = await editUserInfo(userData, user.uid);

    if (success) {
      console.log(data);
      setUser(userData)
    } else {
      console.log(data);
    }
  };

  const getDisplayIcon = (actStep: Step) => {
    switch (actStep) {
      case "Basic Info":
        return <User className="w-4 md:w-5" />;
      case "Contact Info":
        return <Phone className="w-4 md:w-5" />;
      case "Education":
        return <GraduationCap className="w-4 md:w-5" />;
      case "Skills":
        return <BicepsFlexed className="w-4 md:w-5" />;
      case "Work Experience":
        return <Building2Icon className="w-4 md:w-5" />;
      default:
        break;
    }
  };

  return (
    <div className="bg-white min-h-screen pt-4 h-screen overflow-hidden px-4 md:px-15 lg:px-20">
      <ScreenTop />

      <main className="flex md:justify-between gap-6">
        {/* Form */}
        <div className="w-full lg:w-1/2 lg:px-10 h-[80vh]  overflow-y-scroll pt-3 md:pt-6">
          <h1 className=" text-xl md:text-3xl font-header font-semibold">
            Edit Professional Information
          </h1>
          <p className="mb-6 text-gray-500 text-xs md:text-sm">
            Your Professional Informtion Helps us serve you better.
          </p>
          {/* Step headers */}
          <div className="flex ml-1  gap-2 mb-6">
            {STEPS.map((step) => {
              const isActive = step === activeStep;

              return (
                <button
                  key={step}
                  onClick={() => setActiveStep(step)}
                  className={`
          flex items-center gap-2 overflow-hidden
          px-3 py-1 rounded-full text-xs md:text-sm font-semibold
          transition-all duration-500 ease-in-out
          ${
            isActive
              ? "bg-neutral-600 text-white scale-[1.03]"
              : "bg-gray-100 border border-gray-300 text-gray-400 hover:text-gray-600"
          }
        `}
                >
                  {/* Icon */}
                  <span
                    className={`
            flex items-center justify-center
            transition-transform duration-500
            ${isActive ? "scale-110" : "scale-100"}
          `}
                  >
                    {getDisplayIcon(step)}
                  </span>

                  {/* Animated label */}
                  <span
                    className={`
            whitespace-nowrap
            transition-all duration-500 ease-out
            ${
              isActive
                ? "opacity-100 translate-x-0 max-w-[140px]"
                : "opacity-0 -translate-x-2 max-w-0"
            }
          `}
                  >
                    {step}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Step content */}
          <div className="md:min-h-[150px] w-[400px]">
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
          <div className="flex text-xs md:text-sm gap-4 mt-4">
            <button
              disabled={stepIndex === 0}
              onClick={goBack}
              className="px-12 py-2 border  rounded-full disabled:opacity-40"
            >
              Back
            </button>

            <button
              onClick={stepIndex === STEPS.length - 1 ? HandleSubmit : goNext}
              className="px-12 py-2 bg-black text-white rounded-full"
            >
              {stepIndex === STEPS.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>

        {/* Live Preview */}
        <PreviewPanel activeStep={activeStep} userData={userData} />

        {/* design */}
      </main>
      <img
        className="hidden md:block w-10 h-full fixed  right-0 top-0 object-cover"
        src="/brand/pattern.png"
        alt=""
      />
    </div>
  );
}
