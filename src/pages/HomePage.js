import React from 'react';

const HomePage = (props)=>{
    return (
        <main className='holder wrapper'>
            <div className='homevideo'>
                <video className='video' controls autoplay muted >
                <source src="images/home/1286756359.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="columnas">
                <div className="hometext left">
                    <h1>WHO ARE WE?</h1>
                    <p> We are a creative community of designers and craftsmen that focuses on quality.
                
                    <br></br> <br></br>We translate your creative and technical concepts into unique and engaging experiences.
                
                    <br></br> <br></br>We create premium custom products that inspire and embody solutions for all brands.</p>
            
                </div>
                <div className="monogram right">
                    <img src="images/home/Asset 1.svg" alt="Alchemy monogram"/>
                </div>
            </div>
        </main>
    );
}

export default HomePage;
