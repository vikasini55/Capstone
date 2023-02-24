import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { Carousel } from "react-bootstrap";
import './Styles/Home.css'
import img1 from "./Images/c_img1.png"
import img2 from "./Images/c_img4.jpg"
import img3 from "./Images/c_img5.jpg"
const Home = () => {
    return (
        <div className="App">
            <div className="carousel">
            <Carousel>
                <Carousel.Item><img src= {img1}  alt="First slide"/>
                    <Carousel.Caption className="slide-text">
                        <h1>FIND YOUR DREAM JOB</h1>
                        <p>You are not limited to your city for boring jobs. You can use Top Jobs portal for suitable
                            jobs in easy way across the country.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item><img src= {img2} alt="First slide"/>
                    <Carousel.Caption className="slide-text">
                    <h1>FIND YOUR DREAM JOB</h1>
                        <p>You are not limited to your city for boring jobs. You can use Top Jobs portal for suitable
                            jobs in easy way across the country.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item><img src= {img3} alt="First slide"/>
                    <Carousel.Caption className="slide-text">
                    <h1>FIND YOUR DREAM JOB</h1>
                        <p>You are not limited to your city for boring jobs. You can use Top Jobs portal for suitable
                            jobs in easy way across the country.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
            <div className="btm-links">
                <Navbar className="Nav-items">
                    <Nav.Link as ={Link} to ="/jobs" className="link-skew">Jobs</Nav.Link>
                    <Nav.Link as ={Link} to ="/contact" className="link-skew">Contact us</Nav.Link>
                    <Nav.Link as ={Link} to ="#" className="link-skew">Coming Soon</Nav.Link>
                </Navbar> 
            </div>
        </div>          
    )
}

export default Home;