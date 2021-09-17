import React from "react";
import './Hero.css';
import hero from '../assets/hero.png';
import featured from '../assets/featured.png';

import { Button } from "@material-ui/core";

const Hero = () => {
    return (
        <div className='hero container'>
            <p className='hero-title big-title'>WORKOUT</p>
            <p className='hero-title big-title'>With Me</p>

            <p className='hero-text sub-title'>A huge selection of health and fitness content, healthy recipes and transformation stories to help you get fit and stay fit!</p>

            <Button variant="outlined" size='large' color='error' href="#contained-buttons">
                Join Club Now!
            </Button>

            <p className='hero-text text-featured sub-title'>AS FEATURED IN </p>

            <img class='hero-featured' src={featured} alt='featured'/>

            <div className='hero-image' >
                <img src={hero} alt='Imagem Hero' />
            </div>
        </div>
    );
}

export default Hero;