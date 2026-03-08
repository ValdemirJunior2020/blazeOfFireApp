// File: services/prayerRequests.ts

import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { PrayerRequest } from "../types/prayer";

const prayerRef = collection(db, "prayer_requests");

export async function createPrayerRequest(data: {
  userId: string;
  name: string;
  email: string;
  request: string;
  isPrivate: boolean;
}) {
  await addDoc(prayerRef, {
    ...data,
    status: "new",
    createdAt: new Date().toISOString(),
    serverCreatedAt: serverTimestamp()
  });
}

export async function getPrayerRequests(): Promise<PrayerRequest[]> {
  const q = query(prayerRef, orderBy("serverCreatedAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...(item.data() as Omit<PrayerRequest, "id">)
  }));
}