import React, { useContext } from 'react';
import { Container, Row, Col, ListGroup, Button, Card } from 'react-bootstrap';
import CartContext from './CartContext';
import Navigation from './Navigation';

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <Navigation />
      <Container className="mt-4">
        <Row>
          <Col>
            <h2 className="mb-4">Shopping Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                <ListGroup variant="flush">
                  {cart.map((item) => (
                    <ListGroup.Item key={item.cartItemId} className="mb-3 p-3 border rounded shadow-sm">
                      <Row>
                        <Col md={3}>
                          <Card.Img src={item.thumbnail} alt={item.title} className="img-fluid rounded" />
                        </Col>
                        <Col md={5}>
                          <h5 className="mt-3">{item.title}</h5>
                          <p className="text-muted">${item.price.toFixed(2)}</p>
                        </Col>
                        <Col md={4} className="d-flex align-items-center justify-content-end">
                          <Button variant="danger" onClick={() => removeFromCart(item.cartItemId)}>Remove</Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <Card className="mt-4 p-3 text-right shadow-sm">
                  <Card.Body>
                    <Card.Title>Total Price</Card.Title>
                    <Card.Text className="font-weight-bold" style={{ fontSize: '1.5rem' }}>
                      ${totalPrice.toFixed(2)}
                    </Card.Text>
                   
                  </Card.Body>
                </Card>
              </>
            )}
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .card-title {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
        }
        .card-text {
          font-size: 1.5rem;
        }
        .cart-empty {
          text-align: center;
          font-size: 1.25rem;
          color: #888;
        }
      `}</style>
    </div>
  );
}

export default Cart;
