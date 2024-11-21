import React from 'react'
import {  Container, Row , Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Section7() {
  return (
    <section className='contact_section'>
        <Container>
            <Row className='justify-content-center'>
                <Col sm={8} className='text-center'>
                    <h4>We Gurantee</h4>
                    <h2>30 Minutes Delivery</h2>
                    <p className=''>
                        Our delivery team will deliver your order within 30 minutes of receiving your order.
                        Lorem The passage experienced a surge in popularity during the 1960s when Letraset 
                        used it on their dry-transfer sheets
                    </p>
                    <Link to="/" className='btn btn_red px-4 py-2 rounded-0'>
                        CALL: 999-888-7777
                    </Link>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section7