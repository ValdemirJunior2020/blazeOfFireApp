// File: app/(tabs)/_layout.tsx
import React from "react";
import { Text } from "react-native";
import { Tabs } from "expo-router";
import { theme } from "../../constants/theme";

function TabIcon({ label, focused }: { label: string; focused: boolean }) {
  return (
    <Text
      style={{
        color: focused ? theme.colors.gold : "#8A8A8A",
        fontSize: 12,
        fontFamily: "MontserratSemiBold"
      }}
    >
      {label}
    </Text>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          backgroundColor: "transparent"
        },
        tabBarStyle: {
          backgroundColor: "#060606",
          borderTopColor: theme.colors.border,
          height: 70,
          paddingTop: 8,
          paddingBottom: 10
        },
        tabBarLabelStyle: {
          display: "none"
        },
        tabBarActiveTintColor: theme.colors.gold,
        tabBarInactiveTintColor: "#8A8A8A"
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => <TabIcon label="Home" focused={focused} />
        }}
      />
      <Tabs.Screen
        name="live"
        options={{
          title: "Live",
          tabBarIcon: ({ focused }) => <TabIcon label="Live" focused={focused} />
        }}
      />
      <Tabs.Screen
        name="prayer"
        options={{
          title: "Prayer",
          tabBarIcon: ({ focused }) => <TabIcon label="Prayer" focused={focused} />
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: "Community",
          tabBarIcon: ({ focused }) => <TabIcon label="People" focused={focused} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => <TabIcon label="Me" focused={focused} />
        }}
      />
      <Tabs.Screen
        name="giving"
        options={{
          title: "Giving",
          tabBarIcon: ({ focused }) => <TabIcon label="Giving" focused={focused} />
        }}
      />
    </Tabs>
  );
}