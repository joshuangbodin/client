import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../libraries/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import type { ContactInfo, Education, WorkExperience } from "../types/resume";

interface UserData {
  uid: string;
  name: string;
  email: string;
  avatar: string;
  [key: string]: any;
  education?: Education[];
  workExperience?: WorkExperience[];
  skills?: string[];
  contactInfo?: ContactInfo;
}

interface AuthContextType {
  user: UserData | null;
  loading: boolean;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  logout: async () => {},
  refreshUser: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  const loadUserProfile = async (uid: string) => {
    try {
      const userRef = doc(db, "users", uid);
      const snapshot = await getDoc(userRef);
      if (snapshot.exists()) setUser(snapshot.data() as UserData);
    } catch (error) {
      console.error("Failed to load user profile:", error);
      setUser(null); // fallback
    }
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        if (firebaseUser) {
          await loadUserProfile(firebaseUser.uid);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Firebase session check failed:", error);
        setUser(null);
      } finally {
        setLoading(false); // ensure loader stops even if an error occurs
      }
    });

    return () => unsub();
  }, []);

  const refreshUser = async () => {
    if (!auth.currentUser) return;
    try {
      await loadUserProfile(auth.currentUser.uid);
    } catch (error) {
      console.error("Failed to refresh user:", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Show logo while loading session
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <img src="/brand/logo.svg" className="h-10 animate-pulse" />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, loading, logout, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
