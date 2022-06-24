import { Button, CardContent, Typography } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import CommonGrid from "../components/common/CommonGrid";
import CommonInput from "../components/common/CommonInput";
import Input from "../components/common/Input";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  const resetBtnHandler = () => {
    navigate("/");
  };
  return (
    <>
      <NavBar login={true} />
      <CommonGrid>
        <CardContent className={classes.flexColumn}>
          <Typography variant="h6" className={classes.CardHead}>
            Reset Your Password
          </Typography>
          <Typography variant="p" className={classes.headingBelowText}>
            Enter your new password below.
          </Typography>
          <Typography variant="body2">
            <CommonInput
              label="Email address"
              placeholder="Enter your email"
              propName="email"
            />
            <CommonInput
              label="Password"
              placeholder="Enter your password"
              propName="email"
            />
            <Typography className={classes.ForgotPasswordBody}>
              <Button
                variant="contained"
                className={classes.loginBtn}
                onClick={resetBtnHandler}
              >
                Reset
              </Button>
            </Typography>
          </Typography>
        </CardContent>
      </CommonGrid>
    </>
  );
};

export default ResetPassword;
