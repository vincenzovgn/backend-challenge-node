module.exports = ({ productService }) => ({
  execute: async (data) => {
    // productService.checksAlreadyExists(cpf)
    // const product = createProductFactory.build(data)
    const response = await productService.create(data);
    return response;
  }
});
