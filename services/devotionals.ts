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
