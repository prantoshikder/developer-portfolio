import { AppBar, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const useStyles = makeStyles((theme) => ({
  headerRoot: {
    backgroundColor: "rgba(10, 25, 41, 0.72)",
  },
}));

const Header = () => {
  const classes = useStyles();
  const mobileView = useMediaQuery("(max-width:800px)");

  return (
    <div>
      <AppBar position="static" className={classes.headerRoot}>
        {mobileView ? <MobileMenu /> : <DesktopMenu />}
      </AppBar>
    </div>
  );
};

export default Header;
