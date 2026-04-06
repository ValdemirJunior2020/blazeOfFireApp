import React from "react";
import { Linking, Text, View } from "react-native";
import AppShell from "../../components/AppShell";
import BrandHeader from "../../components/BrandHeader";
import GoldButton from "../../components/GoldButton";
import { theme } from "../../constants/theme";

export default function LiveScreen() {
  const watchUrl = theme.youtubeChannelLiveUrl;

  const openInYoutubeLive = async () => {
    try {
      await Linking.openURL(watchUrl);
    } catch (error) {
      console.error("Unable to open YouTube live:", error);
    }
  };

  return (
    <AppShell>
      <BrandHeader size="sm" />

      <View
        style={{
          backgroundColor: "rgba(17,17,17,0.92)",
          borderWidth: 1,
          borderColor: theme.colors.border,
          borderRadius: 24,
          padding: 18,
          marginBottom: 18
        }}
      >
        <Text
          style={{
            color: theme.colors.gold,
            fontFamily: "CinzelBold",
            fontSize: 24,
            textAlign: "center",
            marginBottom: 14
          }}
        >
          Live Service
        </Text>

        <Text
          style={{
            color: theme.colors.text,
            fontFamily: "MontserratMedium",
            fontSize: 15,
            lineHeight: 24,
            textAlign: "center",
            marginBottom: 16
          }}
        >
          The in-app player is temporarily disabled while we isolate an iPad crash.
          Tap below to watch the live service safely outside the app.
        </Text>

        <GoldButton title="Open on YouTube Live" onPress={openInYoutubeLive} />
      </View>
    </AppShell>
  );
}
