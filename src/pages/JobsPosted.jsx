import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import useStyles from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";
import { FetchAllJobs, FetchJobsByPages, FetchOneJob } from "../services/JobsServices";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(1),
    // minWidth: "500px",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            fontWeight: 600,
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const JobsPosted = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [postedJobs, setPostedJobs] = useState();
  const [candidates, setCandidates] = useState();
  const [pageCount, setPageCount] = useState(1);

  const handleClickOpen = async (id) => {
    const res = await FetchOneJob(id);
    setCandidates(res.data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlePostJob = () => {
    navigate("/login/postJob");
  };

  const fetchJobs = async () => {
    const res = await FetchAllJobs();
    setPostedJobs(res.data.data);
  };

  const paginatedJobs = async(num) => {
    const res = await FetchJobsByPages(num);
    setPostedJobs(res.data.data);
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    if(pageCount > 1) {
      paginatedJobs(pageCount);
    }
  }, [pageCount]);

  return (
    <>
      <NavBar jobPosted={true} />
      <Grid item xs={6} className={classes.grid1Job}>
        <Typography className={classes.grid1JobPosted}>
          <HomeIcon className={classes.HomeIcon} />
          <Typography className={classes.Home} onClick={() => navigate("/login/jobsPosted")}>
            Home
          </Typography>
        </Typography>

        <Typography className={classes.postedByyou} variant="h6">
          Jobs posted by you
        </Typography>
      </Grid>
      <Grid item xs={6} className={classes.grid2JobPosted}>
        {postedJobs?.length > 0 ? (
          <Box>
            <Typography className={classes.jobPostedContainer}>
              {postedJobs?.map((item) => {
                return (
                  <Card sx={{ minWidth: "285px", py: 1 }}>
                    <CardContent>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {item.title}
                      </Typography>
                      <Typography variant="body2">
                        {item.description}
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.jobAction}>
                      <Typography className={classes.locationAction}>
                        <LocationOnIcon className={classes.locationIcon} />
                        <Typography className={classes.locationName}>
                          {item.location}
                        </Typography>
                      </Typography>
                      <Button
                        size="small"
                        className={classes.applicationbtn}
                        variant="contained"
                        onClick={() => handleClickOpen(item.id)}
                      >
                        View Applications
                      </Button>
                    </CardActions>
                  </Card>
                );
              })}
            </Typography>
            {postedJobs?.length > 2 && (
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  my: 2,
                  alignItems: "center",
                }}
              >
                <Typography
                  className={classes.iconContainer}
                  onClick={() => {
                    if (pageCount > 1) {
                      setPageCount((prev) => prev - 1);
                    }
                  }}
                >
                  <ArrowLeftIcon
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#557DA526",
                    }}
                  />
                </Typography>
                <Typography className={classes.PageCount}>
                  {pageCount}
                </Typography>
                <Typography
                  onClick={() => setPageCount((prev) => prev + 1)}
                  className={classes.iconContainerRight}
                >
                  <ArrowRightIcon
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#557DA526",
                    }}
                  />
                </Typography>
              </Typography>
            )}
          </Box>
        ) : (
          <Box>
            <Typography className={classes.posting}>
              <FileCopyIcon className={classes.copyIcon} />
            </Typography>
            <Typography variant="h6" className={classes.postShow}>
              <Typography>Your posted jobs will show here!</Typography>
              <Button
                variant="contained"
                className={classes.postAJobBtn}
                onClick={handlePostJob}
              >
                Post a Job
              </Button>
            </Typography>
          </Box>
        )}
      </Grid>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Typography variant="h6" className={classes.applications}>
            Applicants for this job
          </Typography>
        </BootstrapDialogTitle>
        <Typography sx={{ ml: 2 }}>
          Total {candidates?.length ? candidates?.length : 0} applications
        </Typography>
        <DialogContent sx={{}} className={classes.showApplicants}>
          {candidates?.length > 0 ? (
            <Grid container spacing={3}>
              {candidates?.map((item) => {
                return (
                  <Grid item md={6}>
                    <Card sx={{ maxWidth: "200" }}>
                      <CardHeader
                        sx={{}}
                        className={classes.breakWord}
                        avatar={
                          <Avatar
                            className={classes.avatarIcon}
                            aria-label="recipe"
                          >
                            {item.name.charAt(0).toUpperCase()}
                          </Avatar>
                        }
                        title={
                          item.name.split(" ")[0].charAt(0).toUpperCase() +
                          item.name.slice(1)
                        }
                        subheader={item.email}
                      />
                      <CardContent className={classes.applicantsContent}>
                        <Typography
                          variant="p"
                          className={classes.applications}
                        >
                          Skills
                        </Typography>
                        <Typography variant="p">{item.skills}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <>
              <Typography className={classes.posting}>
                <FileCopyIcon className={classes.copyIcon} />
              </Typography>
              <Typography variant="h6" className={classes.postShow}>
                No applications available!
              </Typography>
            </>
          )}
        </DialogContent>
      </BootstrapDialog>
    </>
  );
};

export default JobsPosted;
