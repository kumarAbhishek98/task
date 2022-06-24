import { createTheme } from "@mui/material";
import colors from "./colors";
// @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    fontWeightLight: 200,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },

  palette: {
    primary: {
      main: colors.primary,
      dark: colors.darkPrimary,
      success: colors.success,
      // secondary: colors.secondary,
      // neonPurple: colors.neonPurple,
      // indigoThree: colors.indigoThree,
      // black: colors.black,
      // pink: colors.pink,
      // barbiePink: colors.barbiePinkTwo,
      // oragne: colors.oragne,
      // skyBlue: colors.skyBlue,
      // purple80: colors.purple80,
      // purple90: colors.purple90,
      // purple100: colors.purple100,
    },
    secondary: {
      main: colors.darkBlue,
      dark: colors.primaryBtn,
      success: colors.primaryBtn,
      // barbiePinkTwo: colors.barbiePinkTwo,
      // lightBlue: colors.lightBlue,
      // lightRed: colors.lightRed,
      // red10: colors.red10,
      // lightGray: colors.lightGray,
      // gray50: colors.gray50,
      // gray80: colors.gray80,
      // gray10: colors.gray10,
      // white: colors.white,
      // borderColor: colors.borderColor,
    },
    white: {
      main: colors.white,
    },
    text: {
      // primary: colors.primary,
    },

    gradient: (direction, startColor, endColor) => {
      return `linear-gradient(${direction}, ${startColor}, ${endColor})`;
    },
  },
  components: {
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     root: {
    //       "& Mui-focused": {
    //         border: "none",
    //       },
    //     },
    //     input: {
    //       // border: "1px solid black !important",
    //       "&:focus": {
    //         border: "none !important",
    //       },
    //     },
    //   },
    // },
    // MuiFocused: {
    //   styleOverrides: {
    //     root: {
    //       border: "none",
    //       "&.Mui-focused": {
    //         border: "none",
    //       },
    //     },
    //   },
    // },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&:hover": {
            border: "none",
          },
        },
      },
      underline: {
        "&:before": {
          borderBottomColor: "red",
        },
        "&:hover:not(.Mui-focused):before": {
          borderBottomColor: "green",
        },
        "&:after": {
          // focused
          borderBottomColor: "purple",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          display: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          fontSize: "0.8rem",
          textTransform: "capitalize",
        },
      },
      variants: [
        {
          props: { variant: "test" },
          style: {
            backgroundColor: colors.defaultState,
            borderRadius: "2px",
            padding: "8px 16px",
            minWidth: "130px",
            textTransform: "capitalize",
            boxShadow: "none",
            "&:hover": {
              // backgroundColor: "#416BFF",
              boxShadow: "none",
            },
          },
        },
        {
          props: { variant: "contained" },
          style: {
            // background: #416bff
            textTransform: "capitalize",
            borderRadius: "4px",
            // marginLeft: "20px",
            padding: "8px 16px",
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            borderRadius: "5px",
            padding: "8px 16px",
            textTransform: "capitalize",
            boxShadow: "none",
            color: "#416BFF",
            // borderColor: "#416BFF",
            "&:hover": {
              // borderColor: "#416BFF",
              boxShadow: "none",
            },
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "h5" },
          style: {
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "19px",
            lineHeight: "28px",
            letterSpacing: "0.15px",
            color: "#121417",
            margin: "0px",
          },
        },
        {
          props: { variant: "h4" },
          style: {
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "25px",
            letterSpacing: "0.8px",
            margin: "0px",
            marginBottom: "8px",
          },
        },
        {
          props: { variant: "formHeading" },
          style: {
            fontWeight: 500,
            color: "#3D525C",
            fontSize: "22px",
            display: "block",
          },
        },
        {
          props: { variant: "subtitle1" },
          style: {
            // fontWeight: 300,
            fontSize: "18px",
          },
        },
      ],
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          fontSize: "0.8rem",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          fontSize: "12px",

          borderRadius: "0px",
          height: "calc(1.5em + 0.75rem + 2px)",
          "& :hover": {
            // borderColor: "transparent",
            // backgroundColor: "red",
          },

          "& label.Mui-focused": {
            display: "none",
          },
          "& legend": {
            display: "none",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: "12px",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: "5px",
          marginTop: 0,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          padding: "8px 0",
          fontSize: "0.875rem",
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "1px 1px 10px 5px rgb(178 178 178 / 23%) !important",
          // padding: "15px",
          boxSizing: "border-box",
          transition: "0.5s ease-in-out",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          // border: "1px solid #EAEAEA",
          // minWidth: '500px',
          overflowX: "hide",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#E8F7FF",
          },
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          overflow: "hidden",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          borderRadius: 2,
          // border: "1px solid #D9D9D9",
        },
      },
    },
    // MuiTabs: {
    //   styleOverrides: {
    //     root: {
    //       overflow: 'auto',
    //     },
    //   },
    // },
    MuiToolbar: {
      styleOverrides: {
        root: {
          // height: "64px",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          padding: "16px 24px",
          color: "#2E2E2E",
          textTransform: "capitalize",
          fontSize: "16px",
          letterSpacing: "0.5px",
          lineHeight: "24px",
        },
        indicator: {
          display: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow:
            "0px 0px 0px 0px rgb(3 14 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 12%)",
          overflowX: "visible !important",
          overflowY: "visible !important",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          // marginLeft: "16px",
        },
        indicator: {
          display: "none",
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: "16px",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          boxShadow:
            "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px rgba(0, 0, 0, 0.08), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginRight: "0",
        },
      },
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          padding: "4px 0",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "12px 20px",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 991,
      xl: 1440,
    },
  },
});
export default theme;
