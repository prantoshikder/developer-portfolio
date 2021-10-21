import React from 'react';
import useStyles from './Header.styles';

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.headerRoot}>
      <h1>Header</h1>
    </div>
  );
};

export default Header;