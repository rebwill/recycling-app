import React, { useState } from "react";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    color: "red"
  }
}));

const CategorySelector = props => {
  const [currentCategoryChild, setCurrentCategoryChild] = useState("");

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
      <FormControl className={classes.formControl}>
        <Select
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
    </div>
  );
};

export default CategorySelector;
