import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react'

const VoterForm = () => {

const bodyStyle={
   maxWidth: '800px',
    margin: '50px auto',
    padding: '20px',
  border:'1px solid black',
  borderRadius:'5px',
}

const heading={
  backgroundColor: '#4285f4', // Your hero background color
  color: '#fff',
  padding: '35px',
  textAlign: 'center',
  margin:'10px 10px'
}

  return (
<>
    <h1 className="Heading" style={heading}>Login Form</h1>
    <div style={bodyStyle}>
    <Form className='bg-secondary.bg-gradient bg-opacity-50 '>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> 
    </div>
    </>
  )
}

export default VoterForm
