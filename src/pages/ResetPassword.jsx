import { Button, CardContent, Typography } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import CustomGrid from "../components/common/CustomGrid";
import CustomInput from "../components/common/CustomInput";
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
      <CustomGrid>
        <CardContent className={classes.flexColumn}>
          <Typography variant="h6" className={classes.CardHead}>
            Reset Your Password
          </Typography>
          <Typography variant="p" className={classes.headingBelowText}>
            Enter your new password below.
          </Typography>
          <Typography variant="body2">
            <CustomInput
              label="Email address"
              placeholder="Enter your email"
              propName="email"
            />
            <CustomInput
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
      </CustomGrid>
    </>
  );
};

export default ResetPassword;
