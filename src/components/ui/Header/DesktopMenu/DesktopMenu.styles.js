import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {},
  headerBottomToolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoWrapper: {
    "& h4": {
      fontSize: "1.6rem",
      fontWeight: "700",
      color: "#fff"
    },
    "& span": {
      color: "rgb(51, 153, 255)"
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menuTab: {},
  menuItem: {
    opacity: 1,
    minWidth: "1rem",
    fontSize: "13px",
    color: "#fff !important",
    textTransform: "capitalize !important",
    transition: "all 0.3s ease",
    "&.Mui-selected": {
      color: "rgb(51, 153, 255) !important",
    },
    "&:hover": {
      color: "rgb(51, 153, 255) !important",
    },
    "&:last-child": {
      paddingRight: "0rem"
    },
  },
}))

export default useStyles;
