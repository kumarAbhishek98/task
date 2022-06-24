import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  textColor: {
    color: "#43AFFF",
  },
  loginBtn: {
    color: "white",
    border: "1px solid #43AFFF",
    background: "#43AFFF33",
  },

  postajobBtn: {
    color: "#D9EFFF !important",
  },
  flexGrow1: {
    flexGrow: 1,
  },
  navbarBox: {
    backgroundColor: "#4D618E !important",
  },
  appbar: {
    backgroundColor: "#303F60 !important",
  },
  tableBox: {
    width: "100%",
    padding: "20px",
  },
  tablePaper: {
    width: "100%",
    mb: 2,
  },
  tableInsideContainer: {
    minWidth: 750,
    minHeight: "77vh",
  },
  imgTableCell: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  noDataBox: {
    width: "max-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
  deletePopupBox: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    padding: "24px",
    background: "white",
    flexDirection: "column",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  fullWidth: {
    width: "100%",
  },
  historyCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    p: 1,
  },
  stateTypography: {
    display: "flex",
    alignItems: "center",
  },
  displayAlignItems: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
  },
  justifyAllContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  font12: { fontSize: "12px" },

  root: {
    flexGrow: 1,
    boxShadow: "none",
    backgroundColor: "transparent",

    "& .MuiTabs-indicator": {
      display: "none",
    },
    "& .MuiTab-root": {
      minWidth: "100px",
      backgroundColor: "transparent",
    },
  },

  notebookVersionTwoTabWrapper: {
    display: "flex",
    padding: "16px",
    paddingTop: 0,

    "& button": {
      "&:active": {
        textAlign: "center",
        background: "#dee4fd !important",
        color: "#416bff !important",
        cursor: "pointer",
      },
    },

    "& .MuiTabs-indicator ": {
      display: "none !important",
      //backgroundColor: "orange"
    },
    "& .Mui-selected": {
      background: "#eff2fe !important",
      color: "#416bff !important",
      borderRadius: "4px 4px 0px 0px",
    },
  },

  notebookVersionTwotabs: {
    textTransform: "none !important",
    textAlign: "center",
    background: "white",
    cursor: "pointer",
    padding: "16px 24px",
    fontSize: "16px !important",
    lineHeight: "24px",
    letterSpacing: "0.5px",
    color: "#000000 !important",
    indicatorColor: "none",

    "&:hover": {
      borderRadius: "4px 4px 0px 0px",
      background: "#eff2fe !important",
      // color: "black !important",
    },
    "&:active": {
      borderRadius: "4px 4px 0px 0px",
      background: "#eff2fe !important",
      color: "#416bff !important",
    },
  },
  // activeNotebookVersionTwoTabs: {
  //   color: "#416bff",
  //   background: "#eff2fe",
  //   borderRadius: "4px 4px 0px 0px",
  //   "& : hover": {
  //     background: "#eff2fe",
  //     color: "#416bff",
  //   },
  // },
  activeNotebookVersionTwoTabs: {
    color: "#416bff !important",

    background: "#eff2fe !important",

    borderRadius: "4px 4px 0px 0px !important",
  },
  disabledNotebookVersionTwoTabs: {
    borderRadius: "4px 4px 0px 0px",
    background: "#dadfe5",
    cursor: "no-drop",
    padding: "16px 24px",
    "&:hover": {
      borderRadius: "4px 4px 0px 0px",
      background: "#dadfe5",
    },
  },
}));
