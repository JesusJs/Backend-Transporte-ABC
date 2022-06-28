import { Router } from "express";
import { 
    createNewProveedores, 
    getProveedores, 
    getProveedoresById, 
    deleteProveedorById, 
    updateProveedorById,
} from "../controllers/proveedores.controllers.js";
import {
        getTrasporte,
        createNewTrasportes,
        getTrasportesById,
        deleteTrasporteById,
        updateTrasporteById
}from "../controllers/transportes.controllers.js";

const router = Router()
router.get('/Proveedores', getProveedores)
router.post('/Proveedores', createNewProveedores);
router.get('/Proveedores/:Id_Proveedor', getProveedoresById);
router.delete('/Proveedores/:Id_Proveedor', deleteProveedorById );
router.put('/Proveedores/:id', updateProveedorById);
//Rutas Transporte
router.get('/Transporte', getTrasporte)
router.post('/Transporte', createNewTrasportes);
router.get('/Transporte/:id', getTrasportesById);
router.delete('/Transporte/:id', deleteTrasporteById );
router.put('/Transporte/:id', updateTrasporteById);
export default router