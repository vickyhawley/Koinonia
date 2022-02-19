import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footerStyle'>
            <Container>
                <Row>
                    <Col className='footerLinks'>
                    <a className='linkColor' href='/AboutMe'>About</a>
                    <a className='linkColor' href='#'>Donate</a>
                    <a className='linkColor' href='#'>Contact</a>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center textStyle py-3'>
                        Copyright &copy; JoFrenkel 2022
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer