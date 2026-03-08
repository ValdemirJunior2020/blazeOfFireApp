// File: app/admin/prayer-requests.tsx

import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import EmptyState from "../../components/EmptyState";
import Screen from "../../components/Screen";
import SectionTitle from "../../components/SectionTitle";
import { getPrayerRequests } from "../../services/prayerRequests";
import { PrayerRequest } from "../../types/prayer";

export default function AdminPrayerRequestsScreen() {
  const [items, setItems] = useState<PrayerRequest[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await getPrayerRequests().catch(() => []);
      setItems(data);
    };

    load().catch(() => null);
  }, []);

  return (
    <Screen>
      <SectionTitle title="Prayer Requests" />

      {items.length === 0 ? (
        <EmptyState title="No prayer requests yet" message="New requests from members will appear here." />
      ) : (
        items.map((item) => (
          <View key={item.id} className="bg-bofCharcoal rounded-3xl p-5 mb-4 border border-[#2a2a2a]">
            <Text className="text-bofGold text-lg font-bold mb-2">{item.name}</Text>
            <Text className="text-white mb-2">{item.email}</Text>
            <Text className="text-white leading-6 mb-3">{item.request}</Text>
            <Text className="text-bofGray text-xs">
              {item.isPrivate ? "PRIVATE" : "PUBLIC"} • {item.status.toUpperCase()}
            </Text>
          </View>
        ))
      )}
    </Screen>
  );
}