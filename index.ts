// File: app/index.tsx

import React from "react";
import { Redirect } from "expo-router";

export default function IndexScreen() {
  return <Redirect href="/home" />;
}