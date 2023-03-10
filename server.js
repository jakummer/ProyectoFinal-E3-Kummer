import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import MongoStore from "connect-mongo";
import DAOUsuarios from "./daos/UsuariosDAO.js";
import logger from "./logger.js";
import crypto from "crypto";
import bcrypt from "bcryptjs"
//import encrypt from "./helpers/handleBcrypt.js"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
const MongoUsers = new DAOUsuarios();
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

//middleware para logear cualquier llamada
app.use((req, res, next) =>{
  logger.info(`Request ${req.method} at ${req.url}`)
  next();
}

);


app.use(
  session({
    secret: "2332ee32e3232ee32",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/sesions",
      mongoOptions,
    }),
  })
);
app.use(express.static("public"));


const { pathname: root } = new URL(".", import.meta.url);

const authMod = (req, res, next) => {
  req.session.rank >= 1
    ? next()
    : res.status(401).send({ rango: req.session.rank, error: "Acceso no autorizado" });
};
const authAdmin = (req, res, next) => {
  req.session.rank >= 2
    ? next()
    : res.status(401).send({ rango: req.session.rank, error: "Acceso no autorizado" });
};

app.get("/admin", authAdmin, (req, res) => {
  res.send("Bienvenido admin!");
});
app.get("/mod", authMod, (req, res) => {
  res.send("Bienvenido mod!");
});

// ROOT
app.get("/", (req, res) => {
  // * si existe sesion mostrar mensaje

  if (req.session.usuario) {
    res.sendFile("C:/Users/Usuario/Desktop/WebProject_JAK/programacionBE/ProyectoFinal-E3/public/dashboard.html");
  } else {
    if (req.query.error) {
      res.sendFile("C:/Users/Usuario/Desktop/WebProject_JAK/programacionBE/ProyectoFinal-E3/public/error.html");
    } else {
      res.sendFile("C:/Users/Usuario/Desktop/WebProject_JAK/programacionBE/ProyectoFinal-E3/public/login.html");
    }
  }
});


// * login de usuario
app.post("/", async (req, res) => {

  // * rango [admin, mod]
  try {
    /* const { username, password } = req.body;
    const usuario = await MongoUsers.listar(username, password);
    console.log(usuario);
    req.session.rank = usuario.rank;
    req.session.usuario = username;
    res.redirect("/"); */

    const { username, password } = req.body;
    const usuario = await MongoUsers.listarPassword(username);

    console.log(usuario.password);

    const passwordCompare = await bcrypt.compare(password, usuario.password);
    if (!passwordCompare){
      res.redirect("/?error=true");
    }
    console.log(passwordCompare);

    //const usuario = await MongoUsers.listar(username, password);
    req.session.rank = usuario.rank;
    req.session.usuario = username; 
    res.redirect("/");


  } catch (e) {
    res.redirect("/?error=true");
  }
});


// * registro de usuario
app.post("/register", async (req, res) => {
/* 
const { username, password } = req.body;
  await MongoUsers.guardar({ username, password });
  req.session.usuario = username;
  req.session.rank = 0;
  res.redirect("/");  
 */
  

const { username, password, nombreapel, direccion, telefono, mail, edad, fotoavatar } = req.body;
 const passwordHash = await bcrypt.hash(password, 12);

await MongoUsers.guardar({ username, password: passwordHash, nombreapel, direccion, telefono, mail, edad, fotoavatar });

 req.session.usuario = username;
 req.session.rank = 0;
 res.redirect("/");  
 


});


app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
});

/* app.get("/primes", (req, res) => {
  const primes = [];
  const max = Number(req.query.max) || 1000;

  for (let i = 1; i < max; i++){
    if (isPrime(i)) primes.push(i);
  }
  res.json(primes);
});
 */

//verificamos todas las llamadas restantes, las que no se contemplaron arriba
app.get('*', (req, res) => {
  logger.warn(`Failed Request ${req.method} at ${req.url}`);
  res.send({error: true}).status(500);
  //next();
});





app.listen(8081, () =>
  logger.info(`*** Servidor escuchando en puerto 8081 ***`)
);

