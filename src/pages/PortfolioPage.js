import React from 'react';
import '../../src/styles/components/pages/PortfolioPage.css';
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function PortfolioPage(props) {
    return (
        <main className="holder">
            <div className="cuadrado">
                <h2>Portfolio</h2>
                <p>Over the years we have been involved in amazing creativity, reflecting our capacity and professionalism.</p>
            </div>

{/******************************************* VIVID *****************************************/}
            <div className="container1">
                <Carousel className='size segundo'>
                    <Carousel.Item interval={10000000}>
                        <div className="d-block w-100"/>
                        <Carousel.Caption className='text1'>
                        <h3 >SAMSUNG ELECTRIC PLAYGROUND AT VIVID</h3>
                        <p>In this complex brief, the Alchemy team were required to offer a 360-degree solution, as an inclusion to Samsung’s Vivid 2019 activation & sponsorship.</p>
                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\vivid2.jpg"
                        alt="vivid 2"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\vivid1.jpg"
                        alt="vivid 2"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\vivid3.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\vivid4.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
{/******************************************* HENDRICKS *****************************************/}
                <Carousel className='size'>
                    <Carousel.Item interval={10000000}>
                        <div className="d-block w-100"/>
                        <Carousel.Caption className='text1'>
                        <h3>HENDRICK GIN ACTIVATION</h3>
                        <p>When Hendrick Gin's agency Yakusan wanted to deliver a unique consumer experience at one of Sydney's premier site's “Circular Key” it allowed our team to use all elements of Alchemy’s services combining CNC routing, digital printing, Paint Dept, Styling and traditional carpentry.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\hendricks02.jpg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item  interval={500}>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\hendricks03.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item  interval={500}>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\hendricks04.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item  interval={500}> 
                        <img
                        className="d-block w-100"
                        src="images\portfolio\hendricks06.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
{/*******************************************CONEJO*****************************************/}                
                <Carousel className='size segundo'>
                    <Carousel.Item interval={10000000}>
                        <div className="d-block w-100"/>
                        <Carousel.Caption className='text1'>
                        <h3>CITY OF SYDNEY</h3>
                        <h3>YEAR OF THE RABBIT</h3>
                        <p>To celebrate the Year of the Rabbit, our team was tasked by the City of Sydney to produce a series of life size illuminated figures to be displayed in public spaces outside Customs House and in Martin Place.
                            Oversized traditional icons were handcrafted to embody the spirit of the event so as to bring life to key CBD locations.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\conejo1.jpg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item  interval={500}>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\conejo2.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\conejo3.jpg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item  interval={500}>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\conejo4.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    </Carousel>
{/******************************************* YOUTUBE *****************************************/}
                <Carousel className='size'>
                    <Carousel.Item interval={10000000}>
                        <div className="d-block w-100"/>
                        <Carousel.Caption className='text1'>
                        <h3>YOUTUBE MUSIC</h3>
                        <p>Creating a grand entrance was YouTubes goal with two custom arches for an industry music channel launch, managed carefully by their agency Sense.
                            stom plinths played an important role to display usable services on devices being showcased.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\youtube02.jpg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\youtube03.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\youtube01.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\youtube05.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </main>
    );
}

export default PortfolioPage;
