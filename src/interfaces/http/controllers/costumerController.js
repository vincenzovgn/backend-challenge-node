const { Router } = require('express');
const Status = require('http-status');

module.exports = ({ createCostumerOperation }) => ({
  createCostumer: async (req, res, next) => {
    try {
      await createCostumerOperation.execute(req.body);
      return res.status(Status.CREATED).end();
    } catch (error) {
      next(error);
    }
  },

  get router() {
    return Router().post('/', this.createCostumer);
  }
});
