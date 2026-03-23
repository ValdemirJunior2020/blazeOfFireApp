// File: app/admin/ministries.tsx
import React, { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, Alert, Text, View } from "react-native";
import { Redirect } from "expo-router";
import AppShell from "../../components/AppShell";
import BrandHeader from "../../components/BrandHeader";
import FormInput from "../../components/FormInput";
import GoldButton from "../../components/GoldButton";
import { theme } from "../../constants/theme";
import { useAuth } from "../../context/AuthContext";
import { isAdminEmail } from "../../constants/admin";
import { defaultMinistries, getMinistries, saveMinistries } from "../../services/churchContent";
import { MinistryItem } from "../../types/churchContent";

function emptyMinistry(index: number): MinistryItem {
  return {
    id: `ministry-${index + 1}`,
    title: "",
    subtitle: "",
    description: "",
    meetingTime: "",
    leader: "",
    contact: ""
  };
}

export default function AdminMinistriesScreen() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [items, setItems] = useState<MinistryItem[]>([emptyMinistry(0), emptyMinistry(1), emptyMinistry(2)]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getMinistries();
        const padded = [...data];
        while (padded.length < 3) {
          padded.push(emptyMinistry(padded.length));
        }
        setItems(padded.slice(0, 3));
      } catch (error: any) {
        Alert.alert("Error", error?.message || "Unable to load ministries.");
        setItems(defaultMinistries);
      } finally {
        setLoading(false);
      }
    };

    void load();
  }, []);

  const title = useMemo(() => "Manage Ministries", []);

  if (!user) {
    return <Redirect href="/login" />;
  }

  if (!isAdminEmail(user.email)) {
    return <Redirect href="/(tabs)/home" />;
  }

  const updateItem = (index: number, field: keyof MinistryItem, value: string) => {
    setItems((current) =>
      current.map((item, itemIndex) =>
        itemIndex === index
          ? {
              ...item,
              [field]: value,
              id: item.id || `ministry-${index + 1}`
            }
          : item
      )
    );
  };

  const handleSave = async () => {
    const cleaned = items
      .map((item, index) => ({
        ...item,
        id: item.id || `ministry-${index + 1}`,
        title: item.title.trim(),
        subtitle: item.subtitle.trim(),
        description: item.description.trim(),
        meetingTime: item.meetingTime.trim(),
        leader: item.leader.trim(),
        contact: item.contact.trim()
      }))
      .filter((item) => item.title && item.description);

    if (!cleaned.length) {
      Alert.alert("Missing ministries", "Please fill at least one ministry title and description.");
      return;
    }

    try {
      setSaving(true);
      await saveMinistries(cleaned, user.email || "admin");
      Alert.alert("Saved", "Ministries page updated successfully.");
    } catch (error: any) {
      Alert.alert("Error", error?.message || "Unable to save ministries.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <AppShell>
      <BrandHeader size="sm" />

      <View
        style={{
          backgroundColor: "rgba(17,17,17,0.92)",
          borderWidth: 1,
          borderColor: theme.colors.border,
          borderRadius: 24,
          padding: 20
        }}
      >
        <Text
          style={{
            color: theme.colors.gold,
            fontFamily: "CinzelBold",
            fontSize: 24,
            marginBottom: 14
          }}
        >
          {title}
        </Text>

        {loading ? (
          <ActivityIndicator size="large" color={theme.colors.gold} />
        ) : (
          <>
            {items.map((item, index) => (
              <View
                key={item.id || `ministry-box-${index}`}
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  borderWidth: 1,
                  borderColor: theme.colors.border,
                  borderRadius: 20,
                  padding: 14,
                  marginBottom: 16
                }}
              >
                <Text
                  style={{
                    color: theme.colors.gold,
                    fontFamily: "MontserratBold",
                    fontSize: 17,
                    marginBottom: 10
                  }}
                >
                  Ministry {index + 1}
                </Text>

                <FormInput label="Title" value={item.title} onChangeText={(value) => updateItem(index, "title", value)} placeholder="Youth Ministry" />
                <FormInput label="Subtitle" value={item.subtitle} onChangeText={(value) => updateItem(index, "subtitle", value)} placeholder="Helping young people grow in Christ" />
                <FormInput label="Description" value={item.description} onChangeText={(value) => updateItem(index, "description", value)} placeholder="Describe the ministry" />
                <FormInput label="Meeting Time" value={item.meetingTime} onChangeText={(value) => updateItem(index, "meetingTime", value)} placeholder="Saturday at 6:00 PM" />
                <FormInput label="Leader" value={item.leader} onChangeText={(value) => updateItem(index, "leader", value)} placeholder="Leader name" />
                <FormInput label="Contact" value={item.contact} onChangeText={(value) => updateItem(index, "contact", value)} placeholder="email@church.com" />
              </View>
            ))}

            <GoldButton title={saving ? "Saving..." : "Save Ministries"} onPress={handleSave} />
          </>
        )}
      </View>
    </AppShell>
  );
}
