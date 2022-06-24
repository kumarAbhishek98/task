import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import useStyles from "../../pages/styles";

const CommonCard = ({ children, title }) => {
  const classes = useStyles();
  return (
    <>
      <Card
        className={classes.loginPageCard}
        // sx={{
        //   zIndex: 1,
        //   borderRadius: "20px",
        //   top: "10%",
        //   left: "32%",

        //   position: "absolute",
        // }}
      >
        <CardContent className={classes.flexColumn}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            {title}
          </Typography>
          {children}
        </CardContent>
      </Card>
    </>
  );
};

export default CommonCard;
