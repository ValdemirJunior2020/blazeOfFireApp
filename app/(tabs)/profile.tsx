// File: app/(tabs)/profile.tsx

import React from "react";
import { Alert, Text, View } from "react-native";
import AppShell from "../../components/AppShell";
import BrandHeader from "../../components/BrandHeader";
import GoldButton from "../../components/GoldButton";
import { useAuth } from "../../context/AuthContext";
import { theme } from "../../constants/theme";

export default function ProfileScreen() {
  const { user, logout, deleteMyAccount } = useAuth();

  const handleDeleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "This will permanently delete your account. This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteMyAccount();
              Alert.alert("Account Deleted", "Your account has been permanently deleted.");
            } catch (error: any) {
              Alert.alert("Delete Failed", error?.message || "Unable to delete account.");
            }
          }
        }
      ]
    );
  };

  return (
    <AppShell>
      <BrandHeader size="sm" />

      <View
        style={{
          backgroundColor: theme.colors.card,
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

      <View style={{ gap: 12 }}>
        <GoldButton title="Logout" onPress={logout} />

        <View
          style={{
            backgroundColor: "#2A0F0F",
            borderColor: "#8B1E1E",
            borderWidth: 1,
            borderRadius: 18,
            overflow: "hidden"
          }}
        >
          <Text
            onPress={handleDeleteAccount}
            style={{
              color: "#FFFFFF",
              textAlign: "center",
              fontFamily: "MontserratBold",
              fontSize: 16,
              paddingVertical: 16
            }}
          >
            Delete My Account
          </Text>
        </View>
      </View>
    </AppShell>
  );
}