import React from 'react';

const PortfolioPage = (props) =>{
    return (
        <main class="holder wrapper  back">

            <div  className="cuadrado">
                <h2>Portfolio</h2>
                <p>Over the years we have been involved in amazing creativity, reflecting our capacity and professionalism.</p>
            </div>
        

    <div className="container">
        <div className="foto">
            <img src="images/portfolio/Alchemy-Vivid-02-1.jpg" alt="Vivid"/>
            <div className="centrado">
                <h3>Samsung-Vivid</h3>
                <p>Sydney-Circular Quay-2020</p>
            </div>
        </div>

        <div className="foto">
            <img src="images/portfolio/hendricks01.jpg" alt="Hendricks"/>
            <div className="centrado">
                <h3>Hendrick's</h3>
                <p>Sydney-Opera House-2021</p>
            </div>
        </div>

        <div className="foto">
            <img src="images/portfolio/IMG_2741.jpg" alt="CNY of Rabbit"/>
            <div className="centrado">
                <h3>Chinese New Year of Rabbit</h3>
                <p>Sydney-CBD-2011</p>
            </div>
        </div>

        <div className="foto">
            <img src="images/portfolio/youtube01.jpg" alt="YouTube"/>
            <div className="centrado">
                <h3>YouTube</h3>
                <p>Sydney-ICC -2019</p>
            </div>
        </div>

        
    </div>
    </main>
    );
}

export default PortfolioPage;