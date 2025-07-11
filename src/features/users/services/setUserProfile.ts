'use client';

import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

// Create or update user profile
export const setUserProfile = async (uid: string, data: object) => {
    const userRef = doc(db, "users", uid);
    await setDoc(userRef, data, { merge: true });
  };