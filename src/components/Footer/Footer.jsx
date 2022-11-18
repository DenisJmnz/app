import React from 'react';

const Footer = ({text, license}) => {
    return(
        <footer>
            <p>{text}</p>
            <p>{license}</p>
        </footer>
    )
}

export default Footer;