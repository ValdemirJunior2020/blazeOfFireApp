// File: app/(tabs)/live.tsx
import React, { useMemo, useState } from "react";
import { Linking, Platform, Text, View } from "react-native";
import AppShell from "../../components/AppShell";
import BrandHeader from "../../components/BrandHeader";
import GoldButton from "../../components/GoldButton";
import { theme } from "../../constants/theme";

export default function LiveScreen() {
  const [showInlinePlayer, setShowInlinePlayer] = useState(false);

  const vimeoId = theme.vimeoVideoId;
  const watchUrl = theme.youtubeChannelLiveUrl;
  const embedUrl = `https://player.vimeo.com/video/${vimeoId}`;
  const isPad = Platform.OS === "ios" && Platform.isPad === true;

  const WebViewComponent = useMemo(() => {
    if (!showInlinePlayer) return null;

    try {
      return require("react-native-webview").WebView;
    } catch (error) {
      console.error("Failed to require react-native-webview:", error);
      return null;
    }
  }, [showInlinePlayer]);

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

        {!showInlinePlayer ? (
          <>
            <Text
              style={{
                color: theme.colors.text,
                fontFamily: "MontserratMedium",
                fontSize: 14,
                lineHeight: 22,
                textAlign: "center",
                marginBottom: 16
              }}
            >
              {isPad
                ? "On iPad, load the in-app player only when needed."
                : "Tap below to load the in-app player."}
            </Text>

            <GoldButton
              title="Load Live Stream Inside the App"
              onPress={() => setShowInlinePlayer(true)}
            />
            <View style={{ height: 12 }} />
          </>
        ) : null}

        {showInlinePlayer && WebViewComponent ? (
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
            <WebViewComponent
              source={{ uri: embedUrl }}
              style={{ flex: 1, backgroundColor: "#000" }}
              javaScriptEnabled
              domStorageEnabled
              allowsInlineMediaPlayback
              mediaPlaybackRequiresUserAction={false}
              originWhitelist={["*"]}
              startInLoadingState
            />
          </View>
        ) : null}

        <GoldButton title="Open on YouTube Live" onPress={openInYoutubeLive} />
      </View>
    </AppShell>
  );
}