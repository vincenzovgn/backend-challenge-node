const awilix = require('awilix');
const container = awilix.createContainer();

const Config = require('../config');
const Server = require('./interfaces/http/Server');
const Application = require('./app/application');
const Router = require('./interfaces/http/Router');
const sequelize = require('./infra/database/models');
// const Exception = require('./infra/errors/Exceptions');

container
  .register({
    config: awilix.asValue(Config),
    container: awilix.asValue(container),
    server: awilix.asClass(Server).singleton(),
    application: awilix.asClass(Application).singleton(),
    router: awilix.asFunction(Router).singleton(),
    sequelize: awilix.asFunction(sequelize).singleton()
    // exception: awilix.asFunction(Exception)
  })
  .loadModules(
    [
      'src/interfaces/http/middlewares/**/*.js',
      'src/interfaces/http/controllers/**/*.js',
      'src/app/operation/**/*.js',
      'src/app/services/**/*.js',
      'src/infra/repositories/**/*.js',
      'src/infra/errors/**/*.js'
    ],
    {
      formatName: 'camelCase',
      resolverOptions: {
        injectionMode: awilix.InjectionMode.PROXY,
        lifetime: awilix.Lifetime.SINGLETON
      }
    }
  );

module.exports = container;
