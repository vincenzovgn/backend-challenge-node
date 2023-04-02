const express = require('express');
const apiRouter = express.Router();

module.exports = ({ healthCheckMiddleware }) => {
  apiRouter.use(express.urlencoded({ extended: true }));

  apiRouter.use('/health-check', healthCheckMiddleware);

  return apiRouter;
};
