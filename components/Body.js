import React from "react";
import './Body.css';

import body1 from '../assets/body1.png';
import body2 from '../assets/body2.png';

import { Grid, Button } from "@material-ui/core";

const Body = () => {
    return (
        <>
            <div className='body container'>

                <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 3, md: 6 }}>
                    <Grid item lg={6} xs={12}>
                        <h1 className='body-title title'>Work out at home for free.</h1>
                        <p className='body-text sub-title'>We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym.With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!</p>
                    </Grid>
                    <Grid item lg={6} xs={6}>
                        <img className='body-image' src={body1} alt='image body' />
                    </Grid>
                </Grid>               

                <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 3, md: 6 }}>
                    <Grid item lg={6} xs={6}>
                        <img className='body-image1' src={body2} alt='image body' />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <h1 className='body-title title'>Get more with low-cost training programs and advanced features.</h1>
                        <p className='body-text sub-title'>We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym.With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!</p>
                    </Grid>
                </Grid>


                <h1 className='body-card-title title'>Membership</h1>
                <hr />
                <div className='body-card-grid'>
                    <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 3, md: 2 }}>
                        <Grid item lg={6} xs={12}>
                            <div className='body-grid'>
                                <h1 className='card-title title'>Join for Free</h1>
                                <div className='card-copy'>
                                    <p className='text card-text'>Reach your fitness goals or maintain your healthy lifestyle with professional training and support from a positive and active online community.</p>
                                    <ul>
                                        <li className='text'>~600 Full-Length Workout Videos</li>
                                        <li className='text'>Customizable Calendar</li>
                                        <li className='text'>Healthy Recipes</li>
                                        <li className='text'>Health and Fitness Articles</li>
                                        <li className='text'>Positive and Supportive Online Community</li>
                                        <li className='text'>No Credit Card Needed</li>
                                    </ul>
                                    <Button variant="contained" size='small' color='success' href="#contained-buttons">
                                        Join Club Now!
                                    </Button>
                                </div>
                            </div>
                        </Grid>

                        <Grid item lg={6} xs={12}>
                            <div className='body-grid'>
                                <h1 className='card-title title'>Join for Free</h1>
                                <div className='card-copy'>
                                    <p className='text card-text'>WO Plus includes everything you get with a free membership and adds brand new convenience features, fitness tools, and unique content.</p>
                                    <ul>
                                        <li className='text'>Ads-Free Website and Videos</li>
                                        <li className='text'>Surprise Me Workout Selection Tool</li>
                                        <li className='text'>Statistics for Your Activities</li>
                                        <li className='text'>Enter and Track Custom Workouts</li>
                                        <li className='text'>FB Plus Exclusive Workouts</li>
                                        <li className='text'>Trackers to See Your Progress</li>
                                        <li className='text'>FB Plus Content and Challenges</li>
                                        <li className='text'>Video Tags</li>
                                        <li className='text'>FB Plus Routines</li>
                                        <li className='text'>Rest Day Complete</li>
                                    </ul>

                                    <Button variant="contained" size='small' color='success' href="#contained-buttons">
                                        Join Club Now!
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    );
}

export default Body;