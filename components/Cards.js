import React from "react";
import './Cards.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { Grid, Paper, styled } from "@material-ui/core";

const Cards = () => {
  return (
    <>
      <div className='container cards'>
        <h1 className='title'>Not sure where to start?</h1>
        <p className='sub-title'> Programs offer day-to-day guidance on an interactive calendar to keep you on track. </p>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm:3, md: 6 }}>
          <Grid item xs={6} lg={3}>
            <div className='cards-grid'>
              <h4 className='cards-title sub-title'>Workout Videos</h4>
              <p className='cards-text text'>Access to hundresds of free, full-length workout videos.</p>
              <FontAwesomeIcon className='cards-icon' size='2x' icon={faArrowRight} />
            </div>
          </Grid>
          <Grid item xs={6} lg={3}>
            <div className='cards-grid'>
              <h4 className='cards-title sub-title'>Workout Videos</h4>
              <p className='cards-text text'>Access to hundresds of free, full-length workout videos.</p>
              <FontAwesomeIcon className='cards-icon' size='2x' icon={faArrowRight} />
            </div>
          </Grid>
          <Grid item xs={6} lg={3}>
            <div className='cards-grid'>
              <h4 className='cards-title sub-title'>Workout Videos</h4>
              <p className='cards-text text'>Access to hundresds of free, full-length workout videos.</p>
              <FontAwesomeIcon className='cards-icon' size='2x' icon={faArrowRight} />
            </div>
          </Grid>
          <Grid item xs={6} lg={3}>
            <div className='cards-grid'>
              <h4 className='cards-title sub-title'>Workout Videos</h4>
              <p className='cards-text text'>Access to hundresds of free, full-length workout videos.</p>
              <FontAwesomeIcon className='cards-icon' size='2x' icon={faArrowRight} />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Cards;