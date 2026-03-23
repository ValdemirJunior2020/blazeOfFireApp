// File: components/SectionTitle.tsx
<<<<<<< HEAD
import React from "react";
import { Text } from "react-native";

 type Props = {
=======

import React from "react";
import { Text } from "react-native";

type Props = {
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
  title: string;
};

export default function SectionTitle({ title }: Props) {
<<<<<<< HEAD
  return (
    <Text
      style={{
        color: "#D4AF37",
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 16
      }}
    >
      {title}
    </Text>
  );
}
=======
  return <Text className="text-bofGold text-2xl font-bold mb-4">{title}</Text>;
}
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
