// File: app/(tabs)/_layout.tsx
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../constants/theme";
import { useAuth } from "../../context/AuthContext";
import { isAdminEmail } from "../../constants/admin";

export default function TabsLayout() {
  const { user } = useAuth();
  const isAdmin = isAdminEmail(user?.email);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: {
<<<<<<< HEAD
          backgroundColor: "transparent",
=======
          backgroundColor: "transparent"
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
        },
        tabBarStyle: {
          backgroundColor: "#060606",
          borderTopColor: theme.colors.border,
          height: 72,
          paddingTop: 8,
<<<<<<< HEAD
          paddingBottom: 10,
=======
          paddingBottom: 10
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
        },
        tabBarLabelStyle: {
          fontFamily: "MontserratSemiBold",
          fontSize: 11,
<<<<<<< HEAD
          marginTop: 2,
        },
        tabBarActiveTintColor: theme.colors.gold,
        tabBarInactiveTintColor: "#8A8A8A",
=======
          marginTop: 2
        },
        tabBarActiveTintColor: theme.colors.gold,
        tabBarInactiveTintColor: "#8A8A8A"
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
<<<<<<< HEAD
          ),
=======
          )
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
        }}
      />

      <Tabs.Screen
        name="live"
        options={{
          title: "Live",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "play-circle" : "play-circle-outline"}
              size={size}
              color={color}
            />
<<<<<<< HEAD
          ),
=======
          )
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
        }}
      />

      <Tabs.Screen
        name="prayer"
        options={{
          title: "Prayer",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="hands-pray" size={size} color={color} />
<<<<<<< HEAD
          ),
=======
          )
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
        }}
      />

      <Tabs.Screen
        name="community"
        options={{
          title: "People",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              size={size}
              color={color}
            />
<<<<<<< HEAD
          ),
=======
          )
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
        }}
      />

      <Tabs.Screen
        name="admin"
        options={{
          title: "Admin",
<<<<<<< HEAD
          href: isAdmin ? "/(tabs)/admin" : null,
=======
          href: isAdmin ? "/admin" : null,
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "shield-checkmark" : "shield-checkmark-outline"}
              size={size}
              color={color}
            />
<<<<<<< HEAD
          ),
        }}
      />

      <Tabs.Screen
        name="admin-prayer-requests"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="admin-home-content"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="admin-ministries"
        options={{
          href: null,
=======
          )
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Me",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
<<<<<<< HEAD
          ),
=======
          )
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
        }}
      />

      <Tabs.Screen
        name="giving"
        options={{
          title: "Giving",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={size}
              color={color}
            />
<<<<<<< HEAD
          ),
=======
          )
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
        }}
      />
    </Tabs>
  );
}