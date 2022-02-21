import React from 'react';

const ContactPage = (props)=>{
    return(
        <main className="holder wrapper">
            <div className="columns">
                <div className="leftColumn">
                    <ul>
                        <li>13-15/61-71 Beauchamp Rd</li>
                        <li>Matraville</li>
                        <li>NSW </li>
                        <li><a href="mailto:info@alchemyco.com.au?Subject=Please%20contact%20me">info@alchemyco.com.au</a></li>
                    </ul>
                </div>

                <div className="rightColumn">
                    <ul>
                        <li>(02) 9550  1321</li>
                        <li>Monday to Friyday:<br></br>8am - 4pm</li>
                        <li>Saturday &amp; Sunday: Closed</li>
                    </ul>
                </div>
            </div>

            <form action="" method="" class="form">
        
                    <input type="email" placeholder="YOUR EMAIL ADDRESS"/>
        
                    <input type="text" placeholder="YOUR NAME"/>
        
                    <input type="text" placeholder="EMAIL SUBJECT"/>
        
                    <textarea id="coment" placeholder="YOUR MESSAGE"></textarea>
        
                    <input id="send" type="submit" value="SEND"/>
            </form>
        
        </main>
        
    );
}

export default ContactPage;