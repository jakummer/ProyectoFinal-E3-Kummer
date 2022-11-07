import * as dotenv from "dotenv";
dotenv.config();
console.log(process.env.TIPO);


const daos = {
    mongo: async () => {
        const { default: DAOProductoMongo } = await import("./productos/DAOProductoMongo.js");

       return {
            productoDAO: new DAOProductoMongo(),
        }; 
    },


    firebase: async () => {
       const { default: DAOProductoFirebase } = await import("./productos/DAOProductoFirebase.js");

       return {
            productoDAO: new DAOProductoFirebase(),
        };
    },
};

 //console.log(await daos[process.env.TIPO]());

export default daos[process.env.TIPO];



