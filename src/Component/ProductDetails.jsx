// src/Component/ProductDetails.jsx

import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import CartContext from './CartContext';
import Navigation from './Navigation';
import { FaCartPlus } from 'react-icons/fa';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  function handleAddToCart() {
    addToCart(product);
  }

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <Navigation />
      <Container className="mt-4">
        <Row>
          <Col md={6}>
            <Carousel>
              {product.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col md={6}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <Button variant="warning" onClick={handleAddToCart}>
              <FaCartPlus /> Add to Cart
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductDetails;
