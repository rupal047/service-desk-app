// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import CreateTicketPage from './pages/CreateTicketPage';
import TicketDetailPage from './pages/TicketDetailPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import NotFoundPage from './pages/NotFoundPage'; // Optional: for 404
import PrivateRoute from './components/PrivateRoute'; // We'll create this later
import AdminRoute from './components/AdminRoute'; // We'll create this later
import { AuthProvider } from './context/AuthContext'; // We'll create this later
import { TicketProvider } from './context/TicketContext'; // We'll create this later

function App() {
  return (
    <Router>
      <AuthProvider>
        <TicketProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* For now, these are direct routes. They will be wrapped in <Layout> later */}
            <Route path="/" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
            <Route path="/create-ticket" element={<PrivateRoute><CreateTicketPage /></PrivateRoute>} />
            <Route path="/ticket/:id" element={<PrivateRoute><TicketDetailPage /></PrivateRoute>} />

            <Route path="/admin" element={<AdminRoute><AdminDashboardPage /></AdminRoute>} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </TicketProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;