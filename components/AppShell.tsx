// File: components/AppShell.tsx
import React from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View
} from "react-native";

type Props = {
  children: React.ReactNode;
  scroll?: boolean;
};

export default function AppShell({ children, scroll = true }: Props) {
  return (
    <View style={styles.root}>
      {/* FULL SCREEN BACKGROUND */}
      <ImageBackground
        source={require("../assets/images/bg.jpg")}
        resizeMode="cover"
        style={styles.background}
        imageStyle={styles.image}
      />

      {/* LIGHT OVERLAY */}
      <View pointerEvents="none" style={styles.overlay} />

      {/* CONTENT */}
      <KeyboardAvoidingView
        style={styles.contentLayer}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {scroll ? (
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.content}>{children}</View>
          </ScrollView>
        ) : (
          <View style={styles.noScrollContent}>
            <View style={styles.content}>{children}</View>
          </View>
        )}
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%"
  },

  /* THIS FORCES FULL SCREEN IMAGE */
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%"
  },

  image: {
    opacity: 0.65
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.08)"
  },

  contentLayer: {
    flex: 1
  },

  scrollContent: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 120
  },

  noScrollContent: {
    flex: 1,
    padding: 20
  },

  /* CENTER CONTENT BUT KEEP BACKGROUND FULL */
  content: {
    width: "100%",
    maxWidth: 760,
    alignSelf: "center"
  }
});