import { Popover } from 'bootstrap';
import React from 'react';
import '../../src/styles/components/pages/ServicesPage.css';

const ServicesPage = (props)=>{
    return (
<main className='holder'>
    <div className='cuadrado'>
        <h2>Services</h2>
        <p>As a company we are after every part of the procces, in this way your journey with us is a piece of mind.</p>
    </div>
        
    <div className='container-services'>

        <div className='foto-services foto1'>
            <img src="./images/services/consultation.jpg" alt="img01"/>
            <div className="centrado1">
                <h3>CONSULTATION &amp; DESIGN</h3>
                <p>We act as translators, turning your great ideas into realities.</p>
                <button className="button" onClick={function sayHello(){alert('At Alchemy we offer results by translating your ideas and designs through a creative and collaboration process, which allows our multi-talented team to be an extension of your production service.Through clever design, project management and production, our team approaches each project with innovative forward thinking to deliver outcomes for brands and agencies.We also incorporate a Hot-Desk environment for our project partners so they can engage directly with our community.Alchemy is Australian owned and operated; our consultation and design hub offers a complete end to end production facility under one roof, 15 minutes from the Sydney CBD.')}}>Read More</button>
            </div>
        </div>

        <div className='foto-services foto2'>
        <div className="texto-services centrado2">
                <h3>TAILORED SOLUTIONS</h3>
                <p>Unique products stimulate the imagination; we make brands stand out.</p>
                <button className="button" onClick={function sayHello(){alert('Alchemy’s creative works encompass everything from experiential projects, brand elements, film & TV, exhibitions, displays, stage sets, sculpture, and installations. We incorporate a “work art balance” allowing for creativity and quality through our community of craftsmen and women, all of whom are experts in creating semi-permanent brand solutions.This collective has been tasked with delivering for some of Australia’s most creative agencies and global brands with a full service 1500 sqm workshop and creative hub.')}}>Read More</button>

            </div>
            <img src="./images/services/tailored.jpg" alt="img02"/>
           
        </div>
        
        <div className='foto-services foto1'>
            <img src="./images/services/alchemy go.jpg" alt="img03"/>
            <div className="texto-services centrado1">
                <h3>ALCHEMY GO</h3>
                <p>Must have add-ons and accessories to deliver immediate solutions.</p>
                <button className="button" onClick={function sayHello(){alert('From backstage to front of house, Alchemy Go offers a range of event hire solutions available for turnkey projects. Whether it’s accessories for a bustling backstage environment, high impact branding for a trade show or pop-up activations, we have a selected range of accessories for these applications.Alchemy Go products include display plinths, trade show shell scheme wraps and skins, through to backstage make-up mirrors and catwalks. Want something more bespoke? Talk to our Tailored Solutions team to amp up your event or display requirements.')}}>Read More</button>
            </div>
        </div>

        <div className='foto-services foto2'>
        <div className="texto-services centrado2">
                <h3>DIGITAL PRINTING</h3>
                <p>High quality print media in a wide range of formats, turning ideas into realities.</p>
                <button className="button" onClick={function sayHello(){alert('From backstage to front of house, Alchemy Go offers a range of event hire solutions available for turnkey projects. Whether it’s accessories for a bustling backstage environment, high impact branding for a trade show or pop-up activations, we have a selected range of accessories for these applications.Alchemy Go products include display plinths, trade show shell scheme wraps and skins, through to backstage make-up mirrors and catwalks. Want something more bespoke? Talk to our Tailored Solutions team to amp up your event or display requirements.')}}>Read More</button>

            </div>
            <img src="./images/services/printing.jpg" alt="img04"/>
            
        </div>

        <div className='foto-services foto1'>
            <img src="./images/services/logistic.jpg" alt="img05"/>
            <div className="texto-services centrado1">
                <h3>LOGISTIGS</h3>
                <p>Professional event production, installation and management. We build anywhere, anytime.</p>
                <button className="button" onClick={function sayHello(){alert('From backstage to front of house, Alchemy Go offers a range of event hire solutions available for turnkey projects. Whether it’s accessories for a bustling backstage environment, high impact branding for a trade show or pop-up activations, we have a selected range of accessories for these applications.Alchemy Go products include display plinths, trade show shell scheme wraps and skins, through to backstage make-up mirrors and catwalks. Want something more bespoke? Talk to our Tailored Solutions team to amp up your event or display requirements.')}}>Read More</button>

            </div>
        </div>

    </div>
    </main>
    );
}

export default ServicesPage;