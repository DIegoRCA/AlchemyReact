
import {Link} from 'react-router-dom';

const Header =(props)=>{
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src="./images/logo.png" width={200} alt="Alchemy logotype" />
                </div>
                <nav>
                    <div className="nav">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                        	<li><Link to="/aboutus">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>    
                </nav>
            </div>
        </header>
    );
}

export default Header;