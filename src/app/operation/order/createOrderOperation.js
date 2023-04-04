module.exports = ({ orderService }) => ({
  execute: async (data) => {
    // orderService.checksAlreadyExists(cpf)
    // const order = createOrderFactory.build(data)
    const response = await orderService.create(data);
    return response;
  }
});
