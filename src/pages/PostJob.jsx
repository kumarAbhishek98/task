import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NavBar from "../components/NavBar";
import CommonCard from "../components/common/CommonCard";
import CommonGrid from "../components/common/CommonGrid";
import CommonInput from "../components/common/CommonInput";
import CommonPostJob from "../components/common/CommonPostJob";
import useStyles from "./styles";

const PostJob = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar jobPosted={true} />
      <Box className={classes.loginPageBox}>
        <CommonCard title="Post a Job">
          <Typography variant="body2">
            <CommonInput
              label="Job Title*"
              placeholder="Enter job title"
              propName="title"
            />
            <CommonInput
              label="Description*"
              placeholder="Enter job description"
              propName="description"
            />
            <CommonInput
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
        </CommonCard>

        <CommonGrid postAJob={true} />
      </Box>
    </>
  );
};

export default PostJob;
