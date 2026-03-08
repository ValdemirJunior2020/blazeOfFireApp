// File: context/AuthContext.tsx
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
import { doc, deleteDoc } from "firebase/firestore";
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

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);

  const normalizeUser = async (firebaseUser: User) => {
    const role: "admin" | "member" = isAdminEmail(firebaseUser.email)
      ? "admin"
      : "member";

    setUser({
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      displayName: firebaseUser.displayName,
      role
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        await normalizeUser(firebaseUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    await normalizeUser(result.user);
  };

  const signup = async (name: string, email: string, password: string) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, { displayName: name });
    await normalizeUser({ ...result.user, displayName: name } as User);
  };

  const logout = async () => {
    await signOut(auth);
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
    () => ({ user, loading, login, signup, logout, deleteMyAccount }),
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