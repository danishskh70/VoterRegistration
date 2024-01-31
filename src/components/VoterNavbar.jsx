import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { Link } from 'react-router-dom';
import Logo from './logolorem.jpeg'

const VoterNavbar = () => {

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#"> <img src={Logo} alt="Logo" style={{ maxHeight: '80px' }} /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link ><Link to="/"><Button >Home</Button></Link>
              </Nav.Link>
              <Nav.Link ><Link to="/login"><Button>Login</Button></Link></Nav.Link>
              <Nav.Link ><Link to="/register"><Button>Register</Button></Link></Nav.Link>
              <Nav.Link ><Link to="/about"><Button>About</Button></Link></Nav.Link>
              <Nav.Link ><Link to="/contact"><Button>Contact</Button></Link></Nav.Link>
              <Nav.Link ><Link to="/logout"><Button>Logout</Button></Link></Nav.Link>


            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default VoterNavbar
