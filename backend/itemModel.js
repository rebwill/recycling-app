const mongoose = require("mongoose");

const Item = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, "An item must have a name"],
    trim: true
  },
  imageURL: {
    type: String,
    // required: [true, "An item must have an image URL"],
    trim: true
  },
  category: {
    type: String
    // required: [true, "An item must have a category"]
  },
  description: {
    type: String,
    trim: true
  },
  recyclable: {
    type: Boolean
    // required: [true, "An item must have a canBeRecycled field"]
  },
  cleanAlert: {
    type: Boolean
    // required: [true, "An item must have a cleanAlert field"]
  },
  otherDisposal: {
    type: String,
    trim: true
  },
  tip: {
    type: String,
    trim: true
  },
  image: {
    type: String
  }
});

// const TrashItem = mongoose.model("TrashItem", trashItemSchema);

module.exports = mongoose.model("Item", Item);
