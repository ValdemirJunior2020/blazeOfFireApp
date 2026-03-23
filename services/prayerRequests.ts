import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../lib/firebase";

export type PrayerRequest = {
  id: string;
  userId: string;
  name: string;
  email: string;
  request: string;
  isPrivate: boolean;
  status: string;
  createdAt: string;
};

const COLLECTION_NAME = "prayer_requests";

type CreatePrayerRequestInput = {
  userId: string;
  name: string;
  email: string;
  request: string;
  isPrivate: boolean;
};

function mapDate(value: any): string {
  if (!value) return new Date().toISOString();
  if (typeof value === "string") return value;
  if (typeof value?.toDate === "function") return value.toDate().toISOString();
  return new Date().toISOString();
}

export async function createPrayerRequest(input: CreatePrayerRequestInput) {
  await addDoc(collection(db, COLLECTION_NAME), {
    userId: input.userId,
    name: input.name,
    email: input.email,
    request: input.request,
    isPrivate: Boolean(input.isPrivate),
    status: "new",
    createdAt: new Date().toISOString(),
    serverCreatedAt: serverTimestamp(),
  });
}

export function subscribeToPrayerRequests(
  callback: (items: PrayerRequest[]) => void
) {
  const q = query(
    collection(db, COLLECTION_NAME),
    orderBy("serverCreatedAt", "desc")
  );

  return onSnapshot(q, (snapshot) => {
    const items: PrayerRequest[] = snapshot.docs.map((item) => {
      const data = item.data() as any;

      return {
        id: item.id,
        userId: data.userId || "",
        name: data.name || "Unknown",
        email: data.email || "",
        request: data.request || "",
        isPrivate: Boolean(data.isPrivate),
        status: data.status || "new",
        createdAt: mapDate(data.serverCreatedAt || data.createdAt),
      };
    });

    callback(items);
  });
}

export async function markPrayerRequestAsPrayed(id: string) {
  await updateDoc(doc(db, COLLECTION_NAME, id), {
    status: "completed",
    prayedAt: new Date().toISOString(),
    serverPrayedAt: serverTimestamp(),
  });
}

export async function deletePrayerRequest(id: string) {
  await deleteDoc(doc(db, COLLECTION_NAME, id));
}
