class Repository {
  constructor({ ResourceModel, ResourceMapper, Exceptions }) {
    this.ResourceModel = ResourceModel;
    this.ResourceMapper = ResourceMapper;
    this.Exceptions = Exceptions;
  }

  async findAll(query) {
    const databaseResource = await this.ResourceModel.find(query);

    return this.ResourceMapper.toEntity(databaseResource);
  }

  async findOne(query) {
    const databaseResource = await this.ResourceModel.findOne(query).limit(1);

    return this.ResourceMapper.toEntity(databaseResource);
  }

  async create(domainEntity) {
    const resourceModel = await new this.ResourceModel(this.ResourceMapper.toDatabase(domainEntity));
    const databaseCreatedResource = await resourceModel.save();
    return this.ResourceMapper.toEntity(databaseCreatedResource);
  }

  async update(query, domainEntity) {
    try {
      const databaseUpdatedResource = await this.ResourceModel.findOneAndUpdate(query, this.ResourceMapper.toDatabase(domainEntity), {
        new: true,
        upsert: false,
        runValidators: true
      });
      return this.ResourceMapper.toEntity(databaseUpdatedResource);
    } catch (error) {
      throw new InternalServerError(error);
    }
  }

  async remove(query) {
    const databaseDeletedResource = await this.ResourceModel.findOneAndRemove(query);
    return this.ResourceMapper.toEntity(databaseDeletedResource);
  }
}
module.exports = Repository;
