// File: services/pushNotifications.ts
import { Platform } from "react-native";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { isAdminEmail } from "../constants/admin";

let notificationHandlerConfigured = false;

async function getDeviceModule() {
  return await import("expo-device");
}

async function getNotificationsModule() {
  return await import("expo-notifications");
}

async function ensureNotificationHandlerConfigured() {
  if (notificationHandlerConfigured) return;
  if (Platform.OS === "web") return;

  const Notifications = await getNotificationsModule();

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowBanner: true,
      shouldShowList: true,
      shouldPlaySound: true,
      shouldSetBadge: false
    })
  });

  notificationHandlerConfigured = true;
}

export async function registerAdminForPushNotifications(
  userId: string,
  email: string
) {
  try {
    if (!userId || !email) return null;
    if (!isAdminEmail(email)) return null;
    if (Platform.OS === "web") return null;

    const Device = await getDeviceModule();
    if (!Device.isDevice) return null;

    await ensureNotificationHandlerConfigured();

    const Notifications = await getNotificationsModule();

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      return null;
    }

    const projectId =
      process.env.EXPO_PUBLIC_PROJECT_ID ||
      process.env.EXPO_PUBLIC_EAS_PROJECT_ID ||
      process.env.REACT_APP_EXPO_PROJECT_ID ||
      "";

    const tokenResult = await Notifications.getExpoPushTokenAsync(
      projectId ? { projectId } : undefined
    );

    const token = tokenResult.data;

    await setDoc(
      doc(db, "admin_devices", userId),
      {
        userId,
        email,
        expoPushToken: token,
        platform: Platform.OS,
        updatedAt: serverTimestamp()
      },
      { merge: true }
    );

    return token;
  } catch (error) {
    console.log("registerAdminForPushNotifications error:", error);
    return null;
  }
}