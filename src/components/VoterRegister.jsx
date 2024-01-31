import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React from 'react';

const VoterRegister = () => {
  const regiBody = {
    backgroundColor: '#999',
    maxWidth: '800px',
    margin: '50px auto',
    padding: '20px',
    border: '2px solid black',
    borderRadius: '5px'
  };
  const heading = {
    backgroundColor: '#4285f4', // Your hero background color
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    margin: '10px 10px'
  };

  return (
    <>
      <h1 className="Heading" style={heading}>Registration Section</h1>
      <div className='RegiBody' style={regiBody} >
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control as="select">
                <option>Choose...</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your address" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAadharCard">
              <Form.Label>Mobile No.</Form.Label>
              <Form.Control type="text" placeholder="Enter Mobile No." />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridMobile">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your mobile number" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAge">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Enter age" />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default VoterRegister;
