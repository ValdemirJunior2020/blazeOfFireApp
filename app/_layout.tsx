// File: app/_layout.tsx
<<<<<<< HEAD
=======
import "react-native-gesture-handler";
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
import React, { useEffect } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
<<<<<<< HEAD
=======
import * as Notifications from "expo-notifications";
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
import { Cinzel_600SemiBold, Cinzel_700Bold } from "@expo-google-fonts/cinzel";
import {
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold
} from "@expo-google-fonts/montserrat";
import { AuthProvider } from "../context/AuthContext";

<<<<<<< HEAD
void SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
  const [loaded, error] = useFonts({
=======
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
    CinzelSemiBold: Cinzel_600SemiBold,
    CinzelBold: Cinzel_700Bold,
    MontserratMedium: Montserrat_500Medium,
    MontserratSemiBold: Montserrat_600SemiBold,
    MontserratBold: Montserrat_700Bold
  });

  useEffect(() => {
<<<<<<< HEAD
    if (loaded || error) {
      void SplashScreen.hideAsync().catch(() => {});
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
=======
    const subscription = Notifications.addNotificationResponseReceivedListener(() => {});

    if (loaded) {
      SplashScreen.hideAsync();
    }

    return () => {
      subscription.remove();
    };
  }, [loaded]);

  if (!loaded) return null;
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b

  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>
  );
}