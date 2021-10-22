import React from 'react';
import DesktopMenu from './DesktopMenu';
import useStyles from './Header.styles';

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.headerRoot}>
      <DesktopMenu />
    </div>
  );
};

export default Header;