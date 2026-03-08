// File: components/SectionTitle.tsx

import React from "react";
import { Text } from "react-native";

type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return <Text className="text-bofGold text-2xl font-bold mb-4">{title}</Text>;
}