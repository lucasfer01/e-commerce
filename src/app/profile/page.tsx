// src/app/mi-cuenta/page.tsx
import ProtectedRoute from "@/features/auth/components/route-guards/ProtectedRoute";

export default function MiCuentaPage() {
  return (
    <ProtectedRoute>
      <h1>Mi cuenta</h1>
      {/* contenido privado */}
    </ProtectedRoute>
  );
}
