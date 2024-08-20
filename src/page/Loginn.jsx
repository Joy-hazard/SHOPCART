import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';

const Loginn = () => {
    return (
        <>
            <div className='mt-3'> 
                <Container>
                    <Navbar expand="lg" className="bg-body-tertiary">
                        <Container>
                            <Navbar.Brand href="#">SHOPCART</Navbar.Brand>
                        </Container>
                    </Navbar>
                </Container>
            </div>
            <div>
                <MDBContainer className="p-3 my-5 mt-5 d-flex flex-column w-50">
                    <h2 className='d-flex align-items-center justify-content-center mt-5 mb-5'>Login</h2>

                    <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' />
                    <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />

                    <div className="d-flex justify-content-between mx-3 mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                        <a href="!#">Forgot password?</a>
                    </div>

                    <MDBBtn className="mb-1" href='/'>Sign in</MDBBtn>

                    <div className="text-center">
                        <p>Not a member? <a href="/create-account">Register</a></p>
                    </div>

                </MDBContainer>

            </div>


        </>
    )
}

export default Loginn