import ContenedorMongo from "../../contenedorMongo.js";

class DAOProductoMongo extends ContenedorMongo {

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

export default DAOProductoMongo;