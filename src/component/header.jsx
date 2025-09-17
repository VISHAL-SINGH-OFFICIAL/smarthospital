import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const topBarStyle = {
  background: '#222d32',
  color: '#fff',
  fontSize: '0.95rem',
  padding: '8px 0',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '32px',
  letterSpacing: '0.5px',
  width: '100vw',
  minWidth: '100%',
  boxSizing: 'border-box',
};

const headerStyle = {
  background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
  color: '#fff',
  fontFamily: 'Segoe UI, Arial, sans-serif',
  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
  borderRadius: '0 0 24px 24px',
  width: '100vw',
  minWidth: '100%',
  height: '100vh', // Full viewport height
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
};

const navBarStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 48px',
  maxWidth: '1600px',
  margin: '0 auto',
  width: '100%',
  boxSizing: 'border-box',
  flex: 1, // Take all available vertical space
};

const logoStyle = {
  fontWeight: 700,
  fontSize: '2.2rem',
  letterSpacing: '2px',
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
};

const navLinksStyle = {
  display: 'flex',
  gap: '36px',
};

const linkStyle = (active) => ({
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1.15rem',
  fontWeight: 500,
  padding: '10px 22px',
  borderRadius: '10px',
  background: active ? 'rgba(255,255,255,0.18)' : 'none',
  transition: 'background 0.2s, color 0.2s',
  letterSpacing: '0.5px',
});

const userMenuStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '18px',
};

const avatarStyle = {
  width: '38px',
  height: '38px',
  borderRadius: '50%',
  background: '#fff',
  color: '#185a9d',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 700,
  fontSize: '1.2rem',
  boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
};

const Header = () => {
  const location = useLocation();

  return (
    <>
      {/* Top Bar */}
      <div style={topBarStyle}>
        <span>📞 +1 234 567 890</span>
        <span>✉️ info@smarthospital.com</span>
        <span>
          <Link to="/login" style={{ color: '#fff', textDecoration: 'underline' }}>Login</Link>
        </span>
      </div>
      {/* Main Navbar */}
      <header style={headerStyle}>
        <nav style={navBarStyle}>
          <div style={logoStyle}>
            <span role="img" aria-label="hospital">🏥</span>
            SmartHospital
          </div>
          <div style={navLinksStyle}>
            <Link
              to="/dashboard"
              style={linkStyle(location.pathname === '/dashboard')}
            >
              Dashboard
            </Link>
            <Link
              to="/patients"
              style={linkStyle(location.pathname === '/patients')}
            >
              Patients
            </Link>
            <Link
              to="/appointments"
              style={linkStyle(location.pathname === '/appointments')}
            >
              Appointments
            </Link>
            <Link
              to="/profile"
              style={linkStyle(location.pathname === '/profile')}
            >
              Profile
            </Link>
          </div>
          <div style={userMenuStyle}>
            <div style={avatarStyle}>A</div>
            <span>Admin</span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;