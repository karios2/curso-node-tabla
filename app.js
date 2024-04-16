// 12.Bases del Node


//Tabla de 5 en javascript
// hacer la tabla del 5 en javascrip
/*
console.clear();
console.log('=============');
console.log('  Tabla del 5');
console.log('=============');
const j = 5;
for(i = 1;i<=10;i++){
    console.log(`${j} x ${i} = ${j * i}`);
        
}
*/



//Fswrite creando un txt
// hacer la tabla del 5 en javascrip
/*
const fs = require('fs'); // se exporta la libreria para poder hacer yso del file system
console.clear();
console.log('=============');
console.log('  Tabla del 5');
console.log('=============');
const j = 5;
let salida = '';
for(i = 1;i<=10;i++){
    salida += `${j} x ${i} = ${j * i}\n`; //la salida se concatena y se da un salto de linea.
        
}

console.log(salida);

//el file system para grabar un archivo. en el primer parametro
//si no se pone el path, se graba en la rireccion donde esta ejecutando.
//segundo parametro son los datos. y el tercero es un callback que recibe el error si algo sale mal.
fs.writeFile('tabla-del-5.txt' , salida, (err) => {
    if(err) throw err;
    console.log('Tabla-del-5 creado');

})
*/



//Fswrite con tabla del 3
/*
const fs = require('fs'); // se exporta la libreria para poder hacer yso del file system
console.clear();
console.log('=============');
console.log('  Tabla del 3');
console.log('=============');
const j = 3;
let salida = '';
for(i = 1;i<=10;i++){
    salida += `${j} x ${i} = ${j * i}\n`; //la salida se concatena y se da un salto de linea.
        
}

console.log(salida);

//el file system para grabar un archivo. en el primer parametro
//si no se pone el path, se graba en la rireccion donde esta ejecutando.
//segundo parametro son los datos. y el tercero es un callback que recibe el error si algo sale mal.
fs.writeFile(`tabla-del-${j}.txt` , salida, (err) => {
    if(err) throw err;
    console.log(`Tabla del ${j} Creado`);

})
*/



//tabla de multiplicar  on fs.writefilesync
/*
const fs = require('fs'); // se exporta la libreria para poder hacer yso del file system
console.clear();
console.log('=============');
console.log('  Tabla del 3');
console.log('=============');
const j = 3;
let salida = '';
for(i = 1;i<=10;i++){
    salida += `${j} x ${i} = ${j * i}\n`; //la salida se concatena y se da un salto de linea.
        
}

console.log(salida);

//el file system para grabar un archivo. en el primer parametro
//si no se pone el path, se graba en la rireccion donde esta ejecutando.
//segundo parametro son los datos. y el tercero es un callback que recibe el error si algo sale mal.
fs.writeFileSync(`tabla-del-${j}.txt` , salida);
    console.log(`Tabla del ${j} Creado`);
*/



// hacer la tabla del 5 en javascrip con ls funcion multiplicar
/*
const {crearArchivo} = require('./helper/multiplicar')
console.clear();
const j = 5;

crearArchivo(j)
    .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch( err => console.log(err));
*/


// hacer la tabla del 6 en javascrip con ls funcion multiplicar
/*
const {crearArchivo} = require('./helper/multiplicar')
console.clear();
const j = 6;

crearArchivo(j)
    .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch( err => console.log(err));
*/





//Recibiendo parametros por linea de comandos, se ejecuta con node app 

//CrearArchivo(), ejecutando  node app --j=20 en la terminal
// hacer la tabla del 5 en javascrip
/*
const {crearArchivo} = require('./helper/multiplicar')
console.clear();

console.log(process.argv);

const j = 6;

/* crearArchivo(j)
    .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch( err => console.log(err));
 */






//Desestructurando para obtener sus valores
/*
const {crearArchivo} = require('./helper/multiplicar')
console.clear();

const [ , ,arg3] = process.argv; // estamos tomando el tercer argumento.
console.log(arg3);

const j = 6;

/* crearArchivo(j)
    .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch( err => console.log(err));
 */





//imprimiendo  j a travez de terminal
/*
const {crearArchivo} = require('./helper/multiplicar')
console.clear();

const [ , ,arg3 = 'j = 5'] = process.argv; // estamos tomando el tercer argumento.
console.log(arg3);

const j = 6;

/* crearArchivo(j)
    .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch( err => console.log(err));
 */



//Imprimiendo 5 y dandole valores a j a traves de terminal usando node app y node app --j=20
/*
    const {crearArchivo} = require('./helper/multiplicar')
    console.clear();
    
    const [ , ,arg3 = 'j = 5'] = process.argv; // estamos tomando el tercer argumento.
    const[ , j ]= arg3.split( '='); //separa el string por el caracter =
    
    console.log(j);
    
    //const j = 6;
    
    /* crearArchivo(j)
        .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
        .catch( err => console.log(err));
     */
    



// Usamos la funcion crear archivo e imprimimos tabla
/*
const {crearArchivo} = require('./helper/multiplicar')
console.clear();

const [ , ,arg3 = 'j = 5'] = process.argv; // estamos tomando el tercer argumento.
const[ , j ]= arg3.split( '='); //separa el string por el caracter =

console.log(j);

crearArchivo(j)
    .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch( err => console.log(err));
*/



//Tbla de 5 javascript con yargs, imprime  los valores separados en un arreglo
/*
const {crearArchivo} = require('./helper/multiplicar');
const argv = require('yargs').argv;

console.clear();

console.log(process.argv);
console.log(argv);

//const [ , ,arg3 = 'j = 5'] = process.argv; // estamos tomando el tercer argumento.
//const[ , j ]= arg3.split( '='); //separa el string por el caracter =

//console.log(j);

/* crearArchivo(j)
    .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch( err => console.log(err)); */




//Mas especifico mostrando los yargs
// hacer la tabla del 5 en javascrip
/*
const {crearArchivo} = require('./helper/multiplicar');
const argv = require('yargs').argv;

console.clear();

console.log(process.argv);
console.log(argv);
console.log('j de yargs:', argv.j);
*/




//Ejecutando node app --base=5
/*
const {crearArchivo} = require('./helper/multiplicar');
const argv = require('yargs')
                 .option('b', {
                    alias: 'base',
                    type: 'number'

                 })   
                .argv;

console.clear();
//console.log(process.argv);
console.log(argv);
console.log('Base de yargs:', argv.b);
*/



//Haciendo obligatoria la base, ejecuta node app base --b=10
/*
const {crearArchivo} = require('./helper/multiplicar');
const argv = require('yargs')
                 .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true

                 })   
                .argv;

console.clear();

//console.log(process.argv);
console.log(argv);
console.log('Base de yargs:', argv.b);
*/



//Validando el type con el metodo check(), ejecutando node app -b=10
/*
const { option } = require('yargs');
const {crearArchivo} = require('./helper/multiplicar');
const argv = require('yargs')
                 .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true

                 }) 
                 .check((argv, options ) => {
                    if(isNaN(argv.b)){
                        throw 'La base debe ser un Numero'
                    }
                    return true;
                 })  
                .argv;

console.clear();

//console.log(process.argv);
console.log(argv);
//console.log('Base de yargs:', argv.b);

//const [ , ,arg3 = 'j = 5'] = process.argv; // estamos tomando el tercer argumento.
//const[ , j ]= arg3.split( '='); //separa el string por el caracter =

//console.log(j);

crearArchivo(argv.b)
    .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch( err => console.log(err));
*/




//Muestra en pantalla y crea archivo, para la tabla del ocho
/*
const { option } = require('yargs');
const { crearArchivo } = require('./helper/multiplicar'); // Importar la función desde el archivo multiplicar.js
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un Numero';
        }
        return true;
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false
    })
    .argv;

console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l) // Llamar a la función crearArchivo con los argumentos proporcionados
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err));

const fs = require('fs');
const { resolve } = require('path');
*/




//Codigo que importa yargs de config, genera tabla del 11
/*
const { option } = require('yargs');
const { crearArchivo } = require('./helper/multiplicar'); // Importar la función desde el archivo multiplicar.js
const argv = require('./config/yargs');

console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l) // Llamar a la función crearArchivo con los argumentos proporcionados
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err));

const fs = require('fs');
const { resolve } = require('path');
*/




//node app con colore, muestra la tabla en consola poniendo node app -b=8 -l
/*
const { option } = require('yargs');
const {crearArchivo} = require('./helper/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

//const [ , ,arg3 = 'j = 5'] = process.argv; // estamos tomando el tercer argumento.
//const[ , j ]= arg3.split( '='); //separa el string por el caracter =

crearArchivo(argv.b, argv.l)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
    .catch( err => console.log(err));
*/





//node app con colore, muestra la tabla en consola poniendo node app -b=8 -l

const { option } = require('yargs');
const {crearArchivo} = require('./helper/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

//const [ , ,arg3 = 'j = 5'] = process.argv; // estamos tomando el tercer argumento.
//const[ , j ]= arg3.split( '='); //separa el string por el caracter =

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
    .catch( err => console.log(err));















