module.exports = ({ costumerRepository, exceptions }) => ({
  execute: async (cpf) => {
    try {
      const response = await costumerRepository.findByCpf(cpf);
      return response;
    } catch (error) {
      console.log(error);
      throw exceptions.internalError(JSON.stringify(error.errors));
    }
  }
});
