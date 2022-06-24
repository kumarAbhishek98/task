import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Input from "../components/common/Input";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";
import { LoginService } from "../services/AuthServices";

const LoginPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const onInputChange = (name, value) => {
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    const res = await LoginService(userData);
    if (res?.success) {
      localStorage.setItem("token", res.data.token);
      navigate("/login/jobsPosted");
    }
  };
  return (
    <>
      <NavBar />
      <Box className={classes.loginPageBox}>
        <Card className={classes.loginPageCard}>
          <CardContent className={classes.flexColumn}>
            <Typography variant="h6" className={classes.CardHead}>
              Login
            </Typography>
            <Typography variant="body2">
              <Input
                label="Email address"
                placeholder="Enter your email"
                value={userData.email}
                onInputChange={onInputChange}
                propName="email"
              />
              <Input
                label="Password"
                placeholder="Enter your password"
                password={true}
                value={userData.password}
                onInputChange={onInputChange}
                propName="password"
                handleForgetPassword={() => navigate("/forgotPassword")}
              />
              <Typography className={classes.loginCard}>
                <Button
                  variant="contained"
                  className={classes.loginBtn}
                  onClick={onSubmit}
                >
                  Login
                </Button>

                <Typography variant="p">
                  New to MyJobs?
                  <Typography
                    variant="a"
                    className={[classes.textColor, classes.cursor]}
                    onClick={() => navigate("/signUp")}
                  >
                    Create an account
                  </Typography>
                </Typography>
              </Typography>
            </Typography>
          </CardContent>
        </Card>

        <Grid className={classes.grid1Login}></Grid>
        <Grid className={classes.grid2Login}></Grid>
      </Box>
    </>
  );
};

export default LoginPage;
