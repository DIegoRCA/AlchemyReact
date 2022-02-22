import React from 'react';
import '../styles/components/pages/ServicesPage.css';


const ServicesPage = (props)=>{
    return (
<main className='holder'>
    <div className='cuadrado'>
        <h2>Services</h2>
        <p>As a company we are after every part of the procces, in this way your journey with us is a piece of mind.</p>
    </div>
        
    <div className='container-services'>

        <div className='foto-services '>
            <img src="./images/services/consultation.jpg" alt="img01"/>
            <div className="texto-services centrado">
                <h3>CONSULTATION &amp; DESIGN</h3>
                <p>We act as translators, turning your great ideas into realities.</p>
            </div>
        </div>

        <div className='foto-services'>
            <img src="./images/services/tailored.jpg" alt="img02"/>
            <div className="texto-services centrado">
                <h3>TAILORED SOLUTIONS</h3>
                <p>Unique products stimulate the imagination; we make brands stand out.</p>
            </div>
        </div>
        
        <div className='foto-services'>
            <img src="./images/services/alchemy go.jpg" alt="img03"/>
            <div className="texto-services centrado">
                <h3>ALCHEMY GO</h3>
                <p>Must have add-ons and accessories to deliver immediate solutions.</p>
            </div>
        </div>

        <div className='foto-services'>
            <img src="./images/services/printing.jpg" alt="img04"/>
            <div className="texto-services centrado">
                <h3>DIGITAL PRINTING</h3>
                <p>High quality print media in a wide range of formats, turning ideas into realities.</p>
            </div>
        </div>

        <div className='foto-services'>
            <img src="./images/services/logistic.jpg" alt="img05"/>
            <div className="texto-services centrado">
                <h3>LOGISTIGS</h3>
                <p>Professional event production, installation and management. We build anywhere, anytime.</p>
            </div>
        </div>

    </div>
    </main>
    );
}

export default ServicesPage;