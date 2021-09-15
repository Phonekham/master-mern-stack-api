const slugify = require("slugify");

const Product = require("../models/product");

exports.create = async (req, res) => {
  try {
    req.body.slug = slugify(req.body.title);
    const newProduct = await new Product(req.body).save();
    res.json(newProduct);
  } catch (err) {
    console.log(err);
    res.status(400).send("Create product failed");
  }
};
