// File: services/prayerRequests.ts
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { ADMIN_EMAIL } from "../constants/admin";

export type PrayerRequest = {
  id: string;
  userId: string;
  name: string;
  email: string;
  request: string;
  isPrivate: boolean;
  status?: "new" | "praying" | "completed";
  createdAt?: string;
  serverCreatedAt?: unknown;
  adminEmail?: string;
};

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
    adminEmail: ADMIN_EMAIL,
    createdAt: new Date().toISOString(),
    serverCreatedAt: serverTimestamp()
  });
}

export function subscribeToPrayerRequests(
  callback: (items: PrayerRequest[]) => void
) {
  const q = query(prayerRef, orderBy("serverCreatedAt", "desc"));

  return onSnapshot(q, (snapshot) => {
    const items: PrayerRequest[] = snapshot.docs.map((item) => ({
      id: item.id,
      ...(item.data() as Omit<PrayerRequest, "id">)
    }));

    callback(items);
  });
}

export async function markPrayerRequestAsPrayed(id: string) {
  await updateDoc(doc(db, "prayer_requests", id), {
    status: "completed"
  });
}

export async function deletePrayerRequest(id: string) {
  await deleteDoc(doc(db, "prayer_requests", id));
}