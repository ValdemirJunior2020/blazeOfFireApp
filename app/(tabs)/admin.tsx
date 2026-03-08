// File: app/(tabs)/admin.tsx
import React from "react";
import { Redirect, router } from "expo-router";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppShell from "../../components/AppShell";
import BrandHeader from "../../components/BrandHeader";
import GoldButton from "../../components/GoldButton";
import { theme } from "../../constants/theme";
import { useAuth } from "../../context/AuthContext";
import { isAdminEmail } from "../../constants/admin";

export default function AdminTabScreen() {
  const { user } = useAuth();
  const isAdmin = isAdminEmail(user?.email);

  if (!user) {
    return <Redirect href="/login" />;
  }

  if (!isAdmin) {
    return <Redirect href="/home" />;
  }

  return (
    <AppShell>
      <BrandHeader size="sm" />

      <View
        style={{
          backgroundColor: "rgba(17,17,17,0.92)",
          borderWidth: 1,
          borderColor: theme.colors.border,
          borderRadius: 24,
          padding: 20
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16
          }}
        >
          <Ionicons name="shield-checkmark" size={42} color={theme.colors.gold} />
        </View>

        <Text
          style={{
            color: theme.colors.gold,
            fontFamily: "CinzelBold",
            fontSize: 24,
            textAlign: "center",
            marginBottom: 10
          }}
        >
          Admin Center
        </Text>

        <Text
          style={{
            color: theme.colors.text,
            fontFamily: "MontserratMedium",
            fontSize: 15,
            lineHeight: 24,
            textAlign: "center",
            marginBottom: 18
          }}
        >
          Open the pastor dashboard to view and manage saved prayer requests.
        </Text>

        <GoldButton
          title="Open Prayer Requests"
          onPress={() => router.push("/admin/prayer-requests")}
        />
      </View>
    </AppShell>
  );
}