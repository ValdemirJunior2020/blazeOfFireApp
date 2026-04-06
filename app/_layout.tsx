// File: C:\Users\Valdemir Goncalves\Desktop\pROJETUS-2026\blazeOfFireApp\app\_layout.tsx
import "react-native-gesture-handler";
import React from "react";
import { Stack } from "expo-router";
import { AuthProvider } from "../context/AuthContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>
  );
}