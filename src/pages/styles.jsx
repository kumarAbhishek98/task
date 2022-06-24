import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  textColor: {
    color: "#43AFFF !important",
  },
  cursor: {
    cursor: "pointer",
  },
  backgroundColor: {
    background: "#43AFFF !important",
  },
  divider: {
    color: "#4D618E !important",
    height: "2px",
    margin: "30px",
  },
  grid1: {
    background: "#303F60",
    display: "flex",
  },

  grid1Container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "40%",
    alignItems: "center",
    padding: "60px 0px",
  },

  grid1Job: {
    background: "#303F60",
  },
  grid1JobPosted: {
    display: "flex",
    alignItems: "center",
    color: "white",
    padding: "10px 100px",
  },

  cardHeading: {
    color: "#43AFFF !important",
    fontSize: "22px !important",
    fontWeight: "600 !important",
  },

  displayFlex: {
    display: "flex",
  },

  loginPageBox: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },

  NavAvtar: {
    marign: "0px 0px 30px 0px !important",
    width: "35 !important",
    height: 35,
    bgcolor: "#D9EFFF",
    color: "#303F60",
  },

  commonInput: {
    width: "420px",
    display: "flex",
    justifyContent: "space-between",
  },

  commonLabel: {
    fontSize: "14px",
    fontWeight: "bold",
  },

  helperText: {
    display: "flex",
    justifyContent: "flex-end",
    color: "red",
    fontSize: "14px",
  },

  loginPageCard: {
    zIndex: 1,
    borderRadius: "20px !important",
    top: "10%",
    left: "32%",

    position: "absolute",
  },
  companyFirstImage: {
    width: "150px",
    height: "50px",
    margin: "0px 0px 0px 0px !important",
  },
  companyImage: {
    width: "150px",
    height: "50px",
    margin: "0px 0px 0px 50px !important",
  },
  alignImage: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0px 0px 0px !important",
  },
  CardHead: {
    margin: "0px 0px 10px 0px !important",
    fontWeight: "600 !important",
  },

  showApplicants: {
    background: "#557DA526",
    m: 1.5,
    margin: "16px 16px 16px 16px !important",
    borderRadius: "5px",
    height: "500px",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center !important",
  },

  headingBelowText: {
    fontSize: "14px",
    margin: "0px 0px 20px 0px !important",
  },

  signUpIam: {
    fontSize: "14px",
    margin: "0px 0px 0px 0px !important",
    padding: "12px 0px !important",
  },

  signUpAs: {
    fontSize: "14px",
    margin: "0px 0px 20px 0px !important",
    padding: "0px 0px !important",
  },
  postedByyou: {
    color: "white",
    padding: "15px 0px 50px 100px",
  },
  HomeIcon: {
    fontSize: "14px !important",
  },
  ArrowIcon: {
    fontSize: "10px !important",
    margin: "0px 5px 0px 5px !important",
  },
  Home: {
    display: "flex",
    alignItems: "center",
    fontSize: "14px !important",
    margin: "0px 0px 0px 10px !important",
    cursor: "pointer",
  },
  HomeCard: {
    zIndex: 1,
    borderRadius: "20px !important",
    top: "15%",
    left: "48%",

    position: "absolute",
  },
  PostHome: {
    display: "flex",
    alignItems: "center",
    fontSize: "14px !important",
    margin: "0px 0px 0px 0px !important",
  },
  welcomeText: {
    color: "white",
  },
  locationIcon: {
    color: "#43AFFF",
  },
  jobAction: {
    display: "flex",
    justifyContent: "space-between",
  },

  arrowAlign: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#557DA526 !important",
    padding: "0px 0px !important",
    margin: "0px 0px !important",
  },

  iconContainer: {
    border: "2px solid #557DA526",
    borderRadius: "5px",
    margin: "0px 10px 0px 0px !important",
  },

  iconContainerRight: {
    border: "2px solid #557DA526",
    borderRadius: "5px",
    margin: "0px 0px 0px 10px !important",
  },

  applications: {
    fontWeight: "600 !important",
  },

  avatarIcon: {
    backgroundColor: "#D9EFFF !important",
    color: "#303F60 !important",
  },

  breakWord: {
    wordBreak: "break-all",
  },

  applicantsContent: {
    display: "flex",
    flexDirection: "column",
  },
  createInputLabel: {
    fontSize: "14px !important",
    fontWeight: "bold !important",
  },

  inputCreatePassword: {
    justifyContent: "center",
    width: "95%",
  },
  inputConfirmPassword: {
    justifyContent: "center",
    width: "100%",
  },

  jobPostedContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > :not(style)": {
      margin: "12px !important",
      width: 128,
      zIndex: 1,
    },
  },

  locationAction: {
    display: "flex",
    justifyContent: "center",
    // fontSize: "14px",
    color: "#303F60 !important",
  },
  locationName: {
    fontSize: "14px !important",
    wordBreak: "break-all",
  },

  applicationbtn: {
    background: "#43AFFF33 !important",
    color: "#303F60 !important",
  },
  getStartedBtn: {
    background: "#43AFFF !important",
    width: "fit-content",
    margin: "30px 110px 10px 0px !important",
  },
  postAJobBtn: {
    display: "flex",
    justifyContent: "center !important",
    alignItems: "center !important",
    width: "fit-content",
    background: "#43AFFF !important",
    margin: "40px 0px 90px 0px !important",
  },

  grid2: {
    background: "#EDF6FF",
    display: "flex",
    flexDirection: "column !important",
    padding: "100px 120px",
  },
  PageCount: {
    background: "#43AFFF33",
    width: "30px",
    display: "flex",
    justifyContent: "center",
  },

  posting: {
    display: "flex",
    justifyContent: "center",
    padding: "50px 0px 10px 0px",
  },
  postShow: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#C6C6C6",
  },

  copyIcon: {
    color: "#C6C6C6",
    fontSize: "140px !important",
  },
  grid2JobPosted: {
    background: "#EDF6FF",
    display: "flex",
    flexDirection: "column !important",
    padding: "0px 40px",
  },

  whyUs: {
    fontWeight: 600,
    fontSize: "20px",
    color: "#303F60",
    margin: "0px 0px 40px 0px !important",
  },

  companies: {
    fontWeight: 600,
    fontSize: "20px",
    color: "#303F60",
    margin: "40px 0px 40px 0px !important",
  },
  grid1Login: {
    background: "#303F60",
    minHeight: "270px",
  },
  grid2Login: {
    background: "#EDF6FF",
    minHeight: "270px",
  },

  loginBtn: {
    background: "#43AFFF !important",
    width: "fit-content",
    margin: "30px 0px !important",
  },
  image: {
    width: "522px",
    height: "330px",
  },
  signUpBtn: {
    background: "#43AFFF !important",
    width: "fit-content",
    margin: "20px 0px !important",
  },
  loginCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  ForgotPasswordBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  InputBody: {
    display: "flex",
    alignItems: "center",
  },
  a: {
    gridColumn: 1 / 3,
    gridRow: 1,
  },

  addMargin: {
    minWidth: 275,
    maxWidth: 350,
  },

  "@media (max-width: 960px)": {
    HomeCard: {
      zIndex: 1,
      borderRadius: "20px !important",
      top: "16%",
      left: "50%",

      position: "absolute",
    },
    image: {
      width: "150px",
      height: "200px",
    },
    grid1Container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },

    getStartedBtn: {
      background: "#43AFFF !important",
      width: "fit-content",
      alignItems: "flex-start",
      justifyContent: "center",
      margin: "10px 0px 0px 0px !important",
      display: "flex",
      padding: "5px 5px !important",
    },
    welcomeText: {
      fontSize: "22px !important",
    },

    grid2: {
      background: "#EDF6FF",
      display: "flex",
      flexDirection: "column !important",
      padding: "80px 20px",
    },
    displayFlex: {
      display: "flex",
      flexDirection: "column",
    },

    addMargin: {
      width: "200px",
    },
    loginPageCard: {
      zIndex: 1,
      borderRadius: "20px !important",
      top: "10%",
      left: "0%",
      width: "100%",
      position: "absolute",
    },

    showApplicants: {
      background: "#557DA526",
      borderRadius: "5px",
      height: "500px",
    },
    postedByyou: {
      color: "white",
    },
    companyImage: {
      width: "150px",
      height: "50px",
      margin: "0px 0px 20px 0px !important",
    },
    alignImage: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: "0px 0px 0px 0px !important",
    },
  },
}));
