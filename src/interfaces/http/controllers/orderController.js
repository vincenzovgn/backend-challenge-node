const { Router } = require('express');
const Status = require('http-status');

module.exports = ({ createOrderOperation }) => ({
  createOrder: async (req, res, next) => {
    try {
      await createOrderOperation.execute(req.body);
      return res.status(Status.CREATED).end();
    } catch (error) {
      next(error);
    }
  },

  get router() {
    return Router().post('/', this.createOrder);
  }
});
