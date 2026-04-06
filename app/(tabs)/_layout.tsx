// File: app/_layout.tsx
import "react-native-gesture-handler";
import React, { useEffect, useRef, useState } from "react";
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
import StartupErrorBoundary from "../components/StartupErrorBoundary";

export default function RootLayout() {
  const splashPreparedRef = useRef(false);
  const [splashPrepared, setSplashPrepared] = useState(false);

  const [loaded, error] = useFonts({
    CinzelSemiBold: Cinzel_600SemiBold,
    CinzelBold: Cinzel_700Bold,
    MontserratMedium: Montserrat_500Medium,
    MontserratSemiBold: Montserrat_600SemiBold,
    MontserratBold: Montserrat_700Bold
  });

  useEffect(() => {
    let isMounted = true;

    async function prepareSplashSafely() {
      if (splashPreparedRef.current) {
        if (isMounted) {
          setSplashPrepared(true);
        }
        return;
      }

      splashPreparedRef.current = true;

      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (startupError) {
        console.error("SplashScreen.preventAutoHideAsync failed:", startupError);
      } finally {
        if (isMounted) {
          setSplashPrepared(true);
        }
      }
    }

    void prepareSplashSafely();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!splashPrepared) return;
    if (!loaded && !error) return;

    async function hideSplashSafely() {
      try {
        await SplashScreen.hideAsync();
      } catch (hideError) {
        console.error("SplashScreen.hideAsync failed:", hideError);
      }
    }

    void hideSplashSafely();
  }, [splashPrepared, loaded, error]);

  if (!splashPrepared || (!loaded && !error)) {
    return null;
  }

  return (
    <StartupErrorBoundary>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </AuthProvider>
    </StartupErrorBoundary>
  );
}