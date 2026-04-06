// C:\Users\Valdemir Goncalves\Desktop\pROJETUS-2026\blazeOfFireApp\app\index.tsx
import React from "react";
import { Text, View } from "react-native";

export default function IndexScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#050505",
        alignItems: "center",
        justifyContent: "center",
        padding: 24
      }}
    >
      <Text
        style={{
          color: "#D4AF37",
          fontSize: 24,
          fontWeight: "700",
          marginBottom: 12,
          textAlign: "center"
        }}
      >
        Blaze of Fire
      </Text>

      <Text
        style={{
          color: "#F7F3E8",
          fontSize: 15,
          lineHeight: 24,
          textAlign: "center"
        }}
      >
        Static startup test build.
      </Text>
    </View>
  );
}