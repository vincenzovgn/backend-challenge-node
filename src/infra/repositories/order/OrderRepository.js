const Repository = require('../Repository');

class OrderRepository extends Repository {
  /**
   * @param {Object} container - Dependency Injection.
   */
  constructor({ sequelize, orderMapper, exceptions }) {
    const { Order } = sequelize.models;
    super({
      ResourceModel: Order,
      ResourceMapper: orderMapper,
      Exceptions: exceptions
    });
  }
}

module.exports = OrderRepository;
