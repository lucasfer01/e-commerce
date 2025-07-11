'use client';

import { doc, getDoc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import { UserProfile } from "../../../types/userProfile";

export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
  try {
    const userRef = doc(db, "users", uid);
    const snapshot = await getDoc(userRef);

    if (!snapshot.exists()) return null;

    const data = snapshot.data();

    const isValid =
      typeof data.email === "string" &&
      typeof data.isAdmin === "boolean" &&
      data.createdAt instanceof Timestamp;

    if (!isValid) {
      console.warn("Perfil mal formado:", data);
      return null;
    }

    return {
      id: snapshot.id,
      email: data.email,
      isAdmin: data.isAdmin,
      createdAt: data.createdAt,
    };
  } catch (error) {
    console.error("Error al obtener perfil:", error);
    return null;
  }
};