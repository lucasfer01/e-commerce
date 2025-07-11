'use client';

import { useAuthStore } from "@/store";

export const DebugZustandStore = () => {
    const store = useAuthStore();
  console.log('============ STORE ===========', store)
    return (
      <div style={{ background: "#333", color: "#fff", padding: 10, fontSize: 12 }}>
        <h4>🧠 Zustand Store</h4>
        <pre>{JSON.stringify(store, null, 2)}</pre>
      </div>
    );
  };
  