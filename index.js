import daos from './contenedores/daos/index.js';

(async () => {
   
   
    const { productoDAO } = await daos();
    
    console.log(productoDAO);

    //create
   /*  await productoDAO.save({
        nombre: "TROMBON A LLAVES CONN CON TERMINACIÓN EN LACA DORADA",
        descripcion: "Trombón a llaves Conn - Origen: Alemania",
        precio: 54000, 
        urlfoto: "../assets/images/flauta-traversa-conn.jpg",
        stock: 3
   }); */

    //read
    // console.log(await productoDAO.findAll());
   
    //console.log(await productoDAO.findById('63698fe6c813fd346a8c49ed'));


    //update
   /* await productoDAO.update({
            _id: '6CiQbJGJA2Z82aNf6JyO',
            nombre: "TROMBON A LLAVES CONN CON TERMINACIÓN EN LACA DORADA",
            descripcion: "Trombón a llaves Conn - Origen: Alemania",
            precio: 65000, 
            urlfoto: "../assets/images/flauta-traversa-conn.jpg",
            stock: 3
    });
 */


    //delete
    console.log(await productoDAO.deleteById('6CiQbJGJA2Z82aNf6JyO'));
    

})();
