// File: app/(tabs)/live.tsx
import React from "react";
import { Linking, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import AppShell from "../../components/AppShell";
import BrandHeader from "../../components/BrandHeader";
import GoldButton from "../../components/GoldButton";
import { theme } from "../../constants/theme";

export default function LiveScreen() {
  const videoId = theme.youtubeVideoId;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?playsinline=1&rel=0&modestbranding=1`;

  const openInYoutube = async () => {
    try {
      await Linking.openURL(watchUrl);
    } catch (error) {
      console.error("Unable to open live video:", error);
    }
  };

  return (
    <AppShell>
      <BrandHeader size="sm" />

      <View
        style={{
          backgroundColor: "rgba(17,17,17,0.9)",
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

        <View
          style={{
            overflow: "hidden",
            borderRadius: 18,
            backgroundColor: "#000",
            marginBottom: 16,
            minHeight: 240,
            height: 240
          }}
        >
          <WebView
            source={{ uri: embedUrl }}
            style={{ flex: 1, backgroundColor: "#000" }}
            javaScriptEnabled
            domStorageEnabled
            mediaPlaybackRequiresUserAction={false}
            allowsInlineMediaPlayback
            originWhitelist={["*"]}
          />
        </View>

        <GoldButton title="Open in YouTube" onPress={openInYoutube} />
      </View>
    </AppShell>
  );
}
