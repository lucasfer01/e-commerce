'use client';
import AdminRoute from '@/features/auth/components/route-guards/AdminRoute';

const AdminPage = () => {
  return (
    <AdminRoute>
      <div>
        <h1>Panel de Administración</h1>
        <p>Bienvenido, administrador.</p>
      </div>
    </AdminRoute>
  );
};

export default AdminPage;
