import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Shield, Lock, User } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
}

const AdminLogin = ({ onLogin }: AdminLoginProps) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo login - in real app would validate against backend
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      onLogin();
    } else {
      alert('Invalid credentials. Use admin/admin for demo.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md border-stellar-200">
        <CardHeader className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-stellar-600 to-stellar-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-stellar-800">Admin Access</CardTitle>
          <p className="text-stellar-600">Secure login to THE STELLAR dashboard</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-stellar-700">Username</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stellar-400 w-4 h-4" />
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter username"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  className="pl-10 border-stellar-200 focus:border-stellar-500"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-stellar-700">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stellar-400 w-4 h-4" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="pl-10 border-stellar-200 focus:border-stellar-500"
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full bg-stellar-600 hover:bg-stellar-700">
              Login to Dashboard
            </Button>
          </form>
          <div className="mt-4 p-3 bg-stellar-50 rounded-md">
            <p className="text-sm text-stellar-600">
              <strong>Demo credentials:</strong><br />
              Username: admin<br />
              Password: admin
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
