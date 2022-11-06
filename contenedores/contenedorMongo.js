import mongoose from "mongoose";
import config from "../config.js"


await mongoose.connect(config.mongoDB.uri, config.mongoDB.options);
class ContenedorMongo {
	constructor(coleccion, esquema) {
		this.db = mongoose.model(coleccion, esquema);
}



//* create
async save(newDoc){
	try {
        const doc = await this.db.create(newDoc);
        return doc;
    }catch(e){
        throw new Error(e);
    }
}


//* read
// listado total
async findAll(){
	try {
        const data = await this.db.find({});
        return data;
    }catch(e){
        throw new Error(e);
    }
    
}

//listado por producto
async findById(id){
    try {
        const data = await this.db.findOne({_id:id});
        return data;
    }catch(e){
        throw new Error(e);
    }
    
}


//* update
async update(elem){
    try {
        await this.db.replaceOne({_id: elem._id}, elem);
        return elem;
        
    }catch(e){
        throw new Error(e);
    }
}


//* delete
async deleteById(id){
    try {
        const {n, nDeleted} = await this.db.deleteOne({_id: id});
        return nDeleted > 0;
    }catch(e){
        throw new Error(e);
    }

}


async deleteAll() {
    try {
        await this.db.deleteMany({});
        
    }catch(e){
        throw new Error(e);
    }

    
}


}


export default ContenedorMongo;