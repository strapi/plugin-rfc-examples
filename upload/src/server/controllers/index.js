import adminController from './admin';
import apiController from './api';

export default strapi => {
  return {
    admin: adminController(strapi),
    api: apiController(strapi),
  };
};
