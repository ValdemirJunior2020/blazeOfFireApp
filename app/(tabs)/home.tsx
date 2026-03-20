// File: app/(tabs)/home.tsx
import React from "react";
import { Text, View } from "react-native";
import { router } from "expo-router";
import AppShell from "../../components/AppShell";
import BrandHeader from "../../components/BrandHeader";
import GoldButton from "../../components/GoldButton";
import { theme } from "../../constants/theme";
import { getVerseOfTheDay } from "../../data/verses";

export default function HomeScreen() {
  const verse = getVerseOfTheDay();

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
            fontFamily: "MontserratSemiBold",
            fontSize: 16,
            lineHeight: 30,
            marginBottom: 12
          }}
        >
          {verse.text}
        </Text>

        <Text
          style={{
            color: theme.colors.gold,
            fontFamily: "MontserratBold",
            fontSize: 15
          }}
        >
          {verse.reference}
        </Text>
      </View>

      <GoldButton title="Watch Live Inside the App" onPress={() => router.push("/live")} />
      <View style={{ height: 14 }} />
      <GoldButton title="Send Prayer Request" onPress={() => router.push("/prayer")} />
      <View style={{ height: 14 }} />
      <GoldButton title="See Community" onPress={() => router.push("/community")} />
      <View style={{ height: 14 }} />
      <GoldButton title="Open Profile" onPress={() => router.push("/profile")} />
    </AppShell>
  );
}