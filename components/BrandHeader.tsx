// C:\Users\Valdemir Goncalves\Desktop\pROJETUS-2026\blazeOfFireApp\components\BrandHeader.tsx
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../constants/theme";

type Props = {
  size?: "sm" | "lg";
};

export default function BrandHeader({ size = "lg" }: Props) {
  const isSmall = size === "sm";

  return (
    <View style={styles.container}>
      <View style={[styles.logoWrap, isSmall ? styles.smallWrap : styles.largeWrap]}>
        <Image
          source={require("../assets/icon.png")}
          style={[styles.logo, isSmall ? styles.smallLogo : styles.largeLogo]}
          resizeMode="contain"
        />
      </View>

      <Text style={[styles.title, isSmall && styles.smallTitle]}>BLAZE OF FIRE</Text>
      <Text style={[styles.subtitle, isSmall && styles.smallSubtitle]}>
        Revival Global Center
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 22
  },
  logoWrap: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    borderRadius: 999,
    backgroundColor: "rgba(212,175,55,0.08)",
    borderWidth: 1,
    borderColor: "rgba(212,175,55,0.18)"
  },
  largeWrap: {
    width: 132,
    height: 132,
    padding: 10
  },
  smallWrap: {
    width: 90,
    height: 90,
    padding: 8
  },
  logo: {
    opacity: 1
  },
  largeLogo: {
    width: 108,
    height: 108
  },
  smallLogo: {
    width: 72,
    height: 72
  },
  title: {
    color: theme.colors.gold,
    fontSize: 30,
    fontFamily: "CinzelBold",
    textAlign: "center",
    letterSpacing: 0.5
  },
  smallTitle: {
    fontSize: 24
  },
  subtitle: {
    marginTop: 4,
    color: "#F2F2F2",
    fontSize: 14,
    fontFamily: "MontserratSemiBold",
    textAlign: "center"
  },
  smallSubtitle: {
    fontSize: 12
  }
});