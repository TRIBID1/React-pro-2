import React from 'react'
import {  Container, Row , Col } from 'react-bootstrap';
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
        <section className='promotion_section'>
            <Container>
                <Row className='align-item-center'>
                    <Col lg={6} className='text-center mb-5 mb-lg-0'>
                        <img src={PromotionImage} className='img-fluid' alt='promotion'/>
                    </Col>
                    <Col lg={6} className='px-5'>
                        <h2>Nothing brings people together like a good burger</h2>
                        <p>
                            Our burgers are made with the finest ingredients and cooked to perfection.
                             Whether you'rein the mood for a classic cheeseburger or something a little
                             more adventurous, we've got you covered.
                        </p>
                        <ul>
                            <li>
                                <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of clas
                                sical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professo
                                 at Hampden-Sydney College in V
            
                                </p>
                            </li>
                            <li>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the major
                                    ity have suffered alteration in some

                                </p>
                            </li>
                            <li>
                                <p>
                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below.
                                </p>
                            </li>
                        </ul>
                            
                    </Col>
                </Row>
            </Container>
        </section>

        {/* Bg Parallax Scroll */}
        <section className='bg_parallax_scroll'>
            
        </section>
    </>
  )
}

export default Section4