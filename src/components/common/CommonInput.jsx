import React from "react";
import { InputLabel, TextField, Typography } from "@mui/material";
import useStyles from "../../pages/styles";

const CommonInput = ({
  label,
  placeholder,
  password,
  onInputChange,
  propName,
  value,
  forgotPasswordHandler,
  helperText,
}) => {
  const classes = useStyles();
  return (
    <Typography sx={{ mb: 2 }}>
      <InputLabel className={classes.commonInput}>
        <Typography className={classes.commonLabel}>{label}</Typography>
        {password && (
          <Typography
            variant="a"
            className={[classes.textColor, classes.cursor]}
            sx={{ fontSize: "14px" }}
            onClick={() => forgotPasswordHandler()}
          >
            Forgot your password?
          </Typography>
        )}
      </InputLabel>
      <TextField
        sx={{ width: "100%", justifyContent: "center" }}
        id="outlined-basic"
        variant="outlined"
        size="small"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onInputChange(propName, e.target.value)}
      />
      {helperText && (
        <Typography sx={{}} className={classes.helperText}>
          All Fields are madatory
        </Typography>
      )}
    </Typography>
  );
};

export default CommonInput;
