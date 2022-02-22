import '../../styles/components/layout/Header.css';
import {NavLink} from 'react-router-dom';

const Header =(props)=>{
    return (
        <header className="holder">
            <div className="container">
                <div className="logo">
                    <img src="./images/logo.png" width={200} alt="Alchemy logotype" />
                    <h3>You imagine it,we create it.</h3>
                </div>
                <nav>
                    <div className="nav">
                        <ul>
                            <li><NavLink activeClassName="activo" exact to="/">Home</NavLink></li>
                            <li><NavLink activeClassName="activo" exact to="/portfolio">Portfolio</NavLink></li>
                        	<li><NavLink activeClassName="activo" exact to="/aboutus">About Us</NavLink></li>
                            <li><NavLink activeClassName="activo" exact to="/services">Services</NavLink></li>
                            <li><NavLink activeClassName="activo" exact to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>    
                </nav>
            </div>
        </header>
    );
}

export default Header;