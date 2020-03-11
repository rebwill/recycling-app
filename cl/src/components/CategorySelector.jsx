import React, { useState } from "react";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";

import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles(theme => ({
  card: {
    color: "#282c34",
    minWidth: "200px",
    maxWidth: "40vw",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "1rem",
    marginTop: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    // borderRadius: "30px",
    textAlign: "left",
    clipPath:
      "polygon( 0% 20px, 20px 0%, calc(100% - 20px) 0%, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px) )",
    // "polygon( 0% 10px, 10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px) )",
    // border: "8px outset #72d6b7 ",
    backgroundColor: "white",

    "& h3": {
      marginTop: 0,
      marginBottom: "1rem",
      fontFamily: "Poiret One",
      // color: "#f58b45"
      color: "black",
      fontSize: "30px"
    }
  },
  formControl: {
    width: "60%",
    textAlign: "left"
  },
  select: {
    borderRadius: "10px"
  }
}));

const CategorySelector = props => {
  const [currentCategoryChild, setCurrentCategoryChild] = useState("");
  const [displayCategory, setDisplayCategory] = useState(true);

  const classes = useStyles();

  const handleChange = event => {
    setCurrentCategoryChild(event.target.value);
    props.handleCategoryChange(event);
  };

  const categoryList = props.categories.map(category => {
    return (
      <MenuItem key={category} value={category}>
        {category}
      </MenuItem>
    );
  });

  return (
    <div>
      <Zoom
        in={displayCategory}
        style={{ transitionDelay: displayCategory ? "150ms" : "0ms" }}
      >
        <Card className={classes.card}>
          <h3>Select Category</h3>
          <FormControl className={classes.formControl}>
            <Select
              className="select"
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={currentCategoryChild}
              onChange={handleChange}
              autoWidth
            >
              {categoryList}
            </Select>
            <FormHelperText>Category</FormHelperText>
          </FormControl>
        </Card>
      </Zoom>
    </div>
  );
};

export default CategorySelector;
