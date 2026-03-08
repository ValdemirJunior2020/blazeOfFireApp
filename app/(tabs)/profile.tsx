// File: app/(tabs)/profile.tsx

import React from "react";
import { Text, View } from "react-native";
import AppShell from "../../components/AppShell";
import BrandHeader from "../../components/BrandHeader";
import GoldButton from "../../components/GoldButton";
import { useAuth } from "../../context/AuthContext";
import { theme } from "../../constants/theme";

export default function ProfileScreen() {
  const { user, logout } = useAuth();

  return (
    <AppShell>
      <BrandHeader size="sm" />

      <View
        style={{
          backgroundColor: "rgba(17,17,17,0.9)",
          borderWidth: 1,
          borderColor: theme.colors.border,
          borderRadius: 24,
          padding: 20,
          marginBottom: 16
        }}
      >
        <Text
          style={{
            color: theme.colors.gold,
            fontFamily: "CinzelBold",
            fontSize: 22,
            marginBottom: 14
          }}
        >
          Profile
        </Text>

        <Text
          style={{
            color: theme.colors.text,
            fontFamily: "MontserratMedium",
            fontSize: 16,
            marginBottom: 8
          }}
        >
          Name: {user?.displayName || "N/A"}
        </Text>

        <Text
          style={{
            color: theme.colors.text,
            fontFamily: "MontserratMedium",
            fontSize: 16,
            marginBottom: 8
          }}
        >
          Email: {user?.email || "N/A"}
        </Text>

        <Text
          style={{
            color: theme.colors.text,
            fontFamily: "MontserratMedium",
            fontSize: 16
          }}
        >
          Role: {user?.role || "member"}
        </Text>
      </View>

      <GoldButton title="Logout" onPress={logout} />
    </AppShell>
  );
}