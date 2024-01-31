import React from 'react';

const VoterFooter = () => {
  const footerStyle = {
    backgroundColor: '#555',
    color: '#000',
    textAlign: 'center',
    padding: '10px',
    position: 'sticky',
    bottom: '0',
    width: '100%',
    fontFamily: 'Arial, sans-serif',
    height: 'auto',
    margin: '10px',
  };

  const elementStyle = {
    fontSize: '15px',
    margin: '0px',
    color: '#aaa',
    padding: '0px'
  }

  return (
    <div>
      <div className="footer" bg="dark" style={footerStyle}>

        <h1 style={{ fontSize: '20px' }}>
          &copy;2024. Voter Registration Form. All Right Reserved
        </h1>

        <div style={{ display: 'flex', justifyContent: 'space-around' }} >
          <p style={elementStyle}>Email: info@voterregistration.org</p>
          <p style={elementStyle}>Phone: +1 (555) 123-4567</p>
          <p style={elementStyle}>Address: 123 Main Street, Cityville, USA</p>
        </div>
      </div>
    </div>
  );
};

export default VoterFooter;
