// File: components/FormInput.tsx

import React from "react";
import { Text, TextInput, View } from "react-native";

type Props = {
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
    <View className="mb-4">
      {label ? <Text className="text-bofGold font-semibold mb-2">{label}</Text> : null}
      <TextInput
        className="bg-bofCharcoal text-white rounded-2xl px-4 py-4"
        placeholder={placeholder}
        placeholderTextColor="#8a8a8a"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
}