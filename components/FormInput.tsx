// File: components/FormInput.tsx
<<<<<<< HEAD
import React from "react";
import { Text, TextInput, View } from "react-native";

 type Props = {
=======

import React from "react";
import { Text, TextInput, View } from "react-native";

type Props = {
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
};

export default function FormInput({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  autoCapitalize = "none"
}: Props) {
  return (
<<<<<<< HEAD
    <View style={{ marginBottom: 16 }}>
      {label ? (
        <Text
          style={{
            color: "#D4AF37",
            fontWeight: "600",
            marginBottom: 8
          }}
        >
          {label}
        </Text>
      ) : null}

      <TextInput
        style={{
          backgroundColor: "#171717",
          color: "#FFFFFF",
          borderRadius: 16,
          paddingHorizontal: 16,
          paddingVertical: 16
        }}
=======
    <View className="mb-4">
      {label ? <Text className="text-bofGold font-semibold mb-2">{label}</Text> : null}
      <TextInput
        className="bg-bofCharcoal text-white rounded-2xl px-4 py-4"
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
        placeholder={placeholder}
        placeholderTextColor="#8a8a8a"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
