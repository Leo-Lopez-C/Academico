import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: true,
  api:"https://localhost:7001/api/v1/"
};
