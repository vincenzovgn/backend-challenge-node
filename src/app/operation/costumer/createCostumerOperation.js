module.exports = ({ costumerService }) => ({
  execute: async (data) => {
    // costumerService.checksAlreadyExists(cpf)
    // const costumer = createCostumerFactory.build(data)
    const response = await costumerService.create(data);
    return response;
  }
});
