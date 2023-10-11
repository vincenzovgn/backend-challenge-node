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

  async findByCpf(cpf) {
    const query = { where: { cpf } };
    const databaseResource = await this.ResourceModel.find(query);
    const entity = this.ResourceMapper.toEntity(databaseResource);
    console.log('entity:: ', entity);
    return entity;
  }
}

module.exports = CostumerRepository;
