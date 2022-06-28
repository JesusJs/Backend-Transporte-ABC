import { getConnection,sql } from "../database/connection.js";
import { queries } from "../database/querys.js";

export const getProveedores = async (req, res) => {
try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllProveedores);
   res.json(result.recordset);
} catch (error) {
    res.status(500);
    res.send(error.message);
}

};

export const createNewProveedores = async(req, res) => {
    const {Id_Proveedor, Nombre_Proveedor, N_Identificación, Dirección, Cantidad_Vehiculos} = req.body
    if(Id_Proveedor == null||  Nombre_Proveedor == null ||N_Identificación == null || Dirección == null || Cantidad_Vehiculos == null){
        return res.status(400).json({ msg: "Bad Request. Please Fill all fields"});
    }
   
    try {
        const pool = await getConnection();
    await pool.request()
    .input("Id_Proveedor", sql.NVarChar, Id_Proveedor)
    .input("Nombre_Proveedor", sql.NVarChar, Nombre_Proveedor)
    .input("N_Identificación", sql.Int, N_Identificación)
    .input("Dirección", sql.NVarChar, Dirección)
    .input("Cantidad_Vehiculos", sql.Int, Cantidad_Vehiculos)
    .query(queries.AddNewProveedores)

    res.json({Id_Proveedor,Nombre_Proveedor, N_Identificación, Dirección, Cantidad_Vehiculos});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const getProveedoresById = async (req, res) => {
    const {Id_Proveedor} = req.params;
    const pool = await getConnection()
    const result = await pool.request()
    .input("Id_Proveedor",sql.NVarChar, Id_Proveedor)
    .query(queries.getProveedorById);
    console.log(result)



    res.send(result.recordset[0]);
}


export const deleteProveedorById = async(req, res) => {

    try {
        const {Id_Proveedor} = req.params;
        const pool = await getConnection()
        const result = await pool.request()
        .input("Id_Proveedor", Id_Proveedor)
        .query(queries.deleteProveedor);
        console.log(result)
    
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const updateProveedorById = async (req,res)=>{
    const {Id_Proveedor, Nombre_Proveedor, N_Identificación, Dirección, Cantidad_Vehiculos} = req.body
    if(Id_Proveedor == null||  Nombre_Proveedor == null ||N_Identificación == null || Dirección == null || Cantidad_Vehiculos == null){
        return res.status(400).json({ msg: "Bad Request. Please Fill all fields"});
    }

    const pool =await getConnection()
     await pool
    .request()
    .input("Id_Proveedor", sql.NVarChar, Id_Proveedor)
    .input("Nombre_Proveedor", sql.NVarChar, Nombre_Proveedor)
    .input("N_Identificación", sql.Int, N_Identificación)
    .input("Dirección", sql.NVarChar, Dirección)
    .input("Cantidad_Vehiculos", sql.Int, Cantidad_Vehiculos)
    .query(queries.updateProveedoresById);

    res.json({Id_Proveedor,Nombre_Proveedor,N_Identificación,Dirección,Cantidad_Vehiculos});
}