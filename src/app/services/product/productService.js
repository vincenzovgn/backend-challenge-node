module.exports = ({ productRepository, exceptions }) => ({
  create: async (data) => {
    try {
      const response = await productRepository.create(data);
      return response;
    } catch (error) {
      console.log(error);
      throw exceptions.internalError(JSON.stringify(error.errors));
    }
  }
});
