// File: components/EmptyState.tsx

import React from "react";
import { Text, View } from "react-native";

type Props = {
  title: string;
  message: string;
};

export default function EmptyState({ title, message }: Props) {
  return (
    <View className="bg-bofCharcoal rounded-3xl p-5 border border-[#2a2a2a]">
      <Text className="text-bofGold text-lg font-bold mb-2">{title}</Text>
      <Text className="text-white leading-6">{message}</Text>
    </View>
  );
}