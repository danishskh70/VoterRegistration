import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>YourLogo</div>
      <nav >
        <ul style={navStyle}>
          <li>Home</li>
          <li>Register</li>
          <li>Verify</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Logout</li>
        </ul>
      </nav>
      <button style={registerButtonStyle}>Register Now</button>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#f0f0f0', // your background color
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
};

const navStyle = {

  listStyle: 'none',
  display: 'inline',

  li: {
    margin: '0 10px',
    cursor: 'pointer',
  },
};

const registerButtonStyle = {
  backgroundColor: '#4285f4', // your button color
  color: '#fff',
  padding: '8px 16px',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default Header;
