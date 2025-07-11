"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerWithEmail } from "../services/firebaseAuthService";
import { setUserProfile } from "@/features/users/services/setUserProfile";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const userCredential = await registerWithEmail(email, password);

      const user = userCredential.user;

      await setUserProfile(user.uid, {
        email: user.email,
        isAdmin, // ⬅️ dinámico según el checkbox
        createdAt: new Date(),
      });

      router.push("/admin");
    } catch (error) {
      if (typeof error === "object" && error !== null && "message" in error) {
        setErrorMsg(error.message as string);
      } else {
        setErrorMsg("Error desconocido al registrar");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <label style={{ display: "block", marginTop: "1rem" }}>
        <input
          type="checkbox"
          checked={isAdmin}
          onChange={(e) => setIsAdmin(e.target.checked)}
        />
        ¿Es administrador?
      </label>
      <button type="submit" disabled={loading}>
        {loading ? "Registrando..." : "Registrarse"}
      </button>

      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
    </form>
  );
};

export default RegisterForm;
