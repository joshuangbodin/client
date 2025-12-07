import { useState } from "react";
import NavBar from "../components/NavBar";
import { auth, googleProvider, db } from "../libraries/firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import Loader from "../components/Loader";

export default function SignIn() {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);

      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Save / update Firestore document
      await setDoc(
        doc(db, "users", user.uid),
        {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          avatar: user.photoURL,
          lastLogin: serverTimestamp(),
        },
        { merge: true } // prevents overwriting existing data
      );

      // Redirect
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader />
      </div>
    );
  }

  return (
    <main className="flex justify-center items-center w-full min-h-screen">
      <NavBar showFullNav={false} />

      <div className="bg-white p-5 py-10 border max-w-sm md:max-w-md rounded-xl flex flex-col items-center justify-center border-gray-200">
        <img src="/brand/logo.svg" className="h-7 md:h-8 lg:h-9" alt="" />

        <h2 className="font-header text-xl md:text-2xl lg:text-2xl font-semibold mt-2">
          Sign In to ApplySteeze
        </h2>

        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="my-14 hover:scale-95 disabled:opacity-50 disabled:cursor-not-allowed border py-3 flex items-center gap-4 text-sm md:text-base lg:text-lg px-10 rounded-full"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>

        <p className="text-center text-gray-500 text-xs md:text-sm">
          Signing for an Applyeazy account means you agree to the{" "}
          <a href="" className="underline text-black font-medium">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="" className="underline font-medium text-black">
            Terms of Service
          </a>
          .
        </p>

        <p className="text-center mt-7 text-xs md:text-sm">
          Don't have an account?{" "}
          <a href="" className="underline text-black font-medium">
            Sign Up here
          </a>
        </p>
      </div>
    </main>
  );
}
