// src/page/Home.jsx

import React from 'react';
import Navigation from '../Component/Navigation';
import { Container, Row, Col } from 'react-bootstrap';
import Product from '../Component/Product';
import HeroSection from '../Component/HeroSection';
import Footer from '../Component/Footerr';

function Home() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <Container className="mt-4">
        <Row>
          <Col md={12}>
            <h2>Welcome to SHOPCART</h2>
          </Col>
        </Row>
        <Row className="mt-4">
          <Product category={null} />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
