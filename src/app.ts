// const { getAge, getUUID } = require('./plugins/index');

// ! Referencias a archivos de lecciones
//const { emailTemplate } = require('./js-foundation/01-template');
//require('./js-foundation/02-destructuring');
//const { getUserById } = require('./js-foundation/03-callbacks');
//const { getUserById } = require('./js-foundation/04-arrow');
//const { buildMakePerson } = require('./js-foundation/05-factory');

// import { getPokemonById } from './js-foundation/06-promises.js';
// import { buildLogger } from "./plugins/logger.plugin.js";

// const logger = buildLogger('app.js');
// logger.log('Hola mundo');
// logger.error('Esto es algo malo');

// ! Uso de Promises
// const info = getPokemonById( 6 )
//   .then( ( pokemon: string ) => console.log({ pokemon }) )
//   .catch( ( err: string ) => console.error( err ) )
//   .finally( () => console.log('Finalmente') );

// ! Referencia a la funcion factory y uso
//const makePerson = buildMakePerson({ getUUID, getAge });

//const obj = { name: 'John', birthdate: '2006-08-14' };

//const john = makePerson( obj );

//console.log({ john });

// ! Primeras lecciones

//console.log(emailTemplate);

//const id = 1;

// ! Forma propia de funciones de Flecha, uso de Promises
/*getUserById(id).then(user => {
    console.log({user});
})
.catch(error => {
    console.log(error);
});*/

// ! Forma del curso de funciones de flecha, uso de callbacks
/*getUserById( id, ( error, user ) => {

    if ( error ) {
        throw new Error ( error );
    }

    console.log({user});
});*/