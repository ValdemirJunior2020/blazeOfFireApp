// File: components/AppShell.tsx

import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/bg.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.safe}>
          <View style={styles.overlay}>{children}</View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  safe: {
    flex: 1,
    width: "100%"
  },
  overlay: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.35)"
  }
});