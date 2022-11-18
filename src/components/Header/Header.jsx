import React from 'react';
import './Header.css';

const Header = ( { title, description, visitas } ) => {
    return (
        <header>
            <h1>{title}</h1>
            <h2>{description}</h2>
            {visitas ? 
                <>
                    <p>¡Bienvenido de nuevo!</p> 
                    <p>¡Te echábamos de menos!</p> 
                </>           
            : <p>¡Es tu primera vez!</p> }
        </header>
    )
}

export default Header;