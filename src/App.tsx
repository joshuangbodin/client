import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import { AuthProvider } from "./context/context"; // your context
import Layout from "./pages/dashboard/layout";

const Home = lazy(() => import("./pages/Home"));
const SignIn = lazy(() => import("./pages/SignIn"));

// dashboard
const DashboardOverview = lazy(() => import("./pages/dashboard/Overview"));
const MorePage = lazy(() => import("./pages/dashboard/MorePage"));

export default function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<SignIn />} />

          <Route path="dashboard" element={<Layout />}>
            <Route index element={<DashboardOverview />} />
            <Route path={"more"} element={<MorePage/>} />
          </Route>

          <Route
            path="*"
            element={<> Funny thing😅 .. I haven't built this page yet</>}
          />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}
