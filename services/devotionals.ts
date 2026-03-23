<<<<<<< HEAD
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../lib/firebase";

type CreateDevotionalInput = {
  title: string;
  verse: string;
  message: string;
  author?: string;
};

export async function createDevotional(input: CreateDevotionalInput) {
  await addDoc(collection(db, "devotionals"), {
    title: input.title || "",
    verse: input.verse || "",
    message: input.message || "",
    author: input.author || "",
    createdAt: new Date().toISOString(),
    serverCreatedAt: serverTimestamp(),
  });
}
=======
// File: services/devotionals.ts

import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { Devotional } from "../types/devotional";

const devotionalsRef = collection(db, "daily_devotionals");

export async function createDevotional(data: {
  title: string;
  verse: string;
  reference: string;
  message: string;
  language: "en" | "pt" | "both";
  createdBy?: string;
}) {
  await addDoc(devotionalsRef, {
    ...data,
    createdAt: new Date().toISOString(),
    serverCreatedAt: serverTimestamp()
  });
}

export async function getLatestDevotional(): Promise<Devotional | null> {
  const q = query(devotionalsRef, orderBy("serverCreatedAt", "desc"), limit(1));
  const snapshot = await getDocs(q);

  if (snapshot.empty) return null;

  const first = snapshot.docs[0];
  return {
    id: first.id,
    ...(first.data() as Omit<Devotional, "id">)
  };
}
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
