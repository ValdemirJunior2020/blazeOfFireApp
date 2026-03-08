// Example usage inside any screen
// File: app/(tabs)/index.tsx

import React from "react";
import { Text, View } from "react-native";
import AppShell from "../components/AppShell";

export default function HomeScreen() {
  return (
    <AppShell>
      <View>
        <Text style={{ color: "#fff", fontSize: 22 }}>Welcome</Text>
      </View>
    </AppShell>
  );
}