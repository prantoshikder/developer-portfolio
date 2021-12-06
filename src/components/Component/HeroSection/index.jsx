import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import profileImage from "../../../assets/profileImage.jpg";
import useStyles from "./HeroSection.styles";

const HeroSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroArea}>
      <Container className={classes.heroContainer}>
        <Grid container spacing={2}>
          <Grid item sm={6} md={6} xs={12}>
            <div className={classes.heroContent}>
              <Typography variant="h4">Hello!</Typography>
              <Typography variant="h1">
                I'm <span>Pranto Shikder</span>
              </Typography>
              <Typography>
                I started my career in web development with React JS, JavaScript, ES6, material UI and Node JS, MongoDB for the backend. I love exploring new
                things and willing to accept challenges to improve myself better.
              </Typography>
              <div className={classes.socialMedia}>
                <a href="https://www.facebook.com/prantoshikder95" target="_blank">
                  <FacebookRoundedIcon />
                </a>
                <a href="https://twitter.com/PrantoShikder4" target="_blank">
                  <TwitterIcon />
                </a>
                <a href="https://www.linkedin.com/in/prantoshikder/" target="_blank">
                  <LinkedInIcon />
                </a>
                <a href="https://github.com/prantoshikder" target="_blank">
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </Grid>
          <Grid item sm={6} md={6} xs={12}>
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
