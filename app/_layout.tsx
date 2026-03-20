// File: app/_layout.tsx
import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Cinzel_600SemiBold, Cinzel_700Bold } from "@expo-google-fonts/cinzel";
import {
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold
} from "@expo-google-fonts/montserrat";
import { AuthProvider } from "../context/AuthContext";

void SplashScreen.preventAutoHideAsync().catch(() => {
  // Ignore if the splash screen was already prevented/hidden.
});

export default function RootLayout() {
  const [loaded, error] = useFonts({
    CinzelSemiBold: Cinzel_600SemiBold,
    CinzelBold: Cinzel_700Bold,
    MontserratMedium: Montserrat_500Medium,
    MontserratSemiBold: Montserrat_600SemiBold,
    MontserratBold: Montserrat_700Bold
  });

  useEffect(() => {
    if (error) {
      console.error("Font loading error:", error);
    }
  }, [error]);

  useEffect(() => {
    if (loaded || error) {
      void SplashScreen.hideAsync().catch(() => {
        // Avoid crashing if hide is called twice.
      });
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>
  );
}
