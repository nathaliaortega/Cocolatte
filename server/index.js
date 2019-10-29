import express from "express";
import jwt from "express-jwt";
import cors from "cors";
import jwks from "jwks-rsa";
import jwtAuthz from "express-jwt-authz";
import bodyParser from "body-parser";
import Mongo, { ObjectID, MongoClient } from "mongodb";
import assert from "assert";

var port = process.env.PORT || 5000;

// Database Name
const dbName = "cocolatte";

// Connection URL
const url = `mongodb://cocolatte:Cocolatte123@ds131905.mlab.com:31905/cocolatte`;

// Create a new MongoClient
const client = new MongoClient(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

//Crear servidor
const app = express();

//Configurar el servidor para json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://naog27.auth0.com/.well-known/jwks.json"
  }),
  audience: "http://products",
  issuer: "https://naog27.auth0.com/",
  algorithms: ["RS256"]
});

//revisamos y validamos los scopes
const checkScopes = jwtAuthz(["read:products"]);

app.get(`/products`, (req, res) => {
    //Use connect method to connect to the Server
    client
      .connect()
      .then(serv => serv.db(dbName))
      .then(db =>
        db
          .collection("products")
          .find()
          .toArray()
      )
      .then(collection => {
        client.close();
        res.json(collection);
      });
  });

// app.get(`/business/:id`, (req, res) => {
//   //Use connect method to connect to the Server
//   client
//     .connect()
//     .then(serv => serv.db(dbName))
//     .then(db =>
//       db
//         .collection("business")
//         .find({ _id: ObjectID(req.params.id) })
//         .toArray()
//     )
//     .then(collection => {
//       client.close();
//       res.json(collection);
//     });
// });
// app.get(`/Comments/:idTo`, (req, res) => {
//   //Use connect method to connect to the Server
//   client
//     .connect()
//     .then(serv => serv.db(dbName))
//     .then(db =>
//       db
//         .collection("Comments")
//         .find({ target: req.params.idTo })
//         .toArray()
//     )
//     .then(collection => {
//       client.close();
//       res.json(collection);
//     });
// });

// app.post(`/business/`, (req, res) => {
//   client
//     .connect()
//     .then(serv => serv.db(dbName))
//     .then(db => db.collection("business").insertOne(req.body))
//     .then(collection => {
//       client.close();
//       res.json(collection);
//     });
// });
// app.post(`/Comments/`, (req, res) => {
//   client
//     .connect()
//     .then(serv => serv.db(dbName))
//     .then(db => db.collection("Comments").insertOne(req.body))
//     .then(collection => {
//       client.close();
//       res.json(collection);
//     });
// });
// app.get(`/services/:id`, (req, res) => {
//   //Use connect method to connect to the Server
//   client
//     .connect()
//     .then(serv => serv.db(dbName))
//     .then(db =>
//       db
//         .collection("services")
//         .find({ contractorId: req.params.id })
//         .toArray()
//     )
//     .then(collection => {
//       client.close();
//       res.json(collection);
//     });
// });

app.listen(port, () => {
  console.log(`Servidor funcionando
  http://localhost:${port}`);
});

// app.use(jwtCheck);

// app.get('/authorized', function (req, res) {
//     res.send('Secured Resource');
// });
