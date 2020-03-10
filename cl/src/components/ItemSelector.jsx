import React, { useState, useEffect } from "react";

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
    minWidth: "200px",
    maxWidth: "40vw",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2rem",
    marginBottom: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    // borderRadius: "30px",
    textAlign: "left",
    "& h3": {
      marginTop: 0,
      marginBottom: "1rem",
      fontFamily: "Poiret One",
      // color: "#41a4d9"
      color: "black",
      fontSize: "30px"
    },
    // border: "8px outset #76d7f5",
    clipPath:
      "polygon( 0% 20px, 20px 0%, calc(100% - 20px) 0%, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px) )",
    backgroundColor: "white"
  },
  formControl: {
    width: "60%",
    textAlign: "left"
  },
  select: {
    borderRadius: "10px"
  }
}));

const ItemSelector = props => {
  const [currentItemChild, setCurrentItemChild] = useState("");
  const [displayItem, setDisplayItem] = useState(true);

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
      <Zoom
        in={displayItem}
        style={{ transitionDelay: displayItem ? "150ms" : "0ms" }}
      >
        <Card className={classes.card} elevation={3}>
          <h3>Select Item</h3>
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
        </Card>
      </Zoom>
    </div>
  );
};

export default ItemSelector;
