const express = require('express');
const apiRouter = express.Router();

module.exports = ({ healthCheckMiddleware, costumerController }) => {
  apiRouter.use(express.json());
  apiRouter.use(express.urlencoded({ extended: true }));

  apiRouter.use('/costumers', costumerController.router);
  apiRouter.use('/health-check', healthCheckMiddleware);

  apiRouter.use((err, req, res, next) => {
    console.log('stack::: ', err);
    return res.status(500).json(err);
  });
  return apiRouter;
};
