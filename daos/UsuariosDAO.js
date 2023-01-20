import ContenedorMongoDb from "../contenedores/contenedorMongoDb.js";

class DAOUsuarios extends ContenedorMongoDb {
  constructor() {
    super("usuarios", {
      username: { type: String, required: true },
      password: { type: String, required: true },
      // 0 usuario, 1 mod, 2 admin
      rank: { type: Number, required: true, default: 0 },
      nombreapel: { type: String, required: false },
      direccion: { type: String, required: false },
      telefono: { type: String, required: false },
      mail: { type: String, required: false },
      edad: { type: String, required: false },
      fotoavatar: { type: String, required: false }
      
    });
  }
}
export default DAOUsuarios;
