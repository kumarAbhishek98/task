import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";
import { Avatar, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";

const NavBar = ({ login, jobPosted }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [state, setState] = React.useState({
    openToast: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, openToast } = state;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const loginBtnHandler = () => {
    navigate("/login");
  };

  const handlePostJob = () => {
    navigate("/login/postJob");
  };

  const handleToastClick = () => () => {
    navigate("/");
  };
  const logoutHandler = () => {
    navigate("/");
  };

  const handleToastClose = () => {
    setState({ ...state, openToast: false });
  };
  return (
    <Box className={[classes.navbarBox, classes.flexGrow1]}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            className={classes.flexGrow1}
          >
            My<span className={classes.textColor}>Jobs</span>
          </Typography>
          {login && (
            <Button
              variant="outlined"
              className={classes.loginBtn}
              onClick={loginBtnHandler}
            >
              Login/SignUp
            </Button>
          )}

          {jobPosted && (
            <>
              <Button
                className={classes.postajobBtn}
                size="small"
                onClick={handlePostJob}
              >
                Post a job
              </Button>

              <Avatar
                sx={{
                  ml: 2,
                  width: 35,
                  height: 35,
                  bgcolor: "#D9EFFF",
                  color: "#303F60",
                }}
                size="small"
              >
                R
              </Avatar>

              <ArrowDropDownIcon onClick={handleClick} />
            </>
          )}
        </Toolbar>{" "}
        <Divider sx={{ background: "#4D618E", height: "2px", mx: 3 }} />
      </AppBar>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={handleToastClick({
            vertical: "top",
            horizontal: "right",
          })}
        >
          Logout
        </MenuItem>
      </Menu>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={openToast}
        onClose={handleToastClose}
        message="I love snacks"
        key={vertical + horizontal}
      />
    </Box>
  );
};

export default NavBar;
