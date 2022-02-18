import React from 'react';

const Header =(props)=>{
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src="./images/logo.png" width={200} alt="Alchemy logotype" />
                </div>
            </div>
        </header>
    );
}

export default Header;