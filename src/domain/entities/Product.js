const { attributes } = require('structure');

const types = {
  Required_String: {
    type: String,
    required: true
  }
};

const Product = attributes({
  id: Number,
  name: { ...types.Required_String },
  active: Boolean
})(class Product {});

module.exports = Product;
