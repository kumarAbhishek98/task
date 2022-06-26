import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NavBar from "../components/NavBar";
import CustomCard from "../components/common/CustomCard";
import CustomGrid from "../components/common/CustomGrid";
import CustomInput from "../components/common/CustomInput";
import CustomPostJob from "../components/common/CustomPostJob";
import useStyles from "./styles";

const PostJob = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar jobPosted={true} />
      <Box className={classes.loginPageBox}>
        <CustomCard title="Post a Job">
          <Typography variant="body2">
            <CustomInput
              label="Job Title*"
              placeholder="Enter job title"
              propName="title"
            />
            <CustomInput
              label="Description*"
              placeholder="Enter job description"
              propName="description"
            />
            <CustomInput
              label="Location*"
              placeholder="Enter location"
              propName="location"
              helperText={true}
            />
            <Typography className={classes.ForgotPasswordBody}>
              <Button
                variant="contained"
                className={classes.loginBtn}
                //   onClick={resetBtnHandler}
              >
                Post
              </Button>
            </Typography>
          </Typography>
        </CustomCard>

        <CustomGrid postAJob={true} />
      </Box>
    </>
  );
};

export default PostJob;
