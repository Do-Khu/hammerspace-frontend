export const environment = {
  production: true
};

const PORT = 5000;
const HOST_DNS = 'localhost';
const ROOT_PATH = 'api';

export const httpUrl = `http://${HOST_DNS}:${PORT}/${ROOT_PATH}`;