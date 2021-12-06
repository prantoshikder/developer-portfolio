import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  menuWrapper: {
    top: "1.8rem",
    marginTop: 10,
    color: "#FFF",
    display: "flex",
    justifyContent: "space-between",

    "@media (max-width: 577px)": {
      marginTop: 5,
    },
  },
  logoWrapper: {
    "& h4": {
      fontSize: "1.6rem",
      fontWeight: "700",
      color: "#fff",
    },
    "& span": {
      color: "rgb(51, 153, 255)",
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  closeIconWrapper: {
    backgroundColor: "#063B52",
    padding: "1rem",
    boxShadow: "0px 0px 50px 50px #042C3D",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuIcon: {
    fontSize: "2rem",
    cursor: "pointer",
    color: "#FFF",

    "@media (max-width: 577px)": {
      fontSize: "3rem",
    },
  },
  closeIcon: {
    fontSize: "2rem",
    cursor: "pointer",
    color: "#FFF",
  },
}));

export default useStyles;
