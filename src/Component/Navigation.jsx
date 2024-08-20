import React, { useContext } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CartContext from './CartContext';
import { FaShoppingCart } from 'react-icons/fa';

function Navigation() {
  const { cart } = useContext(CartContext);

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#F4D03F', borderBottom: '2px solid #ddd' }}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand style={{ color: '#333', fontWeight: 'bold', fontSize: '1.5rem' }}>SHOPCART</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/" className="nav-link">
              <Nav.Link style={{ color: '#333', fontSize: '1.1rem', fontWeight: 'bold' }}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/products" className="nav-link">
              <Nav.Link style={{ color: '#333', fontSize: '1.1rem', fontWeight: 'bold' }}>Shop</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Categories" id="basic-nav-dropdown" style={{ color: '#333', fontSize: '1.1rem', fontWeight: 'bold' }}>
              <LinkContainer to="/category/beauty">
                <NavDropdown.Item>Beauty</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/fragrances">
                <NavDropdown.Item>Fragrances</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/furniture">
                <NavDropdown.Item>Furniture</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/groceries">
                <NavDropdown.Item>Groceries</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/blog" className="nav-link">
              <Nav.Link style={{ color: '#333', fontSize: '1.1rem', fontWeight: 'bold' }}>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" className="nav-link">
              <Nav.Link style={{ color: '#333', fontSize: '1.1rem', fontWeight: 'bold' }}>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" className="nav-link">
              <Nav.Link style={{ color: '#333', fontSize: '1.1rem', fontWeight: 'bold' }}>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="align-items-center">
            <LinkContainer to="/cart" className="nav-link">
              <Nav.Link style={{ color: '#333', fontSize: '1.1rem', fontWeight: 'bold' }}>
                <FaShoppingCart /> Cart <span className="badge bg-danger">{cart.length}</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login" className="nav-link">
              <Nav.Link style={{ color: '#333', fontSize: '1.1rem', fontWeight: 'bold' }}>Log In</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/create-account">
              <Nav.Link className="btn btn-warning text-white" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Create Account</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
