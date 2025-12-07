import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import { AuthProvider } from "./context/context"; // your context

const Home = lazy(() => import("./pages/Home"));
const SignIn = lazy(() => import("./pages/SignIn"));

export default function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<SignIn />} />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}
