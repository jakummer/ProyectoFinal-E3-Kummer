//import admin from 'firebase-admin'

import FirebaseDetails from './config.js'
import ContenedorMongo from "./contenedores/contenedorMongo.js";
import DAOProductoMongo from './contenedores/daos/productos/DAOProductoMongo.js';



(async () => {
    const productoMongo = new DAOProductoMongo();
    console.log(await productoMongo.findAll());

// });


// console.log(await productoMongo.save({
//     nombre: "FLAUTA TRAVERSA CONN CON TERMINACIÓN EN LACA PLATEADA",
//     descripcion: "Flauta Traversa Conn en Plateado - Origen: EEUU",
//     precio: 1700, 
//     urlfoto: "../assets/images/flauta-traversa-conn.jpg",
//     stock: 3
// }));


//console.log(await productoMongo.findById('63615381c874c1701b9161fc'));
//console.log(await productoMongo.findAll());
//console.log(await productoMongo.deleteById('63615381c874c1701b9161fc'));
// console.log(await productoMongo.update({
// _id: '635efa5c9024227b9ed578ac',
// nombre: "TROMPETA YAMAHA BB CON TERMINACIÓN EN LACA DORADA",
// descripcion: "Trompeta Yamaha Bb  en Dorado - Origen: Japon",
// precio: 2800,
// urlfoto: "../assets/images/trompeta-yamaha-en-bb-con-terminacion-en-laca-dorada.…",
// stock: 12
// }));



})();




//console.log(await productoMongo.save({name: 'José', pokemon: []}));



// (async () => {
// admin.initializeApp({
// credential: admin.credential.cert(FirebaseDetails),
// databaseURL:' https://ecommerce-6bfd3.firebaseio.com',

// });


// console.log('conectados');

// const db = admin.firestore();

// const Productos = db.collection('productos');


// //CRUD


// //CREATE
// // await Productos.add(
// //     {
// //         idProd: "I1000",
// //         timestamp: 1665242690384,
// //         nombre: "GUITARRA CLASICA VALENCIA DE ESTUDIO TAMAÑO MINI (22) C102 COLOR NATURAL",
// //         descripcion: "Origen China - Cuerdas 6 - Tipo Equalizador: No - Corte: No - Mano: Diestro - Accesorio Incluido: No",
// //         precio: "20.748",
// //         urlfoto: "../assets/images/guitarra-clasica-valencia-de-estudio-tamano-mini-22-vc102-color-natural.jpg",
// //         stock: 15
// //     });


// //READ
// //Listado Total
// // const ListadoProductos = await Productos.get();
// // ListadoProductos.forEach((doc) => console.log({id: doc.id, ...doc.data() }));


// //Listado por Producto
// // const Producto = await Productos.doc('PueSmqBJ9cUIMqIRLmu7').get()
// // console.log({id: Producto.id, ...Producto.data() });



// //UPDATE
// //await Productos.doc('57PpQ2FsLHW9lPE6xUSy').update({precio : "28.400"});

// //DELETE
// await Productos.doc('57PpQ2FsLHW9lPE6xUSy').delete();


// })();