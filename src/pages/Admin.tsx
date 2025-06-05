import React, { useState } from 'react';
import AdminLogin from '@/components/admin/AdminLogin';
import AdminDashboard from '@/components/admin/AdminDashboard';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {!isLoggedIn ? (
          <AdminLogin onLogin={() => setIsLoggedIn(true)} />
        ) : (
          <AdminDashboard onLogout={() => setIsLoggedIn(false)} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Admin;
