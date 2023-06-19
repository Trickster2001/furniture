import Notes from './Notes'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'

export default function Home(props) {
  const {showAlert} = props

  return (
    <>
      <div>
      {/* <Notes showAlert={showAlert}/> */}
      <div className="row">
           <div className="col-sm-12 col-md-12">

          
          <div>
           <Carousel style={{width: "50vw", margin:'auto'}}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.whiteteak.com/media/fishpig/webp/catalog/product/cache/4f9684b790a78d2ad48602ec5021b7a8/d/c/dc16-10012_14_.webp"
                  alt="First slide"
                  height={"400px"}
                />
                <Carousel.Caption>
                  <p>SOMEONE’S WATCHING HOME DECOR</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.whiteteak.com/media/fishpig/webp/catalog/product/cache/4f9684b790a78d2ad48602ec5021b7a8/d/c/dc24-10001_5_.webp"
                  alt="Second slide"
                  height={"400px"}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.whiteteak.com/media/fishpig/webp/catalog/product/cache/4f9684b790a78d2ad48602ec5021b7a8/d/c/dc24-10003_7_.webp"
                  alt="Third slide"
                  height={"400px"}
                />
        
                <Carousel.Caption>
                  
                  <p>
                  RIDE THE HIGH (MARBLE) HOME DÉCOR
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>


            <div> 
            <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
            <Card.Title>Super Festive Sale</Card.Title>
            <Card.Text className="text-dark">
            Get Attractive offers and discounts on Beds , Sofas , Chairs  and much more. 
            </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
            </div>


            </div>
            </div>
        </div>
    </>
  )
}
