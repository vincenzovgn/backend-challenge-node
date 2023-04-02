const awilix = require('awilix');
const container = awilix.createContainer();

const Config = require('../config');
const Server = require('./interfaces/http/Server');
const Application = require('./app/application');
const Router = require('./interfaces/http/router');

container
  .register({
    config: awilix.asValue(Config),
    container: awilix.asValue(container),
    server: awilix.asClass(Server).singleton(),
    application: awilix.asClass(Application).singleton(),
    router: awilix.asFunction(Router).singleton()
  })
  .loadModules(['src/interfaces/http/middlewares/**/*.js'], {
    formatName: 'camelCase',
    resolverOptions: {
      injectionMode: awilix.InjectionMode.PROXY,
      lifetime: awilix.Lifetime.SINGLETON
    }
  });

module.exports = container;
