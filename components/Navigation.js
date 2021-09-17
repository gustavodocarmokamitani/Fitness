import React, { useState } from "react";
import './Navigation.css';

import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className='nav container'>
                <div className='nav-logo'>
                    <p>R. ACADEMIA</p>
                </div>
                <ul className='nav-list'>
                    <li className='nav-items nav-hidden'>
                        <a href="#">CONTATO</a>
                    </li>
                    <li className='nav-items nav-hidden'>
                        <a href="#">AULAS</a>
                    </li>
                    <li className='nav-items nav-hidden'>
                        <a href="#">PLANOS</a>
                    </li>
                    <li className='nav-items nav-hidden'>
                        <a href="#">SOBRE NÓS</a>
                    </li>
                    <li className='nav-items hidden'>
                        <Button onClick={handleClick} className='btn' variant="outlined" color="error" size='small'>

                            <FontAwesomeIcon icon={faBars} size='2x' />
                        </Button>
                    </li>
                </ul>

                <div className={`nav-wrap hidden ${!isMenuOpen && 'wrap'}`} >
                    <ul className='nav-list nav-list-wrap'>
                        <li className='nav-items'>
                            <a href="#">CONTATO</a>
                        </li>
                        <li className='nav-items'>
                            <a href="#">AULAS</a>
                        </li>
                        <li className='nav-items'>
                            <a href="#">PLANOS</a>
                        </li>
                        <li className='nav-items'>
                            <a href="#">SOBRE NÓS</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navigation;