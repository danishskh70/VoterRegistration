import React from 'react'

const VoterAbout = () => {
  const aboutContainerStyle = {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '20px',
    background: 'linear-gradient(to right, #4e54c8, #8f94fb)',
    borderRadius: '10px',
    color: '#eee',
  };

  const aboutTextStyle = {
    fontSize: '18px',
    lineHeight: '1.5',
    marginBottom: '20px',
  };

  const aboutHeadStyle = {
    textAlign: 'center',
  };
  const heading = {
    backgroundColor: '#4285f4', // Your hero background color
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    margin: '10px 10px'
  }
  return (
    <div>
      <h1 className="Heading" style={heading}>About Section</h1>
      <div style={aboutContainerStyle}>
        <h1 style={aboutHeadStyle}>About Us</h1>
        <p style={aboutTextStyle}>
          Welcome to Voter Registration Form, where we believe in the power of every citizen's voice. Our mission is to empower individuals to exercise their democratic right to vote and participate actively in shaping the future of our nation.
        </p>
        <h2 style={aboutHeadStyle}>Our Mission:</h2>

        <p style={aboutTextStyle}>

          To facilitate a seamless and accessible voter registration process, ensuring that every eligible citizen can register and make their voice heard during elections.
        </p>
        <h2 style={aboutHeadStyle}> Why Voter Registration Matters:</h2>
        <p style={aboutTextStyle}>
          Voting is a fundamental right and a cornerstone of democracy. By registering to vote, you contribute to the democratic process, influence policy decisions, and play a vital role in shaping the future of your community and country.
        </p>
        <h2 style={aboutHeadStyle}>How We Work:</h2>
        <p style={aboutTextStyle}>

          We provide a user-friendly platform that guides you through the voter registration process step by step. Our goal is to make voter registration accessible to everyone, regardless of background or circumstance.
        </p>
        <h2 style={aboutHeadStyle}>Contact Us:</h2>
        <p style={aboutTextStyle}>

          Have questions or need assistance? Feel free to reach out to our support team at info@voterregistration.org or call us at +1 (555) 123-4567.
        </p>
        <p style={aboutTextStyle}>
          Thank you for joining us in the journey to strengthen democracy through voter registration. Together, we can make a difference!
        </p>
      </div>
    </div>
  )
}

export default VoterAbout
