import React, { useState } from "react";

import DOMpurify from "dompurify";

import { makeStyles, withTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Zoom from "@material-ui/core/Zoom";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  // root: {
  //   minWidth: 275,
  //   maxWidth: 500,
  //   marginLeft: "auto",
  //   marginRight: "auto"
  // },
  // bullet: {
  //   display: "inline-block",
  //   margin: "0 2px",
  //   transform: "scale(0.8)"
  // },
  // title: {
  //   fontSize: 14
  // },
  // pos: {
  //   marginBottom: 12
  // }
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
    paddingLeft: "1rem",
    paddingRight: "1rem",
    // borderRadius: "30px",
    textAlign: "left",
    "& h3": {
      marginTop: 0,
      marginBottom: "1rem",
      fontFamily: "Limelight",
      color: "#f98dc9"
    },
    // border: "8px outset #f98dc9",
    clipPath:
      "polygon( 0% 20px, 20px 0%, calc(100% - 20px) 0%, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px) )",
    backgroundColor: "white"
  },
  header: {
    textAlign: "left",
    marginRight: "auto"
    // borderBottom: "1px solid grey"
  },
  formControl: {
    width: "60%",
    textAlign: "left"
  },
  select: {
    borderRadius: "10px"
  },
  avatarTrue: {
    backgroundColor: "green"
  },
  avatarFalse: {
    backgroundColor: red[500]
  }
});

const ItemCard = props => {
  const classes = useStyles();

  const [displayCard, setDisplayCard] = useState(true);

  // const item = props.currentItem;
  console.log(props.currentItem);

  return (
    <Zoom
      in={displayCard}
      style={{ transitionDelay: displayCard ? "150ms" : "0ms" }}
    >
      <Card className={classes.card} elevation={3}>
        {/* <CardHeader
          className={classes.header}
          avatar={
            props.currentItem.recyclable == true ? (
              <Avatar aria-label="recyclable" className={classes.avatarTrue}>
                ✓
              </Avatar>
            ) : (
              <Avatar aria-label="recyclable" className={classes.avatarFalse}>
                X
              </Avatar>
            )
          }
          title={
            props.currentItem.recyclable == true ? (
              <h3>¡Dale! Recycle that.</h3>
            ) : (
              <h3>You can't recycle that, bro.</h3>
            )
          }
          // title={props.currentItem.name}
          // subheader={props.currentItem.category}
        /> */}
        <CardContent>
          <Typography className="recyclableHeading">
            {props.currentItem.recyclable == true ? (
              <h3>♻️ ¡DALE! RECYCLE THAT.</h3>
            ) : (
              <h3>❌ YOU CAN'T RECYCLE THAT, BRO.</h3>
            )}
          </Typography>
          <Typography variant="h5" component="h2">
            {props.currentItem.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.currentItem.category}
            <br /> <br />
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
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMpurify.sanitize(props.currentItem.otherDisposal)
                }}
              />
              <br />
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
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </Zoom>
  );
};

export default ItemCard;
