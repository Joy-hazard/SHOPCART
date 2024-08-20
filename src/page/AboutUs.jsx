import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Navigation from '../Component/Navigation'
import Footer from '../Component/Footerr'
import Img1 from '../assets/Images/jp.jpg'
import Img2 from '../assets/Images/R.jpg'
import Img3 from '../assets/Images/T.jpg'

import Img5 from '../assets/Images/Screenshot_110.png'

const AboutUs = () => {
    return (
        <>
            <Navigation />

            <div className='d-flex align-items-center justify-content-center mt-5'>
                <h1>About Us</h1>
            </div>
            <div className="d-flex justify-content-center align-items-center vh-100">
      <Image className='mt-5 ms-5 me-5' src={Img5} fluid />
    </div>
            <div className='d-flex align-items-center justify-content-center mt-5 mb-5'>
                <Card className='ms-5 me-5' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Img1} />
                    <Card.Body>
                        <Card.Title>Joy Pal</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Contact</Button>
                    </Card.Body>
                </Card>
                <Card className='ms-5 me-5' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Img2} />
                    <Card.Body>
                        <Card.Title>Md.Ratul</Card.Title>
                        <Card.Text>
                            Master of NON?
                        </Card.Text>
                        <Button variant="primary">Contact</Button>
                    </Card.Body>
                </Card>
                <Card className='ms-5 me-5' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Img3} />
                    <Card.Body>
                        <Card.Title>Tanzid</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Contact</Button>
                    </Card.Body>
                </Card>
            </div>

            <Footer />
        </>

    )
}

export default AboutUs