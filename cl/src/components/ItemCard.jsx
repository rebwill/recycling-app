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
      fontFamily: "Poiret One",
      // color: "#f98dc9"
      color: "black",
      fontSize: "30px"
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
  cleanAlert: {
    backgroundColor: "pink",
    // borderRadius: "15px",
    padding: "0.5rem"
  },
  cardInfo: {
    marginBottom: "1rem",
    fontFamily: "Roboto"
  },
  itemName: {
    fontSize: "1.5rem",
    marginBottom: "1rem"
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
        <CardContent>
          {/* Recyclable? */}
          <Typography className="recyclableHeading">
            {props.currentItem.recyclable == true ? (
              <h3>♻️ ¡Dale! Recycle that.</h3>
            ) : (
              <h3>❌ Bro. You can't recycle that.</h3>
            )}
          </Typography>

          {/* Name and category
          <Typography variant="h5" component="h2">
            {props.currentItem.name}
          </Typography>
          <Typography className={classes.cardInfo} color="textSecondary">
            <span>{props.currentItem.category}</span>
          </Typography> */}

          {/* Name */}
          <Typography className={classes.itemName}>
            <strong>{props.currentItem.name}</strong>
          </Typography>

          {/* Category
          <Typography className={classes.cardInfo} color="textSecondary">
            <span>{props.currentItem.category}</span>
          </Typography> */}

          {/* Display item description, if it has one */}
          {props.currentItem.description ? (
            <Typography
              variant="body2"
              component="p"
              className={classes.cardInfo}
            >
              <strong>Description:</strong>
              <br />
              <span>{props.currentItem.description}</span>
            </Typography>
          ) : null}

          {/* Display alternate disposal method, if it has one */}
          {props.currentItem.otherDisposal ? (
            <Typography
              variant="body2"
              component="p"
              className={classes.cardInfo}
            >
              <strong>Disposal: </strong>
              <br />
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMpurify.sanitize(props.currentItem.otherDisposal)
                }}
              />
            </Typography>
          ) : null}

          {/* Display cleanAlert, if it has one */}
          {props.currentItem.cleanAlert ? (
            <Typography
              variant="body2"
              component="p"
              className={classes.cardInfo}
            >
              <div className={classes.cleanAlert}>
                <strong> ⚠️ Alert!</strong> This can only be recycled if it is
                empty, clean, dry, and free from food, drink, and oil residue.
                Make sure you clean before recycling!
              </div>
            </Typography>
          ) : null}

          {/* Display disposal tip, if it has one */}
          {props.currentItem.tip ? (
            <Typography variant="body2" component="p">
              <strong>Tip:</strong>
              <br />
              {/* <span>{props.currentItem.tip}</span> */}
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMpurify.sanitize(props.currentItem.tip)
                }}
              />
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
