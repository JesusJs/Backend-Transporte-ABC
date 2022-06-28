import { getConnection,sql } from "../database/connection.js";
import { queries } from "../database/querys.js";

export const getTrasporte = async (req, res) => {
try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllTransporte);
   res.json(result.recordset);
} catch (error) {
    res.status(500);
    res.send(error.message);
}

};

export const createNewTrasportes  = async(req, res) => {
    const {Id_Proveedor, Placa_Vehiculo, Marca, Modelo, N_Identifición_Conductor, Nombre_Conductor, Estado} = req.body
    if(Id_Proveedor == null||  Placa_Vehiculo == null ||Marca == null || Modelo == null || N_Identifición_Conductor == null|| Nombre_Conductor == null ){
        return res.status(400).json({ msg: "Bad Request. Please Fill all fields"});
    }
   
    try {
        const pool = await getConnection();
    await pool.request()
    .input("Id_Proveedor", sql.NVarChar, Id_Proveedor)
    .input("Placa_Vehiculo", sql.NVarChar, Placa_Vehiculo)
    .input("Marca", sql.NVarChar, Marca)
    .input("Modelo", sql.NVarChar, Modelo)
    .input("N_Identifición_Conductor", sql.NVarChar, N_Identifición_Conductor)
    .input("Nombre_Conductor", sql.NVarChar,Nombre_Conductor)
    .input("Estado", sql.Bit, Estado)
    .query(queries.AddNewTransporte)

    res.json({Id_Proveedor,Placa_Vehiculo, Placa_Vehiculo, Marca, Modelo,N_Identifición_Conductor,Nombre_Conductor,Estado});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const getTrasportesById = async (req, res) => {
    const {Id} = req.params;
    const pool = await getConnection()
    const result = await pool.request()
    .input("Id", sql.Int, Id)
    .query(queries.getTransporteById);
    console.log(result)



    res.send(result.recordset);
}


export const deleteTrasporteById = async(req, res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection()
        const result = await pool.request()
        .input("Id", sql.Int, Id)
        .query(queries.deleteTransporte);
        console.log(result)
    
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const updateTrasporteById = async (req,res)=>{
    const {Id, Id_Proveedor, Placa_Vehiculo, Marca, Modelo, N_Identifición_Conductor, Nombre_Conductor, Estado} = req.body
    if(Id_Proveedor == null||  Placa_Vehiculo == null ||Marca == null || Modelo == null || N_Identifición_Conductor == null|| Nombre_Conductor == null ){
        return res.status(400).json({ msg: "Bad Request. Please Fill all fields"});
    }
   

    const pool =await getConnection()
     await pool
    .request()
    .input("Id_Proveedor", sql.NVarChar, Id_Proveedor)
    .input("Id", sql.Int, Id)
    .input("Placa_Vehiculo", sql.NVarChar, Placa_Vehiculo)
    .input("Marca", sql.NVarChar, Marca)
    .input("Modelo", sql.NVarChar, Modelo)
    .input("N_Identifición_Conductor", sql.NVarChar, N_Identifición_Conductor)
    .input("Nombre_Conductor", sql.NVarChar,Nombre_Conductor)
    .input("Estado", sql.Bit, Estado)
    .query(queries.updateTransporteById);

    res.json({Id_Proveedor,Placa_Vehiculo,Placa_Vehiculo,Marca,Modelo, N_Identifición_Conductor,Nombre_Conductor,Estado});
}