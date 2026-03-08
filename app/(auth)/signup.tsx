// File: app/(auth)/signup.tsx

import React, { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import { Link, router } from "expo-router";
import BrandHeader from "../../components/BrandHeader";
import GoldButton from "../../components/GoldButton";
import AppShell from "../../components/AppShell";
import { useAuth } from "../../context/AuthContext";
import { theme } from "../../constants/theme";

export default function SignupScreen() {
  const { signup } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await signup(name.trim(), email.trim(), password);
      router.replace("/home");
    } catch (error: any) {
      Alert.alert("Signup failed", error?.message || "Could not create account.");
    }
  };

  return (
    <AppShell>
      <BrandHeader />

      <View
        style={{
          backgroundColor: theme.colors.card,
          borderWidth: 1,
          borderColor: theme.colors.border,
          borderRadius: 24,
          padding: 20
        }}
      >
        <Text style={{ color: theme.colors.gold, fontFamily: "CinzelBold", fontSize: 24, textAlign: "center", marginBottom: 18 }}>
          Create Account
        </Text>

        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#8a8a8a"
          value={name}
          onChangeText={setName}
          style={{
            backgroundColor: theme.colors.cardSoft,
            color: theme.colors.text,
            borderRadius: 16,
            padding: 14,
            marginBottom: 12,
            fontFamily: "MontserratMedium"
          }}
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor="#8a8a8a"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          style={{
            backgroundColor: theme.colors.cardSoft,
            color: theme.colors.text,
            borderRadius: 16,
            padding: 14,
            marginBottom: 12,
            fontFamily: "MontserratMedium"
          }}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#8a8a8a"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
          style={{
            backgroundColor: theme.colors.cardSoft,
            color: theme.colors.text,
            borderRadius: 16,
            padding: 14,
            marginBottom: 14,
            fontFamily: "MontserratMedium"
          }}
        />

        <GoldButton title="Create Account" onPress={handleSignup} />

        <Link
          href="/login"
          style={{
            color: theme.colors.gold,
            textAlign: "center",
            marginTop: 14,
            fontFamily: "MontserratSemiBold"
          }}
        >
          Back to login
        </Link>
      </View>
    </AppShell>
  );
}