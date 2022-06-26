import { Button, CardContent, Typography } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import CustomGrid from "../components/common/CustomGrid";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import CustomInput from "../components/common/CustomInput";

const ForgotPassword = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  const submitBtnHandler = () => {
    navigate("/resetPassword");
  };

  return (
    <>
      <NavBar login={true} />
      <CustomGrid>
        <CardContent className={classes.flexColumn}>
          <Typography variant="h6" className={classes.CardHead}>
            Forgot your password?
          </Typography>
          <Typography variant="p" className={classes.headingBelowText}>
            Enter the email associated with your account and we’ll send you
            <br />
            instructions to reset your password.
          </Typography>
          <Typography variant="body2">
            <CustomInput
              label="Email address*"
              placeholder="Enter your email"
              propName="email"
            />

            <Typography className={classes.ForgotPasswordBody}>
              <Button
                variant="contained"
                className={classes.loginBtn}
                onClick={submitBtnHandler}
              >
                Submit
              </Button>
            </Typography>
          </Typography>
        </CardContent>
      </CustomGrid>
    </>
  );
};

export default ForgotPassword;
