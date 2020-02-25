const Item = require("./itemModel");

// GET

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.send(items);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

// POST

exports.createItem = async (req, res) => {
  try {
    const newItem = await Item.insertMany(req.body);

    res.status(201).json({
      status: "success",
      data: {
        item: newItem
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

// GET ONE

exports.getItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    // id comes from the variable as defined in tourRoutes.js --> .route('/:id')
    // findById is shorthand (helper function) for Tour.findOne({ _id: req.params.id }) -- the way we searched MongoDB database locally
    res.status(200).json({
      status: "success",
      data: {
        item
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

// UPDATE ONE

exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
      // ^ return new (updated) document
    });
    // ^1st param: value of _id to query by; 2nd param: material to update with (being passed in req.body); 3rd param: several options regarding what to return, validations, etc. (see mongoose documentation on findByIdAndUpdate for this)
    res.status(200).json({
      status: "success",
      data: {
        item // same as item: item. 2nd item comes from the variable created above
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

// DELETE ONE

exports.deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    // ^we don't save this to a variable because we don't actually send anything back to the client for a delete (this is customary for REST APIs)
    res.status(204).json({
      status: "success",
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};
