import React from 'react'
import {Carousel} from 'react-bootstrap';

function Slider(props) {
    return (
        <section className="main-slider">
            <Carousel
                interval={4000}
                controls={false}
                indicators={false}
            >
                <Carousel.Item>
                    <img className="d-block w-100"
                        src="images/courese_10.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption style={{bottom: '60%', top: '40%'}}>
                        <h3>Как подобрать домашний уход ?</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                        src="images/courese_11.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption style={{bottom: '60%', top: '40%'}}>
                        <h3>Как нанести альгинатную маску дома?</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                        src="images/courese_12.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption style={{bottom: '60%', top: '40%'}}>
                        <h3>Как почистить кожу дома?</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default Slider
