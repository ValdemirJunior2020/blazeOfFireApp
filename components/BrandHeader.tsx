// File: components/BrandHeader.tsx

import React from "react";
import { Image, Text, View } from "react-native";
import { theme } from "../constants/theme";

type Props = {
  title?: string;
  subtitle?: string;
  size?: "sm" | "lg";
};

export default function BrandHeader({
  title = "Blaze of Fire",
  subtitle = "Revival Global Center",
  size = "lg"
}: Props) {
  const isLarge = size === "lg";

  return (
    <View style={{ alignItems: "center", marginBottom: 24 }}>
      <Image
        source={require("../assets/logo.png")}
        resizeMode="contain"
        style={{
          width: isLarge ? 180 : 110,
          height: isLarge ? 180 : 110,
          marginBottom: 10
        }}
      />

      <Text
        style={{
          color: theme.colors.gold,
          fontFamily: "CinzelBold",
          fontSize: isLarge ? 30 : 22,
          textAlign: "center",
          letterSpacing: 0.5
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          color: theme.colors.text,
          fontFamily: "MontserratMedium",
          fontSize: isLarge ? 15 : 13,
          textAlign: "center",
          marginTop: 4
        }}
      >
        {subtitle}
      </Text>
    </View>
  );
}