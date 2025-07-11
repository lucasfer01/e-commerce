import { Timestamp } from "firebase/firestore";

export interface UserProfile {
    id: string;
    email: string;
    isAdmin: boolean;
    createdAt: Timestamp; // Importar desde 'firebase/firestore'
}
