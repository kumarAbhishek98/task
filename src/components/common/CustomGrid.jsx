import { Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Children } from "react";
import { useNavigate } from "react-router-dom";
import useStyles from "../../pages/styles";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CustomGrid = ({ children, postAJob, signUp }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const homeHandler = () => {
    navigate("/login/jobsPosted");
  };
  return (
    <Box className={classes.loginPageBox}>
      <Card className={classes.loginPageCard}>{children}</Card>

      <Grid className={classes.grid1Login}>
        {postAJob && (
          <Typography className={classes.grid1JobPosted}>
            <HomeIcon className={classes.HomeIcon} />
            <Typography className={classes.Home} onClick={homeHandler}>
              Home
            </Typography>
            <ArrowForwardIosIcon className={classes.ArrowIcon} />
            <Typography className={classes.PostHome}>Post a job</Typography>
          </Typography>
        )}
      </Grid>
      <Grid
        className={classes.grid2Login}
        sx={signUp ? { height: "340px" } : ""}
      ></Grid>
    </Box>
  );
};

export default CustomGrid;
