import { Grid, Typography } from "@mui/material";
import React from "react";
import useStyles from "../../pages/styles";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const CustomPostJob = ({ postAJob }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const homeHandler = () => {
    navigate("/login/jobsPosted");
  };
  return (
    <Grid item xs={6} className={classes.grid1Job}>
      <Typography className={classes.grid1JobPosted}>
        <HomeIcon className={classes.HomeIcon} />
        <Typography className={classes.Home} onClick={homeHandler}>
          Home
        </Typography>
      </Typography>

      <Typography className={classes.postedByyou} variant="h6">
        Jobs posted by you
      </Typography>
    </Grid>
  );
};

export default CustomPostJob;
