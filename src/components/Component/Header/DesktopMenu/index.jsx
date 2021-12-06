import { Button, Container, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "./DesktopMenu.styles";

const DesktopMenu = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, index) => {
    setValue(index);
  };
  return (
    <Container className={classes.container}>
      <Toolbar disableGutters className={classes.headerBottomToolbar}>
        <Button component={Link} to="/" className={classes.logoWrapper} disableRipple>
          <Typography variant="h4">
            pranto <span>shikder</span>
          </Typography>
        </Button>

        <Tabs value={value} className={classes.menuTab} classes={{ indicator: classes.menuUnderline }} onChange={handleChange} aria-label="main navigation">
          <Tab
            className={classes.menuItem}
            disableRipple
            // component={NavLink}
            // to={`/category/sports`}
            label="About us"
          />
          <Tab
            className={classes.menuItem}
            disableRipple
            // component={NavLink}
            // to="/category/travel"
            label="Experience"
          />
          <Tab
            className={classes.menuItem}
            disableRipple
            // component={NavLink}
            // to="/category/education"
            label="Portfolio"
          />
          <Tab
            className={classes.menuItem}
            disableRipple
            // component={NavLink}
            // to="/category/music"
            label="Contact us"
          />
          <Tab
            className={classes.menuItem}
            disableRipple
            // component={NavLink}
            // to="/category/animal"
            label="Resume"
          />
        </Tabs>
      </Toolbar>
    </Container>
  );
};

export default DesktopMenu;
