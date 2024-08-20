// src/Component/Product.jsx

import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Col, Toast, Row, Pagination } from 'react-bootstrap';
import CartContext from './CartContext';
import { FaCartPlus } from 'react-icons/fa';

function Product({ category }) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const productsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      const url = category 
        ? `https://dummyjson.com/products/category/${category}?limit=${productsPerPage}&skip=${(currentPage - 1) * productsPerPage}` 
        : `https://dummyjson.com/products?limit=${productsPerPage}&skip=${(currentPage - 1) * productsPerPage}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / productsPerPage));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category, currentPage]);

  function handleDetailsClick(product) {
    navigate(`/product-details/${product.id}`);
  }

  function handleAddToCart(product) {
    addToCart(product);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  }

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const renderPaginationItems = () => {
    const maxItems = 10;
    let startPage = Math.max(currentPage - Math.floor(maxItems / 2), 1);
    let endPage = startPage + maxItems - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxItems + 1, 1);
    }

    const pages = [];
    for (let page = startPage; page <= endPage; page++) {
      pages.push(
        <Pagination.Item 
          key={page} 
          active={page === currentPage} 
          onClick={() => handlePageChange(page)}
        >
          {page}
        </Pagination.Item>
      );
    }
    return pages;
  };

  return (
    <>
      <Row>
        {products.map(product => (
          <Col md={4} className="mb-4" key={product.id}>
            <Card className="h-100">
              <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary" onClick={() => handleDetailsClick(product)}>Product Details</Button>
                <Button variant="warning" className="ml-2" onClick={() => handleAddToCart(product)}>
                  <FaCartPlus /> Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          <Pagination.Prev 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1}
          />
          {renderPaginationItems()}
          <Pagination.Next 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
      <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide>
        <Toast.Body>Product added to cart!</Toast.Body>
      </Toast>
    </>
  );
}

export default Product;
