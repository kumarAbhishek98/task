import React from "react";
import { InputLabel, TextField, Typography } from "@mui/material";
import useStyles from "../../pages/styles";

const InputField = ({
  label,
  placeholder,
  password,
  onInputChange,
  propName,
  value,
  handleForgetPassword,
  isError,
  errMessage
}) => {
  const classes = useStyles();

  return (
    <>
      <Typography sx={{ mb: 2 }}>
        <InputLabel Label
          sx={{
            width: "420px",
            //   fontWeight: "600",

            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
            {label}
          </Typography>
          {password && (
            <Typography
              variant="a"
              className={classes.textColor}
              sx={{ fontSize: "14px" }}
              onClick={() => handleForgetPassword()}
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
          type={label === "Password" ? "password" : "text"}
          onChange={(e) => onInputChange(propName, e.target.value)}
          error={isError}
          helperText={errMessage}
        />
      </Typography>
    </>
  );
};

export default InputField;
