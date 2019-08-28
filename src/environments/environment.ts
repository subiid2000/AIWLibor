// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  envName: 'dev',
  apibaseUrl: 'http://marvel.southindia.cloudapp.azure.com:7002',
 // apibaseUrl: 'http://10.60.8.62:7002',
  authUserName: 'Test',
  authPassword: 'Test',
  baseUrl: 'http://localhost:4200',
  apiUrl: 'http://10.60.8.62:8080/auth/keycloak-auth-api/rest',
  keycloakRealm: 'AIwareContracts',
  keycloakClient: 'frontend',
  keycloakBaseUrl: 'http://10.60.8.62:8080/auth/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
