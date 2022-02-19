import React from 'react';
import './HomeScreen.css'
import { Container } from 'react-bootstrap';
import Carous from '../components/Carousel';
import LatestCards from '../components/LatestCards';
import AboutMe from '../components/AboutMe';


const HomeScreen = () => {
    return (
        <>
        <Container fluid>
            <Carous />
            </Container>
        <LatestCards />
        <AboutMe />
            
        </>
    )
}

export default HomeScreen;