// File: app/(tabs)/live.tsx

import React, { useState } from "react";
import { Platform, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import YoutubePlayer from "react-native-youtube-iframe";
import AppShell from "../../components/AppShell";
import BrandHeader from "../../components/BrandHeader";
import GoldButton from "../../components/GoldButton";
import { theme } from "../../constants/theme";

export default function LiveScreen() {
  const [playing, setPlaying] = useState(false);
  const videoId = theme.youtubeVideoId;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?playsinline=1`;

  return (
    <AppShell>
      <BrandHeader size="sm" />

      <View
        style={{
          backgroundColor: theme.colors.card,
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
            minHeight: 240
          }}
        >
          {Platform.OS === "web" ? (
            <WebView
              source={{ uri: embedUrl }}
              style={{ height: 240, backgroundColor: "#000" }}
            />
          ) : (
            <YoutubePlayer
              height={240}
              play={playing}
              videoId={videoId}
              initialPlayerParams={{
                controls: true,
                modestbranding: true,
                rel: false
              }}
            />
          )}
        </View>

        {Platform.OS !== "web" ? (
          <GoldButton
            title={playing ? "Pause Video" : "Play Video"}
            onPress={() => setPlaying((prev) => !prev)}
          />
        ) : null}
      </View>
    </AppShell>
  );
}