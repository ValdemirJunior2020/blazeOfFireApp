// C:\Users\Valdemir Goncalves\Desktop\pROJETUS-2026\blazeOfFireApp\context\AuthContext.tsx
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  User,
  createUserWithEmailAndPassword,
  deleteUser,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import { isAdminEmail } from "../constants/admin";

export type AppUser = {
  uid: string;
  email: string | null;
  displayName: string | null;
  role: "admin" | "member";
};

type AuthContextType = {
  user: AppUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  deleteMyAccount: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

function toAppUser(firebaseUser: User): AppUser {
  return {
    uid: firebaseUser.uid,
    email: firebaseUser.email,
    displayName: firebaseUser.displayName,
    role: isAdminEmail(firebaseUser.email) ? "admin" : "member"
  };
}

async function syncUserProfileSafely(appUser: AppUser) {
  try {
    const usersModule = await import("../services/users");
    if (typeof usersModule.createOrUpdateUserProfile === "function") {
      await usersModule.createOrUpdateUserProfile(appUser);
    }
  } catch (error) {
    console.error("Failed to sync user profile:", error);
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    let unsubscribe: (() => void) | undefined;

    try {
      unsubscribe = onAuthStateChanged(
        auth,
        (firebaseUser) => {
          if (!mounted) return;

          try {
            if (!firebaseUser) {
              setUser(null);
              setLoading(false);
              return;
            }

            const normalized = toAppUser(firebaseUser);
            setUser(normalized);
            setLoading(false);
          } catch (error) {
            console.error("Auth state change failed:", error);
            setUser(null);
            setLoading(false);
          }
        },
        (error) => {
          if (!mounted) return;
          console.error("onAuthStateChanged listener failed:", error);
          setUser(null);
          setLoading(false);
        }
      );
    } catch (error) {
      console.error("Failed to attach auth listener:", error);
      setUser(null);
      setLoading(false);
    }

    return () => {
      mounted = false;
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const login = async (email: string, password: string) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const normalized = toAppUser(result.user);
    setUser(normalized);
    await syncUserProfileSafely(normalized);
  };

  const signup = async (name: string, email: string, password: string) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, { displayName: name });
    await result.user.reload();

    const refreshedUser = auth.currentUser ?? result.user;
    const normalized = toAppUser(refreshedUser);
    setUser(normalized);
    await syncUserProfileSafely(normalized);
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const deleteMyAccount = async () => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      throw new Error("No logged in user found.");
    }

    try {
      await deleteDoc(doc(db, "users", currentUser.uid)).catch(() => null);
      await deleteUser(currentUser);
      setUser(null);
    } catch (error: any) {
      if (error?.code === "auth/requires-recent-login") {
        throw new Error("For security, please log out, log back in, and try deleting your account again.");
      }

      throw new Error(error?.message || "Unable to delete account.");
    }
  };

  const value = useMemo(
    () => ({
      user,
      loading,
      login,
      signup,
      logout,
      deleteMyAccount
    }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}