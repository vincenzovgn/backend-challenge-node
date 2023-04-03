const Product = require('../../../domain/entities/Product');

const ProductMapper = {
  toEntity({ dataValues }) {
    // format retrieved order data from database to Entity
    return new Product({ ...dataValues }).toJSON();
  },

  toDatabase(Product) {
    const leanObj = JSON.stringify(Product);
    const obj = JSON.parse(leanObj);
    return obj;
  }
};

module.exports = () => ProductMapper;
