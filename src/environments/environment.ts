import { EstablishmentService } from 'src/app/infrastructure/json-server';

export const environment = {
  production: false,
  envName: 'dev',
  firebase: {
    projectId: 'lasanha-db',
    appId: '1:2728048523:web:a03cb1242894dcf724618e',
    storageBucket: 'lasanha-db.appspot.com',
    apiKey: 'AIzaSyBq6q_HBkbog3IRdT6vcDg1ZI2JZNSs7D8',
    authDomain: 'lasanha-db.firebaseapp.com',
    messagingSenderId: '2728048523',
  },
  buscaCepUrl: '/api',
  assetsUrl: '',
  dependencies: {
    establishmentService: EstablishmentService,
  },
};
