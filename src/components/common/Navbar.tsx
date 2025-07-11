"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase/firebase";
import { signOut, User } from "firebase/auth";
import { useCartSummary } from "@/hooks/useCartSummary";

const Navbar = () => {
  const { itemCount } = useCartSummary();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => setUser(u));
    return () => unsubscribe();
  }, []);

  return (
    <nav style={{ padding: "1rem", background: "#f0f0f0" }}>
      <Link href="/">Home</Link> |{" "}
      <Link href="/cart">Carrito ({itemCount})</Link> |{" "}
      <Link href="/admin">Admin</Link> |{" "}
      <Link href="/profile">Profile</Link> |{" "}
      
      {user ? (
        <>
          <span style={{ marginRight: "1rem" }}>
            {user.isAnonymous ? "Invitado" : user.email}
          </span>
          <button onClick={() => signOut(auth)}>Logout</button>
        </>
      ) : (
        <>
          <Link href="/login">Login</Link> |{" "}
          <Link href="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
