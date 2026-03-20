// File: app/testimony/submit.tsx

import React, { useState } from "react";
import { Alert } from "react-native";
import { router } from "expo-router";
import FormInput from "../../components/FormInput";
import PrimaryButton from "../../components/PrimaryButton";
import Screen from "../../components/Screen";
import SectionTitle from "../../components/SectionTitle";
import { useAuth } from "../../context/AuthContext";
import { submitTestimony } from "../../services/testimonies";

export default function SubmitTestimonyScreen() {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!user) {
      Alert.alert("Login required", "Please login first.");
      return;
    }

    if (!title.trim() || !message.trim()) {
      Alert.alert("Missing fields", "Please fill title and testimony.");
      return;
    }

    try {
      await submitTestimony({
        userId: user.uid,
        name: user.displayName || "Anonymous",
        title: title.trim(),
        message: message.trim()
      });

      setTitle("");
      setMessage("");
      Alert.alert("Submitted", "Your testimony was submitted for approval.");
      router.back();
    } catch (error: any) {
      Alert.alert("Error", error.message || "Unable to submit testimony.");
    }
  };

  return (
    <Screen>
      <SectionTitle title="Submit Testimony" />
      <FormInput label="Title" value={title} onChangeText={setTitle} placeholder="My testimony title" />
      <FormInput label="Message" value={message} onChangeText={setMessage} placeholder="Share what God has done" />
      <PrimaryButton title="Submit Testimony" onPress={handleSubmit} />
    </Screen>
  );
}