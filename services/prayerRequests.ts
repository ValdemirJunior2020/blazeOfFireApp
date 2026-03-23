<<<<<<< HEAD
=======
// File: services/prayerRequests.ts
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
<<<<<<< HEAD
  updateDoc,
} from "firebase/firestore";
import { db } from "../lib/firebase";
=======
  updateDoc
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { ADMIN_EMAIL } from "../constants/admin";
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b

export type PrayerRequest = {
  id: string;
  userId: string;
  name: string;
  email: string;
  request: string;
  isPrivate: boolean;
<<<<<<< HEAD
  status: string;
  createdAt: string;
};

const COLLECTION_NAME = "prayer_requests";

type CreatePrayerRequestInput = {
=======
  status?: "new" | "praying" | "completed";
  createdAt?: string;
  serverCreatedAt?: unknown;
  adminEmail?: string;
};

const prayerRef = collection(db, "prayer_requests");

export async function createPrayerRequest(data: {
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
  userId: string;
  name: string;
  email: string;
  request: string;
  isPrivate: boolean;
<<<<<<< HEAD
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
=======
}) {
  await addDoc(prayerRef, {
    ...data,
    status: "new",
    adminEmail: ADMIN_EMAIL,
    createdAt: new Date().toISOString(),
    serverCreatedAt: serverTimestamp()
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
  });
}

export function subscribeToPrayerRequests(
  callback: (items: PrayerRequest[]) => void
) {
<<<<<<< HEAD
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
=======
  const q = query(prayerRef, orderBy("serverCreatedAt", "desc"));

  return onSnapshot(q, (snapshot) => {
    const items: PrayerRequest[] = snapshot.docs.map((item) => ({
      id: item.id,
      ...(item.data() as Omit<PrayerRequest, "id">)
    }));
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b

    callback(items);
  });
}

export async function markPrayerRequestAsPrayed(id: string) {
<<<<<<< HEAD
  await updateDoc(doc(db, COLLECTION_NAME, id), {
    status: "completed",
    prayedAt: new Date().toISOString(),
    serverPrayedAt: serverTimestamp(),
=======
  await updateDoc(doc(db, "prayer_requests", id), {
    status: "completed"
  });
}

export async function markPrayerRequestAsPraying(id: string) {
  await updateDoc(doc(db, "prayer_requests", id), {
    status: "praying"
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
  });
}

export async function deletePrayerRequest(id: string) {
<<<<<<< HEAD
  await deleteDoc(doc(db, COLLECTION_NAME, id));
}
=======
  await deleteDoc(doc(db, "prayer_requests", id));
}
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
