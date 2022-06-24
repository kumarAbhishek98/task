import React from "react";
import NavBar from "../components/NavBar";
import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import useStyles from "./styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import HomePageImg from "../assets/Images/HomePage.jpg";
import goldline from "../assets/Images/goldline.png";
import solaytic from "../assets/Images/solaytic.png";
import kanba from "../assets/Images/kanba.png";
import lighting from "../assets/Images/lighting.png";
import ztos from "../assets/Images/ztos.png";
import ideaa from "../assets/Images/ideaa.png";
import liva from "../assets/Images/liva.png";
import velocity from "../assets/Images/velocity-9.png";

const HomePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const loginBtnHandler = () => {
    navigate("/login");
  };
  const signUpBtnHandler = () => {
    navigate("/signUp");
  };
  return (
    <>
      <NavBar login={true} />
      <Card className={classes.HomeCard}>
        <img className={classes.image} src={HomePageImg} />
      </Card>
      <Grid item xs={6} className={classes.grid1}>
        <Typography className={classes.grid1Container}>
          <Typography className={classes.welcomeText} variant="h3">
            Welcome to <br />
            My<span className={classes.textColor}>Jobs</span>
          </Typography>
          <Button
            variant="contained"
            className={classes.getStartedBtn}
            onClick={signUpBtnHandler}
          >
            Get Started
          </Button>
        </Typography>
      </Grid>
      <Grid item xs={6} className={classes.grid2}>
        <Typography variant="p" className={classes.whyUs}>
          Why Us
        </Typography>
        <Typography className={classes.displayFlex}>
          <Card sx={{ p: 1, mr: 4 }} className={classes.addMargin}>
            <CardContent>
              <Typography variant="h5" component="div"></Typography>
              <Typography
                color="text.secondary"
                className={classes.cardHeading}
              >
                Organize Your <br />
                Candidates
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ p: 1, mr: 4 }} className={classes.addMargin}>
            <CardContent>
              <Typography variant="h5" component="div"></Typography>
              <Typography
                // sx={{ mb: 1.5 }}
                color="text.secondary"
                className={classes.cardHeading}
              >
                Organize Your <br />
                Candidates
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
          </Card>
          <Card
            // sx={{ minWidth: 275, maxWidth: 350, p: 1 }}
            className={classes.addMargin}
          >
            <CardContent>
              <Typography variant="h5" component="div"></Typography>
              <Typography
                color="text.secondary"
                className={classes.cardHeading}
              >
                Organize Your <br />
                Candidates
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </Typography>
            </CardContent>
          </Card>
        </Typography>
        <Typography variant="p" className={classes.companies}>
          Companies Who Trust Us
        </Typography>
        <Typography className={classes.alignImage}>
          <img className={classes.companyFirstImage} src={solaytic} />
          <img className={classes.companyImage} src={kanba} />
          <img className={classes.companyImage} src={lighting} />
          <img className={classes.companyImage} src={ztos} />
          <img className={classes.companyImage} src={kanba} />
        </Typography>
        <Typography className={classes.alignImage}>
          <img className={classes.companyFirstImage} src={goldline} />
          <img className={classes.companyImage} src={ideaa} />
          <img className={classes.companyImage} src={liva} />
          <img className={classes.companyImage} src={velocity} />
        </Typography>
      </Grid>
    </>
  );
};

export default HomePage;
