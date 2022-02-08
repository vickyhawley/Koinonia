import React from 'react';
import './HomeScreen.css'
import { Row, Container } from 'react-bootstrap';
import Carous from '../components/Carousel';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'


const HomeScreen = () => {
    return (
        <>
        <Container fluid><Carous /></Container>
            <Row className='LatestStyle'>
            <CardGroup className='MainCardStyle'>
  <Card className='eachCard'>
    <Card.Img variant="top" src="./imageshome/primaryabstract.png" className='imageStyle'/>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className='eachCard'>
    <Card.Img variant="top" src="../imageshome/rainbowboxes.png" className='imageStyle'/>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className='eachCard'>
    <Card.Img variant="top" src="./imageshome/purplefeathers.png" className='imageStyle'/>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
            </Row>
            
        </>
    )
}

export default HomeScreen;