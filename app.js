import express from "express";
import config from "./config.js";

import proveedoresRoute from './routes/proveedores.routes.js'

const app = express();
//settings
app.set('port', config.port);

//middlewares 
app.use(express.json())
app.use(express.urlencoded({extended:false}));



app.use(proveedoresRoute)
export default app