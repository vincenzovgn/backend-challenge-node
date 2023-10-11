module.exports = ({ createCostumer, checksAlreadyExistsCostumer }) => ({
  execute: async (data) => {
    checksAlreadyExistsCostumer.execute(cpf);
    // const costumer = createCostumerFactory.build(data)
    const response = await createCostumer.execute(data);
    return response;
  }
});
