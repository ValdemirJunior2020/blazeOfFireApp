import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../lib/firebase";

export type AnnouncementItem = {
  id: string;
  title: string;
  message: string;
  createdAt?: string;
};

type CreateAnnouncementInput = {
  title: string;
  message: string;
};

export async function createAnnouncement(input: CreateAnnouncementInput) {
  await addDoc(collection(db, "announcements"), {
    title: input.title || "",
    message: input.message || "",
    createdAt: new Date().toISOString(),
    serverCreatedAt: serverTimestamp(),
  });
}

export async function getAnnouncements(): Promise<AnnouncementItem[]> {
  const q = query(collection(db, "announcements"), orderBy("serverCreatedAt", "desc"));
  const snap = await getDocs(q);

  return snap.docs.map((item) => {
    const data = item.data() as any;

    return {
      id: item.id,
      title: data.title || "",
      message: data.message || "",
      createdAt:
        typeof data.createdAt === "string"
          ? data.createdAt
          : typeof data.serverCreatedAt?.toDate === "function"
          ? data.serverCreatedAt.toDate().toISOString()
          : new Date().toISOString(),
    };
  });
}
