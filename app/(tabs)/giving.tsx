// File: app/(tabs)/giving.tsx

import React from "react";
import { Alert, Pressable, Text, View } from "react-native";
import * as Clipboard from "expo-clipboard";
import Screen from "../../components/Screen";
import SectionTitle from "../../components/SectionTitle";
import { LINKS } from "../../constants/links";

export default function GivingScreen() {
  const copyZelle = async () => {
    await Clipboard.setStringAsync(LINKS.donationEmail);
    Alert.alert("Copied", "Zelle email copied.");
  };

  return (
    <Screen>
      <SectionTitle title="Giving" />

      <View
        style={{
          backgroundColor: "#171717",
          borderRadius: 24,
          padding: 20,
          marginBottom: 16
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            lineHeight: 24,
            fontSize: 15
          }}
        >
          This app is free forever. Your giving supports the ministry, events,
          outreach, and the work God is doing through Blaze of Fire.
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#171717",
          borderRadius: 24,
          padding: 20,
          marginBottom: 16,
          borderWidth: 1,
          borderColor: "#D4AF37"
        }}
      >
        <Text
          style={{
            color: "#D4AF37",
            fontSize: 18,
            fontWeight: "700",
            marginBottom: 8
          }}
        >
          Zelle
        </Text>

        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 16
          }}
        >
          {LINKS.donationEmail}
        </Text>
      </View>

      <Pressable
        onPress={copyZelle}
        style={{
          backgroundColor: "#D4AF37",
          borderRadius: 18,
          paddingVertical: 16,
          paddingHorizontal: 16
        }}
      >
        <Text
          style={{
            color: "#000000",
            textAlign: "center",
            fontWeight: "700",
            fontSize: 16
          }}
        >
          Copy Zelle Email
        </Text>
      </Pressable>
    </Screen>
  );
}