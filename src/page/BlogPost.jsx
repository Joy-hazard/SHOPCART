import React, { useState } from 'react';
import { Button, Form, Stack, Card, Container, Row, Col } from 'react-bootstrap';
import Footer from '../Component/Footerr';
import Navigation from '../Component/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogPost = () => {
    const [blogs, setBlogs] = useState([]);
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');

    const handleAddBlog = () => {
        if (name && title && details) {
            setBlogs([...blogs, { name, title, details }]);
            setName('');
            setTitle('');
            setDetails('');
        }
    };

    const handleRemoveBlog = (index) => {
        setBlogs(blogs.filter((_, i) => i !== index));
    };

    const heroSectionStyle = {
        background: 'url("your-hero-image.jpg") no-repeat center center',
        backgroundSize: 'cover',
        textAlign: 'center',
        padding: '100px 0',
        color: 'white'
    };

    const cardStyle = {
        transition: 'transform 0.2s'
    };

    const cardHoverStyle = {
        transform: 'scale(1.05)'
    };

    const buttonStyle = {
        transition: 'background-color 0.3s, transform 0.2s'
    };

    const buttonHoverStyle = {
        backgroundColor: '#ffd700',
        transform: 'scale(1.1)'
    };

    return (
        <>
            <Navigation />
            <div style={heroSectionStyle}>
                <h1>Welcome to the Blog</h1>
                <p>Share your experiences with our products</p>
            </div>
            <Container>
                <Stack direction="vertical" gap={3} className="mt-5">
                    <Form.Control 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Your Name" 
                    />
                    <Form.Control 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Blog Title" 
                    />
                    <Form.Control 
                        as="textarea"
                        rows={3}
                        value={details}
                        onChange={e => setDetails(e.target.value)}
                        placeholder="Blog Details" 
                    />
                    <Button 
                        variant="secondary" 
                        onClick={handleAddBlog} 
                        style={buttonStyle} 
                        onMouseEnter={e => e.currentTarget.style = buttonHoverStyle} 
                        onMouseLeave={e => e.currentTarget.style = buttonStyle}
                    >
                        Submit
                    </Button>
                </Stack>
                <Row className="mt-5">
                    {blogs.map((blog, idx) => (
                        <Col key={idx} sm={12} md={6} lg={4} className="mb-4">
                            <Card 
                                style={cardStyle} 
                                onMouseEnter={e => e.currentTarget.style = cardHoverStyle} 
                                onMouseLeave={e => e.currentTarget.style = cardStyle}
                            >
                                <Card.Header as="h5">{blog.name}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{blog.title}</Card.Title>
                                    <Card.Text>{blog.details}</Card.Text>
                                    <Button 
                                        variant="primary" 
                                        style={buttonStyle} 
                                        onMouseEnter={e => e.currentTarget.style = buttonHoverStyle} 
                                        onMouseLeave={e => e.currentTarget.style = buttonStyle}
                                    >
                                        View Details
                                    </Button>
                                    <Button 
                                        variant="danger" 
                                        className="mt-2" 
                                        onClick={() => handleRemoveBlog(idx)}
                                    >
                                        Remove
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default BlogPost;
