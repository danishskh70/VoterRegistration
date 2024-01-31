import React from 'react';

const Home = () => {
  return (
    <div style={{ height: "540px" }}>
      <section style={heroStyle}>
        <h1>Register to Vote Today!</h1>
        <p>Empowering citizens to participate in democracy.</p>
        <button style={getStartedButtonStyle}>Get Started</button>
      </section>
      <section style={infoSectionStyle}>
        <div>
          <h2>Voter Eligibility</h2>
          <p>Learn who is eligible to vote and exercise their democratic rights.</p>
        </div>
        <div>
          <h2>Upcoming Elections</h2>
          <p>Check the next election date and register before the deadline.</p>
        </div>
      </section>

    </div>
  );
};

const heroStyle = {
  backgroundColor: '#4285f4',
  margin: '10px',
  color: '#fff',
  padding: '40px',
  textAlign: 'center',
};

const getStartedButtonStyle = {
  backgroundColor: '#fff',
  color: '#4285f4',
  padding: '10px 20px',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
};

const infoSectionStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '40px',
  borderBottom: '1px solid #ddd',
};



export default Home;
