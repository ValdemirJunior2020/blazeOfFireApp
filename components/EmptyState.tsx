// File: components/EmptyState.tsx
<<<<<<< HEAD
import React from "react";
import { Text, View } from "react-native";

 type Props = {
=======

import React from "react";
import { Text, View } from "react-native";

type Props = {
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
  title: string;
  message: string;
};

export default function EmptyState({ title, message }: Props) {
  return (
<<<<<<< HEAD
    <View
      style={{
        backgroundColor: "#171717",
        borderRadius: 24,
        padding: 20,
        borderWidth: 1,
        borderColor: "#2A2A2A"
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
        {title}
      </Text>
      <Text style={{ color: "#FFFFFF", lineHeight: 24 }}>{message}</Text>
    </View>
  );
}
=======
    <View className="bg-bofCharcoal rounded-3xl p-5 border border-[#2a2a2a]">
      <Text className="text-bofGold text-lg font-bold mb-2">{title}</Text>
      <Text className="text-white leading-6">{message}</Text>
    </View>
  );
}
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
