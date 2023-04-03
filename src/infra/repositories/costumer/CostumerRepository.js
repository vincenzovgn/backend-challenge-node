const Repository = require('../Repository');

class CostumerRepository extends Repository {
  /**
   * @param {Object} container - Dependency Injection.
   */
  constructor({ sequelize, costumerMapper, exceptions }) {
    const { Costumer } = sequelize.models;
    super({
      ResourceModel: Costumer,
      ResourceMapper: costumerMapper,
      Exceptions: exceptions
    });
  }
}

module.exports = CostumerRepository;
