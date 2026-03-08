// File: services/announcements.ts

import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Announcement } from "@/types/announcement";

const announcementsRef = collection(db, "announcements");

export async function createAnnouncement(data: {
  title: string;
  message: string;
  language: "en" | "pt" | "both";
  createdBy?: string;
}) {
  await addDoc(announcementsRef, {
    ...data,
    createdAt: new Date().toISOString(),
    serverCreatedAt: serverTimestamp()
  });
}

export async function getAnnouncements(): Promise<Announcement[]> {
  const q = query(announcementsRef, orderBy("serverCreatedAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Announcement, "id">)
  }));
}