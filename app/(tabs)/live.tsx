// File: app/(tabs)/live.tsx
import React, { useMemo, useState } from "react";
import { Linking, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import AppShell from "../../components/AppShell";
import BrandHeader from "../../components/BrandHeader";
import GoldButton from "../../components/GoldButton";
import { theme } from "../../constants/theme";

export default function LiveScreen() {
  const [showFallback, setShowFallback] = useState(false);

  const videoId = theme.youtubeVideoId;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  const embedUrl = useMemo(() => {
    return `https://www.youtube.com/embed/${videoId}?playsinline=1&rel=0&modestbranding=1&controls=1`;
  }, [videoId]);

  const openInYoutube = async () => {
    try {
      await Linking.openURL(watchUrl);
    } catch (error) {
      console.error("Unable to open YouTube:", error);
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
          {showFallback ? (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 20
              }}
            >
              <Text
                style={{
                  color: theme.colors.text,
                  fontFamily: "MontserratSemiBold",
                  fontSize: 17,
                  textAlign: "center",
                  marginBottom: 10
                }}
              >
                This live video cannot play inside the app.
              </Text>

              <Text
                style={{
                  color: "#CFCFCF",
                  fontFamily: "MontserratMedium",
                  fontSize: 13,
                  textAlign: "center",
                  lineHeight: 20
                }}
              >
                This YouTube stream blocks embedded playback. Tap the button
                below to watch directly on YouTube.
              </Text>
            </View>
          ) : (
            <WebView
              source={{ uri: embedUrl }}
              style={{ flex: 1, backgroundColor: "#000" }}
              javaScriptEnabled
              domStorageEnabled
              allowsInlineMediaPlayback
              mediaPlaybackRequiresUserAction={false}
              originWhitelist={["*"]}
              onError={() => setShowFallback(true)}
              onHttpError={() => setShowFallback(true)}
            />
          )}
        </View>

        <GoldButton title="Open in YouTube" onPress={openInYoutube} />
      </View>
    </AppShell>
  );
}