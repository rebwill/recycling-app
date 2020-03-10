import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  textContainer: {
    // maxWidth: "75%",
    textAlign: "center",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "120px",
    backgroundColor: "transparent"
  },
  textHeadline: {
    textAlign: "center"
  }
}));

const HomePageText = props => {
  const classes = useStyles();

  return (
    <div className={classes.textContainer}>
      <h2 className={classes.textHeadline}>
        Find out what you can and cannot recycle in Miami Dade County.
      </h2>
      {/* <h3>It's low-key impossible.</h3>
      <p>
        There are some lists, but they're not easy to search. Use this handy
        tool to figure out if you can recycle a certain item, and if not, how to
        dispose of it. Happy trashing!
      </p> */}
    </div>
  );
};

export default HomePageText;
