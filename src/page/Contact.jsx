import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBValidation, MDBValidationItem, MDBTextArea } from 'mdb-react-ui-kit';
import Navigation from '../Component/Navigation';
import Footerr from '../Component/Footerr';

function Contact() {
    return (
        <>
            <Navigation />
            <div className='d-flex align-items-center justify-content-center'>
                <MDBValidation noValidate id='form' className='text-center mt-5 contact-form' style={{ width: '100%', maxWidth: '400px', top: '100px' }}>
                    <h2 className="mb-4">Contact us</h2>

                    <MDBValidationItem invalid feedback='Please provide your name.'>
                        <MDBInput label='Name' v-model='name' wrapperClass='mt-4' required />
                    </MDBValidationItem>

                    <MDBValidationItem invalid feedback='Please provide your email.'>
                        <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mt-4' required />
                    </MDBValidationItem>

                    <MDBValidationItem invalid feedback='Please provide mail subject.'>
                        <MDBInput label='Subject' v-model='subject' wrapperClass='mt-4' required />
                    </MDBValidationItem>

                    <MDBValidationItem invalid feedback='Please provide a message text.'>
                        <MDBTextArea wrapperClass='mb-4' label='Message' required />
                    </MDBValidationItem>

                    <MDBValidationItem feedback=''>
                        <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />
                    </MDBValidationItem>

                    <MDBBtn type='submit' color='primary' block className='my-4'>
                        Send
                    </MDBBtn>
                </MDBValidation>
            </div>
            <Footerr />
            <style jsx>{`
                .contact-form {
                    border: 1px solid #ccc;
                    border-radius: 10px;
                    padding: 20px;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                }
                h2 {
                    color: #333;
                }
            `}</style>
        </>
    )
}

export default Contact;
