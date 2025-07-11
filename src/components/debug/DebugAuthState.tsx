'use client';

import { useAuthStore } from "@/store";

export const DebugAuthState = () => {
    const user = useAuthStore((s) => s.user);
    const profile = useAuthStore((s) => s.userProfile);
  
    return (
      <div style={{ background: "#222", color: "#0f0", padding: 10, fontSize: 14 }}>
        <h4>🔐 Debug Auth</h4>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          <strong>UID:</strong> {user?.uid ?? "No user"}
          {"\n"}
          <strong>Email:</strong> {user?.email ?? "N/A"}
          {"\n"}
          <strong>isAdmin:</strong> {String(profile?.isAdmin ?? "N/A")}
          {"\n"}
          <strong>createdAt:</strong>{" "}
          {profile?.createdAt?.toDate?.().toLocaleString?.() ?? "N/A"}
        </pre>
      </div>
    );
  };