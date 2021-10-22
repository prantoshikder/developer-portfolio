import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  heroArea: {
    // padding: "6rem 0rem",
    height: "30rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heroContainer: {},
  profileImage: {
    width: "20rem",
    height: "20rem",
    float: "right",
    "& img": {
      height: "100%",
      width: "100%",
      borderRadius: "50%",
      padding: "0.4rem",
      backgroundColor: "rgb(51, 153, 255)",
      objectFit: "cover",
    }
  },
  heroContent: {
    float: "left",
    "& h4": {
      color: "#fff",
      fontSize: "2rem",
      fontWeight: "500",
    },
    "& h1": {
      color: "#fff",
      fontSize: "3.5rem",
      fontWeight: "700",
      textTransform: "capitalize",
      paddingBottom: "1rem",
    },
    "& span": {
      color: "rgb(51, 153, 255)"
    },
    "& p": {
      color: "#fff",
      lineHeight: "2rem",
      fontSize: "1rem",
    },
  },
  socialMedia: {
    marginTop: "2rem",
    display: "flex",

    "& svg": {
      color: "rgb(51, 153, 255)",
      marginRight: "1rem",
    },

    "&::before": {
      content: '""',
      top: 5,
      left: 0,
      height: "0.2rem",
      width: "5rem",
      backgroundColor: "#fff",
      marginTop: "0.6rem",
      marginRight: "1.5rem",
    }
  },
}))

export default useStyles;
