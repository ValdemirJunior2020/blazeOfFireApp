// File: app/admin/index.tsx
import React from "react";
import { Redirect } from "expo-router";

export default function AdminIndexScreen() {
  return <Redirect href="/admin/prayer-requests" />;
}
