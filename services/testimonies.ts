import {
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
