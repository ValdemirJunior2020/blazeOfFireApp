// File: app/admin/prayer-requests.tsx
import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import AppShell from "../../components/AppShell";
import BrandHeader from "../../components/BrandHeader";
import { theme } from "../../constants/theme";

type PrayerRequest = {
  id: string;
  name?: string;
  message?: string;
};

export default function AdminPrayerRequestsScreen() {
  const router = useRouter();

  const data: PrayerRequest[] = [];

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right", "bottom"]}>
      <AppShell>
        <View style={styles.container}>
          <BrandHeader size="sm" />

          <View style={styles.card}>
            <Text style={styles.title}>ADMIN PRAYER REQUESTS</Text>

            {data.length === 0 ? (
              <Text style={styles.emptyText}>No prayer requests yet.</Text>
            ) : (
              <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                  <View style={styles.requestCard}>
                    <Text style={styles.requestName}>{item.name || "Anonymous"}</Text>
                    <Text style={styles.requestMessage}>{item.message || ""}</Text>
                  </View>
                )}
              />
            )}
          </View>
        </View>
      </AppShell>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
  container: {
    flex: 1,
    paddingBottom: 110
  },
  card: {
    backgroundColor: "rgba(17,17,17,0.92)",
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 24,
    padding: 20,
    marginBottom: 20
  },
  title: {
    color: theme.colors.gold,
    fontFamily: "CinzelBold",
    fontSize: 24,
    marginBottom: 18
  },
  emptyText: {
    color: theme.colors.text,
    fontFamily: "MontserratMedium",
    fontSize: 16
  },
  listContent: {
    paddingBottom: 120
  },
  requestCard: {
    backgroundColor: theme.colors.cardSoft,
    borderRadius: 18,
    padding: 16,
    marginBottom: 12
  },
  requestName: {
    color: theme.colors.gold,
    fontFamily: "MontserratBold",
    fontSize: 16,
    marginBottom: 6
  },
  requestMessage: {
    color: theme.colors.text,
    fontFamily: "MontserratMedium",
    fontSize: 14,
    lineHeight: 22
  }
});