// File: app/(tabs)/prayer.tsx

import React from "react";
import { Text, View } from "react-native";
import AppShell from "../../components/AppShell";
import BrandHeader from "../../components/BrandHeader";
import { theme } from "../../constants/theme";

export default function PrayerScreen() {
  return (
    <AppShell>
      <BrandHeader size="sm" />

      <View
        style={{
          backgroundColor: "rgba(17,17,17,0.9)",
          borderWidth: 1,
          borderColor: theme.colors.border,
          borderRadius: 24,
          padding: 20
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
          Prayer
        </Text>

        <Text
          style={{
            color: theme.colors.text,
            fontFamily: "MontserratMedium",
            fontSize: 15,
            lineHeight: 24
          }}
        >
          Prayer request screen is ready for the next Firebase form step.
        </Text>
      </View>
    </AppShell>
  );
}