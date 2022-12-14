const { Product } = require("../../models");

const add = async (req, res) => {
  const result = await Product.create(req.body);
  res.status(201).json({
    status: "succes",
    code: 201,
    message: "New product added",
    data: result,
  });
};

module.exports = add;
