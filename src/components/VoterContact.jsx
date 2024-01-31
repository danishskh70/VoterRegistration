
import React from 'react'
import Form from 'react-bootstrap/Form';
import { Button, Card, Accordion, Badge } from 'react-bootstrap';
import Logo from './logolorem.jpeg'
const VoterContact = () => {
  const AccordStyle = {
    maxWidth: '550px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid black',
    borderRadius: '5px',
    textAlign: 'center',
  }
  const BodyStyle = {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid black',
    borderRadius: '5px',
    textAlign: 'center'
  }
  const heading = {
    backgroundColor: '#4285f4',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    margin: '10px 10px'
  }

  return (
    <>
      <h1 className="Heading" style={heading}>Contact Section</h1>
      <div className="allbody" style={BodyStyle}>
        <div style={{ alignItems: 'center' }}>
          <Card style={{ width: '20rem', margin: 'auto', height: '600px' }}>
            <Card.Img variant="left" src={Logo} />
            <Card.Body>
              <Card.Title><h1>Contact Info :</h1></Card.Title>
              <Card.Text>
                <br />
                <p><b>Email:</b> info@voterregistration.org</p>
                <p><b>Phone:</b> +1 (555) 123-4567</p>
                <p><b>Address:</b> 123 Main Street, Cityville, USA</p>
              </Card.Text>
              <Button variant="primary">Check Here</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="accord bg-secondary" style={AccordStyle}>
          <h3>Fill The Form Here</h3>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header style={{ textAlign: 'center' }}>Enter
                your Details  </Accordion.Header>
              <Accordion.Body>
                <div>
                  <Form>
                    <Form.Group controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" required />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter your email" required />
                    </Form.Group>

                    <Form.Group controlId="formPhone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="tel" placeholder="Enter your phone number" required />
                    </Form.Group>

                    <Form.Group controlId="formAddress">
                      <Form.Label>Address</Form.Label>
                      <Form.Control as="textarea" rows={1} placeholder="Enter your address" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="soc-icon" style={{ lineHeight: '3' }}>
          <h1>Social Media</h1>
          <ul style={{ listStyle: 'none' }}>
            <li>Facebook: <a href="https://www.facebook.com/voterregistration">facebook.com/voterregistration</a></li>
            <li>Twitter: <a href="https://twitter.com/voterregorg">twitter.com/voterregorg</a></li>
            <li>Instagram: <a href="https://www.instagram.com/voterregistration">instagram.com/voterregistration</a></li>
          </ul>
        </div >
        <Badge bg="light" ><h4> <div style={{ color: '#444', fontFamily: 'Arial', backgroundColor: 'Grey', padding: '10px' }}>
          <h3 style={{ color: 'black', fontFamily: 'Times New Roman' }}>Working Hours</h3>
          <p>Our support team is available during the following hours:</p>
          <p>Monday to Friday: 9:00 AM to 5:00 PM (UTC)</p>
        </div></h4></Badge>
      </div>
    </>
  )
}

export default VoterContact
