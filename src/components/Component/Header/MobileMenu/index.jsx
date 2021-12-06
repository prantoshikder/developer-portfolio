import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Container, Drawer, MenuItem, MenuList, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "./MobileMenu.style";

const MobileMenu = () => {
  const classes = useStyles();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setOpenMobileMenu(true);
  };

  return (
    <>
      <Container className={classes.menuWrapper}>
        <Button component={Link} to="/" className={classes.logoWrapper} disableRipple>
          <Typography variant="h4">
            pranto <span>shikder</span>
          </Typography>
        </Button>

        <MenuIcon onClick={handleMobileMenu} className={classes.menuIcon} />
      </Container>

      <Drawer anchor="left" classes={{ paper: classes.paper }} open={openMobileMenu} onClose={() => setOpenMobileMenu(false)}>
        <div className={classes.closeIconWrapper}>
          <CloseIcon onClick={() => setOpenMobileMenu(false)} className={classes.closeIcon} />
          <Button component={Link} to="/" className={classes.logoWrapper} disableRipple>
            <Typography variant="h4">
              pranto <span>shikder</span>
            </Typography>
          </Button>
        </div>
        <Toolbar disableGutters className={classes.wrapperMenu}>
          <MenuList className={classes.navItems}>
            <MenuItem
              // onClick={() => setOpenMobileMenu(false)}
              classes={{ selected: classes.selected }}
            >
              <Link to="/category/business-card-mockup">Business Card Mockup</Link>
            </MenuItem>

            <MenuItem
              // onClick={() => setOpenMobileMenu(false)}
              classes={{ selected: classes.selected }}
            >
              <Link to="/category/social-media-banner">Social Media Banner</Link>
            </MenuItem>
          </MenuList>
        </Toolbar>
      </Drawer>
    </>
  );
};

export default MobileMenu;
