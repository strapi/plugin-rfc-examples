import path from 'path';

import initControllers from './controllers';
import initServices from './services';
import routes from './controllers/routes';
import hooks from './hooks';
import middlewares from './middlewares';
import policies from './policies';

export default strapi => {
  const services = initServices(strapi);
  const controllers = initControllers(strapi);

  return {
    bootstrap() {
      strapi.logger.info('Bootstraping');
    },
    teardown() {
      // close a connection
    },
    config: strapi.loaders.loadDir(path.join(__dirname, '/config')),
    models: strapi.loaders.loadDir(path.join(__dirname, '/models')),
    routes,
    controllers,
    services,
    policies,
    middlewares,
    hooks,
  };
};
