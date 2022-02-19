import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import './LatestCards.css';

const LatestCards = () => {
return (
<CardGroup className='MainCardStyle'>
  <Card className='eachCard'>
    <Card.Img variant="top" alt="First slide" src="./images/primaryabstract.png" className='imageStyle'/>
    <Card.Body>
      <Card.Title>Current Painting Projects</Card.Title>
      <Button href='/Latest'className='buttonColor' active>See latest Paintings</Button>
    </Card.Body>
  </Card>
  <Card className='eachCard'>
    <Card.Img variant="top" className='imageStyle' src="./images/purplefeathers.png"alt="second slide"/>
    <Card.Body>
      <Card.Title>My Photography</Card.Title>
      <Button href='/Latest' className='buttonColor' active>See latest shots</Button>
    </Card.Body>
  </Card>
  <Card className='eachCard'>
    <Card.Img variant="top" src="./images/rainbowboxes.png"  alt="third slide" className='imageStyle'/>
    <Card.Body>
      <Card.Title>Latest Illustrations</Card.Title>
      <Button href='/Latest' className='buttonColor' active>See latest Illustrations</Button>
    </Card.Body>
  </Card>
</CardGroup>

)

}

export default LatestCards;