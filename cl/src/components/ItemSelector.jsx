import React, { useState, useEffect } from "react";

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

const ItemSelector = props => {
  const [currentItemChild, setCurrentItemChild] = useState("");

  const classes = useStyles();

  const handleChange = event => {
    setCurrentItemChild(event.target.value);
    props.handleItemChange(event);
  };

  const itemList = props.filteredItems.map(item => {
    return (
      <MenuItem key={item._id} value={item.name}>
        {item.name}
      </MenuItem>
    );
  });

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={currentItemChild}
          onChange={handleChange}
          autoWidth
        >
          {itemList}
        </Select>
        <FormHelperText>Item</FormHelperText>
      </FormControl>
    </div>
  );
};

export default ItemSelector;
