
import DAOProductoMongo from './contenedores/daos/productos/DAOProductoMongo.js';
import DAOProductoFirebase from './contenedores/daos/productos/DAOProductoFirebase.js';


//* MONGO
//* create
// (async () => {
//     const productoMongo = new DAOProductoMongo();
//     console.log(await productoMongo.findAll());


// console.log(await productoMongo.save({
//     nombre: "FLAUTA TRAVERSA CONN CON TERMINACIÓN EN LACA PLATEADA",
//     descripcion: "Flauta Traversa Conn en Plateado - Origen: EEUU",
//     precio: 1700, 
//     urlfoto: "../assets/images/flauta-traversa-conn.jpg",
//     stock: 3
// }));

//* read
//console.log(await productoMongo.findAll());
//console.log(await productoMongo.findById('63615381c874c1701b9161fc'));

//* update
// console.log(await productoMongo.update({
// _id: '635efa5c9024227b9ed578ac',
// nombre: "TROMPETA YAMAHA BB CON TERMINACIÓN EN LACA DORADA",
// descripcion: "Trompeta Yamaha Bb  en Dorado - Origen: Japon",
// precio: 2800,
// urlfoto: "../assets/images/trompeta-yamaha-en-bb-con-terminacion-en-laca-dorada.…",
// stock: 12
// }));


//* delete
//console.log(await productoMongo.deleteById('63615381c874c1701b9161fc'));

// })();




//* FIREBASE
//* create
/* (async () => {
 
    const productoFirebase = new DAOProductoFirebase();
    console.log(await productoFirebase.save({
             nombre: "FLAUTA TRAVERSA CONN CON TERMINACIÓN EN LACA DORADA",
             descripcion: "Flauta Traversa Conn en Plateado - Origen: Alemania",
             precio: 34000, 
             urlfoto: "../assets/images/flauta-traversa-conn.jpg",
             stock: 3
        }));
        
})(); */


//* read
// listado total
/* (async () => {
    const productoFirebase = new DAOProductoFirebase();
    console.log(await productoFirebase.findAll());

 
})(); */

// listado por id producto
/* (async () => {
    const productoFirebase = new DAOProductoFirebase();
    console.log(await productoFirebase.findById('DbTLAp7yyGHxz8eyVx5b'));

 
})(); */

//* update
/* (async () => {
    const productoFirebase = new DAOProductoFirebase();
    console.log(await productoFirebase.updateById('DbTLAp7yyGHxz8eyVx5b'));

 
})();  */