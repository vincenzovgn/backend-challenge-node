const Repository = require('../Repository');

class ProductRepository extends Repository {
  /**
   * @param {Object} container - Dependency Injection.
   */
  constructor({ sequelize, productMapper, exceptions }) {
    const { Product } = sequelize.models;
    super({
      ResourceModel: Product,
      ResourceMapper: productMapper,
      Exceptions: exceptions
    });
  }
}

module.exports = ProductRepository;
