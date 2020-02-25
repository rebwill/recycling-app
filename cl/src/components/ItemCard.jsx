import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500,
    marginLeft: "auto",
    marginRight: "auto"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const ItemCard = props => {
  const classes = useStyles();

  // const item = props.currentItem;
  console.log(props.currentItem);

  return (
    <Card className={classes.root}>
      <CardContent>
        {/* <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="h2">
          {props.currentItem.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.currentItem.category}
        </Typography>

        {/* Is it recyclable? */}
        <Typography variant="body2" component="p">
          <strong>Recyclable?</strong>
          <br />
          {props.currentItem.recyclable == true ? <p>✅ Yes!</p> : <p>❌ No</p>}
        </Typography>

        {/* Display item description, if it has one */}
        {props.currentItem.description ? (
          <Typography variant="body2" component="p">
            <strong>Description:</strong>
            <br />
            {props.currentItem.description}
            <br /> <br />
          </Typography>
        ) : null}

        {/* Display cleanAlert, if it has one */}
        {props.currentItem.cleanAlert ? (
          <Typography variant="body2" component="p">
            <strong>
              ⚠️ Watch out! This can only be recycled if it is empty, clean,
              dry, and free from food, drink, and oil residue. Make sure you
              clean before recycling!
            </strong>
            <br /> <br />
          </Typography>
        ) : null}

        {/* Display alternate disposal method, if it has one */}
        {props.currentItem.otherDisposal ? (
          <Typography variant="body2" component="p">
            <strong>Disposal:</strong>
            <br />
            {props.currentItem.otherDisposal}
            <br /> <br />
          </Typography>
        ) : null}

        {/* Display disposal tip, if it has one */}
        {props.currentItem.tip ? (
          <Typography variant="body2" component="p">
            <strong>Tip:</strong>
            <br />
            {props.currentItem.tip}
            <br /> <br />
          </Typography>
        ) : null}
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
