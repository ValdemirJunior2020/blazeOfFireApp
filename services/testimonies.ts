<<<<<<< HEAD
﻿import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../lib/firebase";

type SubmitTestimonyInput = {
  name: string;
  title: string;
  message: string;
  email?: string;
  userId?: string;
};

export async function submitTestimony(input: SubmitTestimonyInput) {
  await addDoc(collection(db, "testimonies"), {
    name: input.name || "",
    title: input.title || "",
    message: input.message || "",
    email: input.email || "",
    userId: input.userId || "",
    status: "pending",
    createdAt: new Date().toISOString(),
    serverCreatedAt: serverTimestamp(),
  });
}
=======
// File: services/testimonies.ts

import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  where
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { Testimony } from "../types/testimony";

const testimoniesRef = collection(db, "testimonies");

export async function submitTestimony(data: {
  userId: string;
  name: string;
  title: string;
  message: string;
}) {
  await addDoc(testimoniesRef, {
    ...data,
    approved: false,
    createdAt: new Date().toISOString(),
    serverCreatedAt: serverTimestamp()
  });
}

export async function getApprovedTestimonies(): Promise<Testimony[]> {
  const q = query(
    testimoniesRef,
    where("approved", "==", true),
    orderBy("serverCreatedAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...(item.data() as Omit<Testimony, "id">)
  }));
}
>>>>>>> 78d4e7092de9e2bce0e449aaf6871982fb15925b
