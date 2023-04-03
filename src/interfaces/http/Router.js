const express = require('express');
const apiRouter = express.Router();

module.exports = ({ healthCheckMiddleware, costumerController, productController }) => {
  apiRouter.use(express.json());
  apiRouter.use(express.urlencoded({ extended: true }));

  apiRouter.use('/costumers', costumerController.router);
  apiRouter.use('/products', productController.router);
  apiRouter.use('/health-check', healthCheckMiddleware);

  apiRouter.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json(err);
  });
  return apiRouter;
};
