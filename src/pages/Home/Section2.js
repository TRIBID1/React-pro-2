import React from 'react'
import {  Container, Row , Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
    {
        image: Pizza,
        title: 'Original',
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsa quod doloremque!"
        
    },
    {
        image: Salad,
        title: 'Quality Foods',
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsa quod doloremque!"
        
    },
    {
        image: Delivery,
        title: 'Fastest Delivery',
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsa quod doloremque!"
        
    },
    
];
export const Section2 = () => {
  return (
    <>
        <section className="about_section">
        <Container>
            <Row>
                <Col lg={{span: 8, offset: 2}} className='text-center'>
                    <h2>The burger tastes better when yoy eat it with your family</h2>
                    <p>Our restaurant is a place where you can enjoy a delicious meal with your loved ones
                        Our restaurant is a place where you can enjoy a delicious meal with your loved ones
                    </p>
                    <Link to="/" className='btn order_now btn_red'>
                        Explore Full Menu
                    </Link>
                </Col>
            </Row>

        </Container>
    </section>

    <section className="about_wrapper">
        <Container>
            <Row className='justify-content-md-center'>
                {mockData.map((cardData, index) =>(
                    <Col md={6} lg={4} className='mb-4 mb-lg-0' key={index}>
                        <div className="about_box text-center">
                            <div className='about_icon'>
                                <img src={cardData.image} className='img-fluid' alt="icon"/>
                            </div>
                            <h4>{cardData.title}</h4>
                            <p>{cardData.paragraph}</p>
                        </div>
                    </Col>
                ))};
            </Row>
        </Container>
    </section>
    </>
    
  )
}
