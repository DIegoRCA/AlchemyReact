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


            <div className="container1">
            
           
                <Carousel className='size segundo'>
                    <Carousel.Item interval={2000}>
                        <div
                        className="d-block w-100"
                       
                        />
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
                        <Carousel.Caption>
                       
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\vivid3.jpeg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                       
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\vivid4.jpeg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                      
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                
                <Carousel className='size'>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\hendricks01.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption className='text'>
                        <h3>HENDRICK GIN ACTIVATION</h3>
                        <p>When Hendrick Gin’s agency Yakusan wanted to deliver a unique consumer experience at one of Sydney’s premier site’s “Circular Key” it allowed our team to use all elements of Alchemy’s services combining CNC routing, digital printing, Paint Dept, Styling and tradisional carpentry.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\hendricks02.jpg"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\hendricks03.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\hendricks04.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                       {/*  <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\hendricks06.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                       {/*  <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


                <Carousel className='size segundo'>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\youtube04.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>SAMSUNG ELECTRIC PLAYGROUND AT VIVID</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\youtube02.jpg"
                        alt="Second slide"
                        />
                    {/*     <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\youtube03.jpg"
                        alt="Third slide"
                        />
                      {/*   <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\youtube01.jpg"
                        alt="Third slide"
                        />
                     {/*    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\youtube05.jpg"
                        alt="Third slide"
                        />
                     {/*    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\youtube06.jpg"
                        alt="Third slide"
                        />
                       {/*  <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>

                </Carousel>

                
                <Carousel className='size'>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\youtube04.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\Alchemy-Vivid-02-1.jpg"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="images\portfolio\VividSydney2019_CircularQuay_SamsungElectricPlayground_CREDITDestinationNSW_KL004.jpeg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>




                   
                
                

                {/*       <div className="foto">
                      <img src="images/portfolio/Alchemy-Vivid-02-1.jpg" alt="Vivid"/>
                      <div className="centradoPort">
                          <h3>Samsung-Vivid</h3>
                          <p>Sydney-Circular Quay-2020</p>
                      </div>
                  </div> */}

               {/*  <div className="foto">
                    <img src="images/portfolio/hendricks01.jpg" alt="Hendricks" />
                    <div className="centradoPort">
                        <h3>Hendrick's</h3>
                        <p>Sydney-Opera House-2021</p>
                    </div>
                </div>

                <div className="foto">
                    <img src="images/portfolio/IMG_2741.jpg" alt="CNY of Rabbit" />
                    <div className="centradoPort">
                        <h3>Chinese New Year of Rabbit</h3>
                        <p>Sydney-CBD-2011</p>
                    </div>
                </div>

                <div className="foto">
                    <img src="images/portfolio/youtube01.jpg" alt="YouTube" />
                    <div className="centradoPort">
                        <h3>YouTube</h3>
                        <p>Sydney-ICC -2019</p>
                    </div>
                </div>
 */}

            </div>
        </main>
    );
}

export default PortfolioPage;
