module.exports = ({ orderRepository, exceptions }) => ({
  create: async (data) => {
    try {
      const response = await orderRepository.create(data);
      return response;
    } catch (error) {
      console.log(error);
      throw exceptions.internalError(JSON.stringify(error.errors));
    }
  }
});
