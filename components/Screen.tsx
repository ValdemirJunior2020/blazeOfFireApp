// File: components/Screen.tsx

import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

type Props = {
  children: React.ReactNode;
  scroll?: boolean;
};

export default function Screen({ children, scroll = true }: Props) {
  if (scroll) {
    return (
      <SafeAreaView className="flex-1 bg-bofBlack">
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          <View>{children}</View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-bofBlack">
      <View className="flex-1 p-4">{children}</View>
    </SafeAreaView>
  );
}