// src/page/Products.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../Component/Navigation';
import { Container, Row } from 'react-bootstrap';
import Product from '../Component/Product';
import Footer from '../Component/Footerr';

function Products() {
  const { category } = useParams();

  return (
    <div>
      <Navigation />
      <Container className="mt-4">
        <Row>
          <h2>Products</h2>
        </Row>
        <Row className="mt-4">
          <Product category={category} />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Products;
