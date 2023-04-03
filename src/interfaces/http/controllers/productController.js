const { Router } = require('express');
const Status = require('http-status');

module.exports = ({ createProductOperation }) => ({
  createProduct: async (req, res, next) => {
    try {
      await createProductOperation.execute(req.body);
      return res.status(Status.CREATED).end();
    } catch (error) {
      next(error);
    }
  },

  get router() {
    return Router().post('/', this.createProduct);
  }
});
