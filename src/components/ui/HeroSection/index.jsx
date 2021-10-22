import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useStyles from './HeroSection.styles';
import profileImage from '../../../assets/profileImage.jpg';
import { Link } from 'react-router-dom';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const HeroSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroArea}>
      <div></div>
       <Container className={classes.heroContainer}>
          <Grid container spacing={2}>
            <Grid item sm={6} md={6} xs={12} >
              <div className={classes.heroContent}>
                <Typography variant="h4">Hello!</Typography>
                <Typography variant="h1">I'm <span>Pranto Shikder</span></Typography>
                <Typography>I started my career in web development with React JS, JavaScript, ES6, material UI and Node JS, MongoDB for the backend. I love exploring new things and willing to accept challenges to improve myself better.</Typography>
                <div className={classes.socialMedia}>
                  <Link to="#!"><FacebookRoundedIcon /></Link>
                  <Link to="#!"><TwitterIcon /></Link>
                  <Link to="#!"><LinkedInIcon /></Link>
                  <Link to="https://github.com/prantoshikder" target="_blank"><GitHubIcon /></Link>
                </div>
              </div>
            </Grid>
            <Grid item sm={6} md={6} xs={12} >
              <div className={classes.profileImage}>
                <img src={profileImage} alt="profileImage" />
              </div>
            </Grid>
          </Grid>
       </Container>
      <div></div>
    </div>
  );
};

export default HeroSection;