import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import { AuthProvider } from "./context/context"; // your context
import Layout from "./pages/dashboard/layout";
import { ResumeProvider } from "./context/ResumeContext";

const Home = lazy(() => import("./pages/Home"));
const SignIn = lazy(() => import("./pages/SignIn"));

// dashboard
const DashboardOverview = lazy(() => import("./pages/dashboard/Overview"));
const MorePage = lazy(() => import("./pages/dashboard/MorePage"));
const EditUserInfo = lazy(() => import("./pages/EditUserInfo"));
const GenerateResume = lazy(() => import("./pages/generate-resume"));
const EnterResumeData = lazy(() => import("./pages/EnterResumeData"));
const PreviewPage = lazy(() => import("./pages/Preview"))
const Editor = lazy(() => import ("./pages/Editor"))

export default function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<Loader />}>
        <ResumeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="edit-user-info" element={<EditUserInfo />} />
            <Route path="generate-resume" element={<GenerateResume />} />
            <Route path="enter-resume-data" element={<EnterResumeData />} />
            <Route path="preview" element={<PreviewPage/>}/>
            <Route path="editor/:type" element={<Editor/>}/>

            <Route path="dashboard" element={<Layout />}>
              <Route index element={<DashboardOverview />} />
              <Route path={"more"} element={<MorePage />} />
            </Route>

            <Route
              path="*"
              element={<> Funny thing😅 .. I haven't built this page yet</>}
            />
          </Routes>
        </ResumeProvider>
      </Suspense>
    </AuthProvider>
  );
}
