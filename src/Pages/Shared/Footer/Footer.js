import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='mt-4'>
            <p className='pt-4 pb-2 text-center'> copywrite  &copy;{new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;