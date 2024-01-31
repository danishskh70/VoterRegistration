import React from 'react'
import { Card, Alert, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const VoterLogOut = () => {
  const heading = {
    backgroundColor: '#4285f4', // Your hero background color
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    margin: '10px 10px'
  }
  return (
    <div>
      <h1 className="Heading" style={heading}>Log Out</h1>
      <h1>This is Logout Part</h1>
      <Card>
        <Card.Header as="h5">Logout Page</Card.Header>
        <Card.Body>
          <Alert variant="success">
            You have been successfully logged out. Feel free to explore our website.
          </Alert>
          <Card.Text>
            You can go back to the home page by clicking the button below.
          </Card.Text>
          <Link to="/">
            <Button variant="primary">Go to Home</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default VoterLogOut
