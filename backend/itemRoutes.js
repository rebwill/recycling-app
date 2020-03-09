const express = require("express");
const Item = require("./itemModel");
const itemController = require("./itemController");
const app = express();
const router = express.Router();

app.get("/", async (req, res) => {
  const items = await Item.find();

  try {
    res.send(items);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
});

router
  .route("/trash")
  .get(itemController.getItems)
  .post(itemController.createItem)
  .delete(itemController.deleteAll);

router
  .route("/trash/:id")
  .get(itemController.getItem)
  .patch(itemController.updateItem)
  .delete(itemController.deleteItem);

module.exports = router;
