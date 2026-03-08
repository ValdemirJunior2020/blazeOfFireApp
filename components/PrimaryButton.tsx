// File: components/PrimaryButton.tsx

import React from "react";
import { Pressable, Text } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  variant?: "gold" | "dark";
  disabled?: boolean;
};

export default function PrimaryButton({
  title,
  onPress,
  variant = "gold",
  disabled = false
}: Props) {
  const bg = variant === "gold" ? "bg-bofGold" : "bg-bofCharcoal";
  const textColor = variant === "gold" ? "text-black" : "text-white";

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`${bg} rounded-2xl py-4 px-4 mb-3 border border-[#2a2a2a] ${disabled ? "opacity-50" : ""}`}
    >
      <Text className={`${textColor} text-center font-bold text-base`}>{title}</Text>
    </Pressable>
  );
}