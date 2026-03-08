// File: app/(tabs)/home.tsx

import React from "react";
import { router } from "expo-router";
import { Text, View } from "react-native";
import AppShell from "../../components/AppShell";
import BrandHeader from "../../components/BrandHeader";
import GoldButton from "../../components/GoldButton";
import { theme } from "../../constants/theme";

export default function HomeScreen() {
  return (
    <AppShell>
      <BrandHeader />

      <View
        style={{
          backgroundColor: "rgba(17,17,17,0.88)",
          borderWidth: 1,
          borderColor: theme.colors.border,
          borderRadius: 24,
          padding: 20,
          marginBottom: 18
        }}
      >
        <Text
          style={{
            color: theme.colors.gold,
            fontFamily: "CinzelBold",
            fontSize: 22,
            marginBottom: 12
          }}
        >
          Verse of the Day
        </Text>

        <Text
          style={{
            color: theme.colors.text,
            fontFamily: "MontserratMedium",
            fontSize: 16,
            lineHeight: 26
          }}
        >
          Love the Lord your God with all your heart and with all your soul and
          with all your strength and with all your mind.
        </Text>

        <Text
          style={{
            color: theme.colors.gold,
            fontFamily: "MontserratBold",
            fontSize: 14,
            marginTop: 12
          }}
        >
          Luke 10:27
        </Text>
      </View>

      <View style={{ gap: 12 }}>
        <GoldButton title="Watch Live Inside the App" onPress={() => router.push("/live")} />
        <GoldButton title="Send Prayer Request" onPress={() => router.push("/prayer")} />
        <GoldButton title="See Community" onPress={() => router.push("/community")} />
        <GoldButton title="Open Profile" onPress={() => router.push("/profile")} />
      </View>
    </AppShell>
  );
}