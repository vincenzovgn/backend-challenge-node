const awilix = require('awilix');
const container = awilix.createContainer();

const Config = require('../config');
const Server = require('./interfaces/http/Server');
const Application = require('./app/application');

container
  .register({
    config: awilix.asValue(Config),
    container: awilix.asValue(container),
    server: awilix.asClass(Server).singleton(),
    application: awilix.asClass(Application).singleton()
  })
  .loadModules([], {
    resolverOptions: {
      injectionMode: awilix.InjectionMode.PROXY,
      lifetime: awilix.Lifetime.SINGLETON
    }
  })

  .loadModules([], {
    formatName: 'camelCase',
    resolverOptions: {
      injectionMode: awilix.InjectionMode.PROXY,
      lifetime: awilix.Lifetime.SINGLETON
    }
  });

module.exports = container;
