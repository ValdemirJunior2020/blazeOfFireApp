// File: components/PrimaryButton.tsx
<<<<<<< HEAD
import React from "react";
import { Pressable, Text } from "react-native";

 type Props = {
=======

import React from "react";
import { Pressable, Text } from "react-native";

type Props = {
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
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
<<<<<<< HEAD
  const backgroundColor = variant === "gold" ? "#D4AF37" : "#171717";
  const textColor = variant === "gold" ? "#000000" : "#FFFFFF";
=======
  const bg = variant === "gold" ? "bg-bofGold" : "bg-bofCharcoal";
  const textColor = variant === "gold" ? "text-black" : "text-white";
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
<<<<<<< HEAD
      style={{
        backgroundColor,
        borderRadius: 16,
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#2A2A2A",
        opacity: disabled ? 0.5 : 1
      }}
    >
      <Text
        style={{
          color: textColor,
          textAlign: "center",
          fontWeight: "700",
          fontSize: 16
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}
=======
      className={`${bg} rounded-2xl py-4 px-4 mb-3 border border-[#2a2a2a] ${disabled ? "opacity-50" : ""}`}
    >
      <Text className={`${textColor} text-center font-bold text-base`}>{title}</Text>
    </Pressable>
  );
}
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
