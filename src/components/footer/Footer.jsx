import React from 'react';
import Logo from  '../../assets/logo_footer.png';


const Footer = () => {
    return (
        <footer className='footer'>
            <img src={Logo} alt='Logo de agence kasa'/>
            <p className='footer__text-copyright'>
              © 2023 Kasa. All rights reserved
            </p>
            
        </footer>
    );
};

export default Footer;