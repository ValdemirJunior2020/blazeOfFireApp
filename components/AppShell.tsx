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
<<<<<<< HEAD
=======
      {/* FULL SCREEN BACKGROUND */}
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
      <ImageBackground
        source={require("../assets/images/bg.jpg")}
        resizeMode="cover"
        style={styles.background}
        imageStyle={styles.image}
      />

<<<<<<< HEAD
      <View style={styles.overlay} />

=======
      {/* LIGHT OVERLAY */}
      <View pointerEvents="none" style={styles.overlay} />

      {/* CONTENT */}
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
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
<<<<<<< HEAD
=======

  /* THIS FORCES FULL SCREEN IMAGE */
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%"
  },
<<<<<<< HEAD
  image: {
    opacity: 0.65
  },
=======

  image: {
    opacity: 0.65
  },

>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
<<<<<<< HEAD
    pointerEvents: "none",
    backgroundColor: "rgba(0,0,0,0.08)"
  },
  contentLayer: {
    flex: 1
  },
=======
    backgroundColor: "rgba(0,0,0,0.08)"
  },

  contentLayer: {
    flex: 1
  },

>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
  scrollContent: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 120
  },
<<<<<<< HEAD
=======

>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
  noScrollContent: {
    flex: 1,
    padding: 20
  },
<<<<<<< HEAD
=======

  /* CENTER CONTENT BUT KEEP BACKGROUND FULL */
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
  content: {
    width: "100%",
    maxWidth: 760,
    alignSelf: "center"
  }
});