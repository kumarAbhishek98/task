import React from "react";
import NavBar from "../components/NavBar";
import CustomGrid from "../components/common/CustomGrid";
import {
  Button,
  CardContent,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import CustomInput from "../components/common/CustomInput";
import useStyles from "./styles";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <>
      <NavBar login={true} />
      <CustomGrid signUp={true}>
        <CardContent className={classes.flexColumn}>
          <Typography variant="h6" className={classes.CardHead}>
            SignUp
          </Typography>
          <Typography variant="p" className={classes.signUpIam}>
            I'm a
          </Typography>
          <Typography variant="p" className={classes.signUpAs}>
            <Button
              className={classes.backgroundColor}
              variant="contained"
              startIcon={<PersonSearchIcon />}
              sx={{ mr: 1 }}
            >
              Recruiter
            </Button>

            <Button
              className={classes.textColor}
              variant="outlined"
              startIcon={<PeopleAltIcon />}
            >
              Recruiter
            </Button>
          </Typography>
          <Typography variant="body2">
            <CustomInput
              label="Full Name*"
              placeholder="Enter your full name"
              propName="email"
            />
            <CustomInput
              label="Email Address*"
              placeholder="Enter your email address"
              propName="email"
            />
            <Typography className={classes.jobAction} sx={{ mb: 2 }}>
              <Typography>
                <InputLabel Label className={classes.jobAction}>
                  <Typography className={classes.createInputLabel}>
                    Create Password*
                  </Typography>
                </InputLabel>
                <TextField
                  className={classes.inputCreatePassword}
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  placeholder={"Enter your password"}
                />
              </Typography>
              <Typography>
                <InputLabel Label className={classes.jobAction}>
                  <Typography className={classes.createInputLabel}>
                    Confirm Password*
                  </Typography>
                </InputLabel>
                <TextField
                  className={classes.inputConfirmPassword}
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  placeholder={"Enter your password"}
                />
              </Typography>
            </Typography>
            <CustomInput
              label="Skills*"
              placeholder="Enter your skills"
              propName="skills"
            />
            <Typography className={classes.ForgotPasswordBody}>
              <Button variant="contained" className={classes.signUpBtn}>
                SignUp
              </Button>
              <Typography variant="p">
                Have an account?
                <Typography
                  variant="a"
                  className={[classes.textColor, classes.cursor]}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Typography>
              </Typography>
            </Typography>
          </Typography>
        </CardContent>
      </CustomGrid>
    </>
  );
};

export default SignUp;
