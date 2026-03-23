// File: app/(tabs)/live.tsx
<<<<<<< HEAD
import React from "react";
import { Linking, Text, View } from "react-native";
import { WebView } from "react-native-webview";
=======
import React, { useState } from "react";
import { Platform, Text, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
import AppShell from "../../components/AppShell";
import BrandHeader from "../../components/BrandHeader";
import GoldButton from "../../components/GoldButton";
import { theme } from "../../constants/theme";

export default function LiveScreen() {
<<<<<<< HEAD
  const vimeoId = theme.vimeoVideoId;
  const watchUrl = theme.youtubeChannelLiveUrl;
  const embedUrl = `https://player.vimeo.com/video/${vimeoId}`;

  const openInYoutubeLive = async () => {
    try {
      await Linking.openURL(watchUrl);
    } catch (error) {
      console.error("Unable to open YouTube live:", error);
    }
  };
=======
  const [playing, setPlaying] = useState(false);
  const videoId = theme.youtubeVideoId;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?playsinline=1&rel=0`;
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b

  return (
    <AppShell>
      <BrandHeader size="sm" />

      <View
        style={{
<<<<<<< HEAD
          backgroundColor: "rgba(17,17,17,0.92)",
=======
          backgroundColor: "rgba(17,17,17,0.9)",
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
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
<<<<<<< HEAD
            minHeight: 240,
            height: 240
          }}
        >
          <WebView
            source={{ uri: embedUrl }}
            style={{ flex: 1, backgroundColor: "#000" }}
            javaScriptEnabled
            domStorageEnabled
            allowsInlineMediaPlayback
            mediaPlaybackRequiresUserAction={false}
            originWhitelist={["*"]}
          />
        </View>

        <GoldButton title="Open on YouTube Live" onPress={openInYoutubeLive} />
=======
            minHeight: 240
          }}
        >
          {Platform.OS === "web" ? (
            <iframe
              src={embedUrl}
              title="Blaze of Fire Live Service"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                width: "100%",
                height: "240px",
                border: "none",
                display: "block",
                backgroundColor: "#000"
              }}
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
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
      </View>
    </AppShell>
  );
}