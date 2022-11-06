import ContenedorFirebase from "../../contenedorFirebase.js";


class DAOProductoFirebase extends ContenedorFirebase {

 
        constructor(){
            super("productos", {
            nombre: String,
            descripcion: String,
            precio: Number,
            urlfoto: String,
            stock: Number
        });


    
}
}


export default DAOProductoFirebase;