module.exports = ({ costumerRepository, exceptions }) => ({
  execute: async (data) => {
    try {
      const response = await costumerRepository.create(data);
      return response;
    } catch (error) {
      console.log(error);
      throw exceptions.internalError(JSON.stringify(error.errors));
    }
  }
});
