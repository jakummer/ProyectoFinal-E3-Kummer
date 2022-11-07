import admin from 'firebase-admin';
import config from "../config.js";



class ContenedorFirebase {
	constructor() {  
            //async () => {
            admin.initializeApp({
            credential: admin.credential.cert(config.firebaseDB),
            databaseURL:' https://ecommerce-6bfd3.firebaseio.com',
            });

          /*   const db = admin.firestore();
            const productos = db.collection('productos'); */
        }
    
   

       // * create
        async save(newDoc){
            const db = admin.firestore();
            const productos = db.collection('productos');
        
            try {
            const doc = await productos.add(newDoc);
            return doc;
        
            }catch(e){
                throw new Error(e); 
            }

        }

        //* read
        // listado total
        async findAll(){
            try {
            const db = admin.firestore();
            const productos = db.collection('productos');

            const ListadoProductos = await productos.get();
            ListadoProductos.forEach((doc) => console.log({id: doc.id, ...doc.data() }));
            }catch(e){
                throw new Error(e);   
            }
        }

        // listado por producto
        async findById(id){
            try {
            const db = admin.firestore();
            const productos = db.collection('productos');

            const producto = await productos.doc(id).get();
            console.log({ id: producto.id, ...producto.data() });

            const data = await this.db.findOne({_id:id});
            return data;

            }catch(e){
                throw new Error(e);   
            }
        }


        //* update
        async update(elem){
            try {
            
            // const productoUpdate = await productos.doc(id).update({precio : "65800"});
            // const producto = await productos.doc(id).get();
            // console.log({id: producto.id, ...producto.data() });


            const db = admin.firestore();
            const productos = db.collection('productos');

            const productoUpdate = await productos.doc(elem._id).update({
                //_id: elem.id,
                nombre: elem.nombre,
                descripcion: elem.descripcion,
                precio: elem.precio, 
                urlfoto: elem.urlfoto,
                stock: elem.stock
            
            });

            const producto = await productos.doc(elem._id).get();
            console.log({_id: producto._id, ...producto.data() });
     

            }catch(e){
                throw new Error(e);   
            }
        }


        //* delete
        async deleteById(id){
            try {
                const db = admin.firestore();
                const productos = db.collection('productos');

                const producto = await productos.doc(id).delete();
                //return nDeleted > 0;

            }catch(e){
                throw new Error(e);
            }

            }

}

export default ContenedorFirebase;

