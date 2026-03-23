// File: components/BrandHeader.tsx
import React, { useEffect, useRef } from "react";
import { Animated, Easing, Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../constants/theme";

type Props = {
  size?: "sm" | "lg";
};

export default function BrandHeader({ size = "lg" }: Props) {
  const isSmall = size === "sm";

  const glowAnim = useRef(new Animated.Value(0.7)).current;
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
<<<<<<< HEAD
    const glowLoop = Animated.loop(
=======
    Animated.loop(
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 1800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false
        }),
        Animated.timing(glowAnim, {
          toValue: 0.7,
          duration: 1800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false
        })
      ])
<<<<<<< HEAD
    );

    const floatLoop = Animated.loop(
=======
    ).start();

    Animated.loop(
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -6,
          duration: 2200,
          easing: Easing.inOut(Easing.ease),
<<<<<<< HEAD
          useNativeDriver: false
=======
          useNativeDriver: true
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 2200,
          easing: Easing.inOut(Easing.ease),
<<<<<<< HEAD
          useNativeDriver: false
        })
      ])
    );

    glowLoop.start();
    floatLoop.start();

    return () => {
      glowLoop.stop();
      floatLoop.stop();
    };
  }, [glowAnim, floatAnim]);

  const animatedGlowStyle = {
    opacity: glowAnim.interpolate({
      inputRange: [0.7, 1],
      outputRange: [0.9, 1]
=======
          useNativeDriver: true
        })
      ])
    ).start();
  }, [glowAnim, floatAnim]);

  const animatedGlowStyle = {
    shadowOpacity: glowAnim,
    shadowRadius: glowAnim.interpolate({
      inputRange: [0.7, 1],
      outputRange: [16, 28]
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
    }),
    transform: [{ translateY: floatAnim }]
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoWrap, animatedGlowStyle]}>
        <Image
          source={require("../assets/logo.png")}
          style={[styles.logo, isSmall ? styles.smallLogo : styles.largeLogo]}
          resizeMode="contain"
        />
      </Animated.View>

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
    marginBottom: 10,
<<<<<<< HEAD
    borderRadius: 999
=======
    borderRadius: 999,
    shadowColor: "#D4AF37",
    shadowOffset: { width: 0, height: 0 },
    elevation: 16
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
  },
  logo: {
    opacity: 1
  },
  largeLogo: {
    width: 140,
    height: 140
  },
  smallLogo: {
    width: 88,
    height: 88
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